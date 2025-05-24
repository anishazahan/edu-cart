"use server";

import bcrypt from "bcryptjs";
import { User } from "../../BackendService/model/user-model";

export async function findUserByCredentials(credentials) {
  try {
    if (credentials?.email) {
      const user = await User?.findOne({ email: credentials?.email });

      if (user) {
        const isMatch = await bcrypt.compare(credentials.password, user.password);

        if (isMatch) {
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
