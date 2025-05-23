import { replaceMongoIdInObject } from "../../lib/convertData";
import { Lesson } from "../model/lesson.model";
import { Module as ModuleModel } from "../model/module.model";

export async function create(moduleData) {
  try {
    const createdModule = await ModuleModel.create(moduleData);
    return JSON.parse(JSON.stringify(createdModule));
  } catch (e) {
    throw new Error(e);
  }
}

export async function getModule(moduleId) {
  try {
    const foundModule = await ModuleModel.findById(moduleId)
      .populate({
        path: "lessonIds",
        model: Lesson,
      })
      .lean();
    return replaceMongoIdInObject(foundModule);
  } catch (e) {
    throw new Error(e);
  }
}
