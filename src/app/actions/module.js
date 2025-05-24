"use server";

import mongoose from "mongoose";
import { Course } from "../../BackendService/model/course-model";
import { Module } from "../../BackendService/model/module.model";
import { create } from "../../BackendService/queries/modules";
// import { create } from "@/queries/modules";
// import { Course } from "@/model/course-model";
// import { Module } from "@/model/module.model";

export async function createModule(data) {
  try {
    const title = data.get("title");
    const slug = data.get("slug");
    const courseId = data.get("courseId");
    const order = data.get("order");

    const createdModule = await create({ title, slug, course: courseId, order });

    const foundCourse = await Course.findById(courseId); // Renamed variable
    foundCourse.modules.push(createdModule._id);
    foundCourse.save();

    return createdModule;
  } catch (e) {
    throw new Error(e);
  }
}

export async function reOrderModules(data) {
  /*
  [
      { id: '66577a9b91726a7429e0b9a6', position: 0 },
      { id: '66577a4a91726a7429e0b994', position: 1 },
      { id: '66577a9091726a7429e0b99d', position: 2 }
  ]
  */

  try {
    console.log(data);

    await Promise.all(
      data.map(async (element) => {
        await Module.findByIdAndUpdate(element.id, { order: element.position });
      })
    );

    //
  } catch (e) {
    throw new Error(e);
  }
}

export async function updateModule(moduleId, data) {
  try {
    await Module.findByIdAndUpdate(moduleId, data);
  } catch (err) {
    throw new Error(err);
  }
}

export async function changeModulePublishState(moduleId) {
  console.log("changeModulePublishState", moduleId);
  const foundModule = await Module.findById(moduleId); // Renamed variable
  try {
    const res = await Module.findByIdAndUpdate(moduleId, { active: !foundModule.active }, { lean: true });
    return res.active;
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteModule(moduleId, courseId) {
  console.log("delete", moduleId, courseId);
  try {
    const foundCourse = await Course.findById(courseId); // Renamed variable
    foundCourse.modules.pull(new mongoose.Types.ObjectId(moduleId));
    foundCourse.save();
    await Module.findByIdAndDelete(moduleId);
  } catch (err) {
    throw new Error(err);
  }
}
