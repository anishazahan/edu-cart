import "server-only";

import { getUserByEmail } from "@/BackendService/queries/users";
import { auth } from "../../auth";

export async function getLoggedInUser() {
  const session = await auth();

  if (!session?.user) return null;

  return getUserByEmail(session?.user?.email);
}
