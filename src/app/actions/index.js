"use server";

import { findUserByCredentials } from "@/BackendService/queries/authentication";

export async function performLogin(formData) {
  try {
    const found = await findUserByCredentials(formData);

    console.log("found........", found);

    return found?._doc;
  } catch (error) {
    throw error;
  }
}
