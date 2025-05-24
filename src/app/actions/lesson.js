"use server";

import mongoose from "mongoose";
import { Lesson } from "../../BackendService/model/lesson.model";
import { Module as ModModel } from "../../BackendService/model/module.model";
import { create } from "../../BackendService/queries/lessons";

export async function createLesson(data) {
  try {
    const title = data.get("title");
    const slug = data.get("slug");
    const modId = data.get("moduleId");
    const order = data.get("order");

    console.log(title, slug, modId, order);

    const createdLesson = await create({ title, slug, order });
    console.log(createdLesson);

    const foundMod = await ModModel.findById(modId);
    foundMod.lessonIds.push(createdLesson._id);
    foundMod.save();

    return createdLesson;
  } catch (err) {
    throw new Error(err);
  }
}

export async function reOrderLesson(data) {
  try {
    await Promise.all(
      data.map(async (element) => {
        await Lesson.findByIdAndUpdate(element.id, { order: element.position });
      })
    );
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateLesson(lessonId, data) {
  console.log("**** updateLesson", lessonId, data);
  try {
    await Lesson.findByIdAndUpdate(lessonId, data);
  } catch (err) {
    throw new Error(err);
  }
}

export async function changeLessonPublishState(lessonId) {
  console.log("changeLessonPublishState", lessonId);
  const lesson = await Lesson.findById(lessonId);
  try {
    const res = await Lesson.findByIdAndUpdate(lessonId, { active: !lesson.active }, { lean: true });
    return res.active;
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteLesson(lessonId, modId) {
  try {
    const foundMod = await ModModel.findById(modId);
    foundMod.lessonIds.pull(new mongoose.Types.ObjectId(lessonId));
    await Lesson.findByIdAndDelete(lessonId);
    foundMod.save();
  } catch (err) {
    throw new Error(err);
  }
}
