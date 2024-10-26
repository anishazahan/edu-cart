import { replaceMongoIdInObject } from "@/lib/convertData";
import bcrypt from "bcryptjs";
import { User } from "../model/user-model";

export async function getUserByEmail(email) {
  const user = await User.findOne({ email: email }).lean();
  return replaceMongoIdInObject(user);
}
export async function validatePassword(email, password) {
  const user = await getUserByEmail(email);
  const isMatch = await bcrypt.compare(password, user.password);
  return isMatch;
}
