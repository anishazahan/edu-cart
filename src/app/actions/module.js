"use server";

import mongoose from "mongoose";
import { Course } from "../../BackendService/model/course-model";
import { Module as ModModel } from "../../BackendService/model/module.model";
import { create } from "../../BackendService/queries/modules";

export async function createModule(data) {
  try {
    const title = data.get("title");
    const slug = data.get("slug");
    const courseId = data.get("courseId");
    const order = data.get("order");

    const createdMod = await create({ title, slug, course: courseId, order });

    const foundCourse = await Course.findById(courseId);
    foundCourse.modules.push(createdMod._id);
    foundCourse.save();

    return createdMod;
  } catch (e) {
    throw new Error(e);
  }
}

export async function reOrderModules(data) {
  try {
    console.log(data);

    await Promise.all(
      data.map(async (element) => {
        await ModModel.findByIdAndUpdate(element.id, { order: element.position });
      })
    );
  } catch (e) {
    throw new Error(e);
  }
}

export async function updateModule(modId, data) {
  try {
    await ModModel.findByIdAndUpdate(modId, data);
  } catch (err) {
    throw new Error(err);
  }
}

export async function changeModulePublishState(modId) {
  console.log("changeModulePublishState", modId);
  const foundMod = await ModModel.findById(modId);
  try {
    const res = await ModModel.findByIdAndUpdate(modId, { active: !foundMod.active }, { lean: true });
    return res.active;
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteModule(modId, courseId) {
  console.log("delete", modId, courseId);
  try {
    const foundCourse = await Course.findById(courseId);
    foundCourse.modules.pull(new mongoose.Types.ObjectId(modId));
    foundCourse.save();
    await ModModel.findByIdAndDelete(modId);
  } catch (err) {
    throw new Error(err);
  }
}
