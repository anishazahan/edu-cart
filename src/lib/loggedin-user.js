import "server-only";

import { auth } from "../../auth";
import { getUserByEmail } from "../BackendService/queries/users";

export async function getLoggedInUser() {
  const session = await auth();

  if (!session?.user) return null;

  return getUserByEmail(session?.user?.email);
}
