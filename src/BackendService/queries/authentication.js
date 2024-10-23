"use server";

import { User } from "@/BackendService/model/user-model";
import bcrypt from "bcryptjs";

export async function findUserByCredentials(credentials) {
  //   const user = await User.findOne(credentials).lean();
  //   if (user) {
  //     return replaceMongoIdInObject(user);
  //   }
  //   return null;
  console.log("credentials.............hhh.......", credentials);
  try {
    if (credentials?.email) {
      const user = await User?.findOne({ email: credentials?.email });
      console.log("user............lll........", user);
      if (user) {
        const isMatch = await bcrypt.compare(credentials.password, user.password);

        if (isMatch) {
          console.log("match...........");
          return {
            ...user,
            _id: user._id.toString(), // Ensure _id is a string
          };
        } else {
          console.error("password mismatch");
          throw new Error("Check your password");
        }
      } else {
        console.error("User not found");
        throw new Error("User not found");
      }
    }
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}
