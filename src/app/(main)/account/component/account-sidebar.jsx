import Image from "next/image";
import Menu from "./account-menu";

import { redirect } from "next/navigation";
import { auth } from "../../../../../auth.js";
import profileImg from "../../../../assets/img/user.webp";
import { getUserByEmail } from "../../../../BackendService/queries/users.js";
// import profileImg2 from "../../../../assets/img/user.png";

export const dynamic = "force-dynamic";

const AccountSidebar = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }

  const loggedInUser = await getUserByEmail(session?.user?.email);

  return (
    <div className="lg:w-1/4 md:px-3">
      <div className="relative">
        <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
          <div className="profile-pic text-center mb-5">
            {/* <input id="pro-img" name="profile-image" type="file" className="hidden" onChange="loadFile(event)" /> */}
            <div>
              <div className="relative size-28 mx-auto">
                <Image
                  src={profileImg}
                  className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                  id="profile-banner"
                  alt={`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}
                  width={112}
                  height={112}
                />
                <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img" />
              </div>
              <div className="mt-4">
                <h5 className="text-lg font-semibold">{`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}</h5>
                <p className="text-slate-400">{loggedInUser?.email}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 dark:border-gray-700">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSidebar;
