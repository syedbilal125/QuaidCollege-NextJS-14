"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
//! Assets
import CollageLogo from "./../../../public/Logo.png";
import NavMobile from "./NavMobile";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/Firebase/firebase";
import { Avatar } from "@nextui-org/react";
import { doc, getDoc } from "firebase/firestore";

export default function NavBar() {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState([]);

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

  return (
    <div className="bg-white border-b  transition-shadow py-3 z-30 shadow-sm sticky top-0">
      <div className="px-5  md:max-w-6xl mx-auto flex justify-between items-center">
        {/* Left side of he navbar */}
        <div className="flex gap-2 items-center">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={CollageLogo}
              alt="College Logo"
              width={45}
              height={45}
            />
          </Link>
          <h1 className="font-semibold text-[20px] leading-5 lg:text-3xl text-[#005976] ">
            Quaid <span className="text-[#FF5D2B]">College</span>
          </h1>
        </div>
        {/* Right side of the navbar */}
        <div className="flex gap-2 items-center">
          {/* PAGES  BUTTON */}
          <div className="hidden md:flex items-center gap-3  ">
            <ul className="flex items-center space-x-3 font-medium">
              <li className="hover:text-[#FF5D2B] transition-colors duration-500 text-[#162542] text-[17px]">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:text-[#FF5D2B] transition-colors duration-500 text-[#162542] text-[17px]">
                <Link href={"/about"}>About Us</Link>
              </li>
              <li className="hover:text-[#FF5D2B] transition-colors duration-500 text-[#162542] text-[17px]">
                <Link href={"/courses"}>Courses</Link>
              </li>
              <li className="hover:text-[#FF5D2B] transition-colors duration-500 text-[#162542] text-[17px]">
                <Link href={"/team"}>Team</Link>
              </li>
              <li className="hover:text-[#FF5D2B] transition-colors duration-500 text-[#162542] text-[17px]">
                <Link href={"/gallery"}>Gallery</Link>
              </li>
              <li className="hover:text-[#FF5D2B] transition-colors duration-500 text-[#162542] text-[17px]">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          {/* Enroll BTN */}
          <Link href={"/enroll"}>
            <button className="button hidden md:block">
              <span className="button-content text-white ">Enroll Now</span>
            </button>
          </Link>
          <div className="flex gap-x-12 items-center">
            <div>
              {user ? (
                <Link href={`/user/${user.uid}`}>
                  <Avatar
                    isBordered
                    color="secondary"
                    src={userData.profileImage}
                  />
                </Link>
              ) : (
                <>
                  <Link href={"/auth"}>
                    <button className="button hidden md:block">
                      <span className="button-content text-white ">Login</span>
                    </button>
                  </Link>
                  <Link href={"/auth"} className="md:hidden">
                    <span className="button-content ">Login</span>
                  </Link>
                </>
              )}
            </div>
            <div className="md:hidden w-[30%]">
              <NavMobile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
