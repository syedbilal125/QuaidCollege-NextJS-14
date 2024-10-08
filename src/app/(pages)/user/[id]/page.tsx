"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { auth, firestore } from "@/Firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

import { IoArrowBackOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import UserPage from "@/components/UserComponents/UserPage";
import { useSetRecoilState } from "recoil";
import { userModleState } from "@/atoms/userModleAtom";
import { adminModleState } from "@/atoms/adminModleAtom";
import AdminModle from "@/components/ADMIN-MODEL/AdminModle";

type UserProps = {
  params: {
    id: string;
  };
};

type User = {
  displayName: string;
  email: string;
  Enrolled: boolean;
  createdAt: number;
  uid: string;
  updateAt: number;
  isAdmin: boolean;
};

const User: React.FC<UserProps> = (props) => {
  const {
    params: { id },
  } = props;
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/");
  });

  const [userData, setUserData] = useState<User>({} as User);

  useEffect(() => {
    const getUserData = async () => {
      const docRef = doc(firestore, "user_data_logs", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data() as User);
      } else {
        console.log("No such document!");
      }
    };
    getUserData();
  }, [setUserData]);

  const setAdminModelState = useSetRecoilState(adminModleState);
  const setUserModelState = useSetRecoilState(userModleState);
  const ChangeUserState = (type: "account" | "yourfaq" | "support") => {
    setUserModelState((oldType) => ({ ...oldType, type }));
  };
  const ChangeAdminModelState = (
    type:
      | "accountSettings"
      | "staffPanal"
      | "getAllUser"
      | "getAllEnrollements"
      | "getAllFAQ"
      | "MakeCourse"
      | "Youtube_testimonials"
  ) => {
    setAdminModelState((oldType) => ({ ...oldType, type }));
  };

  return (
    <>
      <div className="flex">
        {/* Side bar */}
        <div className="bg-blue-500 h-screen sticky top-0 w-1/4 py-20 hidden md:block">
          <div className="mx-10 flex flex-col justify-between h-full">
            <div className="text-white">
              {userData.isAdmin ? (
                <ul className="mt-5 space-y-4">
                  <li
                    className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                    onClick={() => ChangeAdminModelState("accountSettings")}
                  >
                    Account Settings
                  </li>
                  <li
                    className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                    onClick={() => ChangeAdminModelState("staffPanal")}
                  >
                    Staff Panal
                  </li>
                  <li
                    className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                    onClick={() => ChangeAdminModelState("getAllUser")}
                  >
                    Get All Users
                  </li>
                  <li
                    className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                    onClick={() => ChangeAdminModelState("getAllEnrollements")}
                  >
                    Get All Enrollements
                  </li>
                  <li
                    className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                    onClick={() => ChangeAdminModelState("getAllFAQ")}
                  >
                    Get All FAQS
                  </li>
                  <li
                    className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                    onClick={() => ChangeAdminModelState("MakeCourse")}
                  >
                    Make A Course
                  </li>
                  <li
                    className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                    onClick={() =>
                      ChangeAdminModelState("Youtube_testimonials")
                    }
                  >
                    Add Youtube Video
                  </li>
                </ul>
              ) : (
                <ul className="mt-7 space-y-4">
                  <li
                    className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                    onClick={() => ChangeUserState("account")}
                  >
                    Account Settings
                  </li>
                  <li
                    className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                    onClick={() => ChangeUserState("support")}
                  >
                    Support
                  </li>
                </ul>
              )}
            </div>
            <div>
              <div
                className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer text-white flex items-center space-x-2"
                onClick={() => auth.signOut()}
              >
                <HiOutlineLogout /> <span>Logout</span>
              </div>
              <Link
                href="/"
                className="flex items-center mt-3 space-x-2 text-[18px] hover:translate-x-2 duration-500 cursor-pointer text-white"
              >
                <IoArrowBackOutline className="mb-[3px] " />{" "}
                <span>Go Back</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          {userData.isAdmin ? <AdminModle /> : <UserPage />}
        </div>
      </div>
    </>
  );
};
export default User;
