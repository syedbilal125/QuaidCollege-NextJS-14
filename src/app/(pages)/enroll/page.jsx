"use client";
import React, { useEffect, useState } from "react";
import Logo from "./../../../../public/Logo.png";
import Image from "next/image";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, firestore } from "@/Firebase/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import SuccessEnrolment from "../../../components/Enroll/SuccessEnrolment";
import { v4 as uuidv4 } from "uuid";


export default function Enroll() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  const [input, setInput] = useState({
    id: uuidv4(),
    fullname: "",
    age: "",
    phone: "",
    email: "",
    Gender: "",
    address: "",
    createdAt: Date.now(),
    colification: "",
  });

  const HandleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [enrollmentSuccessful, setEnrollmentSuccessful] = useState(false);

  const HandleFormSubmit = async (e) => {
    e.preventDefault();
    const newEnroll = {
      ...input,
    };
    await setDoc(
      doc(firestore, "enrollments_data_logs", input.id),
      newEnroll
    );
    const UserRef = doc(firestore, "user_data_logs", user.uid);
    await updateDoc(UserRef, {
      Enrolled: true,
    });
    setEnrollmentSuccessful(true);
    setTimeout(() => {
      router.push("/");
    }, 15000);
  };

  useEffect(() => {
    if (!user) {
      router.push("/");
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "warning",
        title: "Please login first to enroll.",
      });
    }
  }, [user, router, loading]);

  return (
    <div>
      {enrollmentSuccessful ? (
        <SuccessEnrolment userName={input.fullname} />
      ) : (
        <>
          <div className="flex">
            <div className="w-1/2 md:block hidden">
              <div className="ENroolImage relative" />
              <div className="absolute top-0 p-24">
                <div className="w-1/2 flex items-center space-x-2">
                  <Image src={Logo} alt="" className="w-12 h-14" />
                  <span className="text-white leading-7 font-medium text-xl">
                    Quaid College
                  </span>
                </div>
                <p className="text-white w-[460px] mt-6">
                  Quaid College has established itself as a premier institution
                  for nurturing aspiring coders, providing top-notch education,
                  mentorship, and resources to kickstart successful careers.
                  Whether you&apos;re a beginner or looking to enhance your
                  existing coding skills, Quaid College offers comprehensive
                  programs designed to cater to individuals at every skill
                  level.
                </p>
                <p className="text-white w-[460px] mt-2">
                  The supportive and innovative learning environment at Quaid
                  College encourages students to explore their potential and
                  delve deep into the world of coding. With experienced
                  instructors, state-of-the-art facilities, and a curriculum
                  that stays ahead of industry trends, you can be confident that
                  you&apos;ll be equipped with the knowledge and skills needed
                  to thrive in the ever-evolving tech landscape.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 min-h-screen  bg-[#002F3F] w-full p-2">
              <form
                onSubmit={HandleFormSubmit}
                className="flex flex-col px-14 itme space-y-1.5 py-8"
              >
                <h1 className="text-4xl text-white font-bold">Enroll Now</h1>
                <label className="text-white" htmlFor="fullname">
                  Full Name
                </label>
                <input
                  onChange={HandleInput}
                  type="text"
                  name="fullname"
                  max="20"
                  min="5"
                  required
                  className="py-1 focus:outline-none focus:border-blue-600 rounded-md focus:border-2 px-2 border-gray-300 mt-0.5"
                />
                <label className="text-white" htmlFor="colification">
                  Colification
                </label>
                <input
                  onChange={HandleInput}
                  type="text"
                  name="colification"
                  max="20"
                  min="5"
                  required
                  className="py-1 focus:outline-none focus:border-blue-600 rounded-md focus:border-2 px-2 border-gray-300 mt-0.5"
                />
                <label className="text-white" htmlFor="age">
                  Age
                </label>
                <input
                  onChange={HandleInput}
                  type="text"
                  name="age"
                  required
                  min="18"
                  max="50"
                  className="py-1 focus:outline-none focus:border-blue-600 rounded-md focus:border-2 px-2 border-gray-300 mt-0.5"
                />
                <label className="text-white" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  onChange={HandleInput}
                  type="number"
                  name="phone"
                  required
                  min={11}
                  max={11}
                  className="py-1 focus:outline-none focus:border-blue-600 rounded-md focus:border-2 px-2 border-gray-300 mt-0.5"
                />
                <label className="text-white" htmlFor="email">
                  Your Email
                </label>
                <input
                  onChange={HandleInput}
                  type="email"
                  name="email"
                  required
                  className="py-1 focus:outline-none focus:border-blue-600 rounded-md focus:border-2 px-2 border-gray-300 mt-0.5"
                />
                <label className="text-white" htmlFor="Gender">
                  Gender
                </label>
                <select
                  name="Gender"
                  id="Gender"
                  onChange={HandleInput}
                  required
                  className="py-1 focus:outline-none focus:border-blue-600 rounded-md focus:border-2 px-2"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others...</option>
                </select>
                <label className="text-white" htmlFor="address">
                  Address
                </label>
                <input
                  onChange={HandleInput}
                  required
                  type="text"
                  max="50"
                  name="address"
                  className="py-1 focus:outline-none focus:border-blue-600 rounded-md focus:border-2 px-2 border-gray-300 mt-0.5 mb-1"
                />
                <div className="flex w-full space-x-2">
                  <Link href={"/"} className="">
                    <button className="  px-12 mt-1 rounded-full bg-transparent py-2.5 border-orange-500 border-2">
                      <span className="button-content text-white mt-0.5">
                        Back
                      </span>
                    </button>
                  </Link>
                  <button
                    className="button  w-1/4 mt-1"
                    onClick={HandleFormSubmit}
                  >
                    <span className="button-content text-white mt-0.5">
                      Submit
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
