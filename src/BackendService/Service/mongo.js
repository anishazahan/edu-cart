import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("connected mongodb......................");
    return connection;
  } catch (err) {
    console.log(err);
  }
}
