import { auth } from "../../../../auth";
import { getUserByEmail } from "../../../BackendService/queries/users";

import { NextResponse } from "next/server";
import { dbConnect } from "../../../BackendService/Service/mongo";

export const GET = async (request) => {
  const session = await auth();

  if (!session?.user) {
    return new NextResponse(`You are not authenticated!`, {
      status: 401,
    });
  }

  await dbConnect();

  try {
    const user = await getUserByEmail(session?.user?.email);

    return new NextResponse(JSON.stringify(user), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
