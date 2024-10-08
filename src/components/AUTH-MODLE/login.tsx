"use client";
import React, { useState } from "react";

import { MdAlternateEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { HiMiniLockClosed } from "react-icons/hi2";
import { FaEyeSlash } from "react-icons/fa";

import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/Firebase/firebase";
import { useRouter } from "next/navigation";
import { authModleState } from "@/atoms/authModleAtom";
import { useSetRecoilState } from "recoil";

type pageProps = {};

const Login: React.FC<pageProps> = () => {
  const router = useRouter();
  // for Switching  State of Auth Modal
  const setAuthModleState = useSetRecoilState(authModleState);
  const ChangeSetAuthModleType = (
    type: "login" | "register" | "forgotPassword"
  ) => {
    setAuthModleState((oldType) => ({ ...oldType, type }));
  };

  const [InvalidCrdin, setInvalidCrdin] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  const [input, setInput] = useState({ email: "", password: "" }); //State
  const HandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const [signInWithEmailAndPassword, error, loading, user] =
    useSignInWithEmailAndPassword(auth);

  const HandleFormButton = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!input.email || !input.password) {
        alert("Please enter all fields");
      }
      const user = await signInWithEmailAndPassword(
        input.email,
        input.password
      );
      if (!user) {
        setInvalidCrdin(true);
        return;
      }
      router.push("/");
    } catch (err: any) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="lg:w-1/2 bg-white h-[400px] md:h-[500px] rounded-[20px] flex justify-center items-center flex-col">
        <h2 className="text-2xl font-medium mb-10">Login into your account</h2>
        <div className="px-10  lg:w-[90%]  md:w-[80%]">
          {InvalidCrdin && <h2>Invalid Email or Password</h2>}
          <form
            action=""
            className="flex flex-col space-y-1"
            onSubmit={HandleFormButton}
          >
            <div
              className={`flex bg-white items-center py-3 px-3 border rounded-md ${
                InvalidCrdin && "border-red-500"
              }`}
            >
              <MdAlternateEmail className="mb-[1px]" />
              <input
                type="text"
                className={`w-full px-2 outline-none `}
                placeholder="Enter your email"
                name="email"
                onChange={HandleInputChange}
              />
            </div>
            <div
              className={`flex bg-white items-center py-3 px-3 border rounded-md ${
                InvalidCrdin && "border-red-500"
              }`}
            >
              <HiMiniLockClosed className="mb-[1px]" />
              <input
                type={isToggled ? "text" : "password"}
                className={`w-full px-2 outline-none `}
                name="password"
                placeholder="Enter password"
                onChange={HandleInputChange}
              />
              <button type="button" onClick={handleToggle}>
                {isToggled ? <FaEyeSlash /> : <FaEye className="mb-[1px]" />}
              </button>
            </div>
            <button className="bg-[#005976] text-white py-2 px-2 rounded-lg">
              Login
            </button>
          </form>
          <div>
            <div className="flex justify-end mt-4 ">
              <span
                className="hover:underline cursor-pointer"
                onClick={() => ChangeSetAuthModleType("forgotPassword")}
              >
                Forgot Password?
              </span>
            </div>
            <div className="flex justify-center mt-4 ">
              <span>
                Don&apos;t have a account?{" "}
                <span
                  onClick={() => ChangeSetAuthModleType("register")}
                  className=" hover:underline cursor-pointer"
                >
                  Sign Up
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
