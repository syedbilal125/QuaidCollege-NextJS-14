"use client";
import { auth, firestore } from "@/Firebase/firebase";
import { userModleState } from "@/atoms/userModleAtom";
import { Avatar } from "@nextui-org/react";
import { sendPasswordResetEmail } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { MdAlternateEmail } from "react-icons/md";
import { useSetRecoilState } from "recoil";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { IoLogOut } from "react-icons/io5";

const Account = () => {
  const [user] = useAuthState(auth);

  const [userData, setUserData] = useState({});
  const setUserModelState = useSetRecoilState(userModleState);
  const ChangeUserState = (type) => {
    setUserModelState((oldType) => ({ ...oldType, type }));
  };

  useEffect(() => {
    const getSolvedProblems = async () => {
      const docRef = doc(firestore, "user_data_logs", user?.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    getSolvedProblems();
  }, [setUserData]);

  const [resetPasswordWithEmail, setResetPasswordWithEmail] = useState("");
  const SendEmailToResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, resetPasswordWithEmail);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="hidden lg:block">
        <h1 className="text-4xl font-medium">Your Account Settings</h1>
        <div className="my-6 flex items-center space-x-2">
          <Avatar
            isBordered
            color="secondary"
            src={userData.profileImage}
            className="w-[70px] h-[70px]"
          />
          <div>
            <h1 className="text-3xl font-medium">{userData.displayName}</h1>
            <p className="text-[14px]">{userData.email}</p>
          </div>
        </div>
        <div>
          <h2>Reset Your Password</h2>
          <div
            className={`flex bg-white items-center py-3 px-3 border rounded-md w-1/2`}
          >
            <MdAlternateEmail className="mb-[1px]" />
            <input
              type="text"
              className={`w-full px-2 outline-none`}
              placeholder="Enter your email"
              name="email"
              onChange={(e) => setResetPasswordWithEmail(e.target.value)}
            />
          </div>
          <button
            className="bg-[#005976] text-white py-2 px-4 mt-2 rounded-lg"
            onClick={SendEmailToResetPassword}
          >
            Send Email
          </button>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="flex mx-10 justify-between items-center mt-10">
          <Link href={"/"}>
            <IoIosArrowBack size={21} />
          </Link>
          <button onClick={() => auth.signOut()}>
            <IoLogOut size={20} />
          </button>
        </div>
        <div className="my-6 flex items-center space-x-2 flex-col">
          <Avatar
            isBordered
            color="secondary"
            src={userData.profileImage}
            className="w-[70px] h-[70px]"
          />
          <div>
            <h1 className="text-3xl font-medium text-center">
              {userData.displayName}
            </h1>
            <p className="text-[14px]">{userData.email}</p>
          </div>
        </div>
        <hr />
        <div className="mx-10">
          <ul className="mt-7 space-x-3 flex">
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
          <div className="mt-10">
            <h2>Reset Your Password</h2>
            <div
              className={`flex bg-white items-center py-3 px-3 border rounded-md w-1/2`}
            >
              <MdAlternateEmail className="mb-[1px]" />
              <input
                type="text"
                className={`w-full px-2 outline-none`}
                placeholder="Enter your email"
                name="email"
                onChange={(e) => setResetPasswordWithEmail(e.target.value)}
              />
            </div>
            <button
              className="bg-[#005976] text-white py-2 px-4 mt-2 rounded-lg"
              onClick={SendEmailToResetPassword}
            >
              Send Email
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Account;
