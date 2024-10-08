"use client";
import React, { useState } from "react";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="">
        <button className="toggle-button" onClick={toggleSidebar}>
          <CiMenuBurger />
        </button>
        <div
          className={`sidebar ${
            isOpen ? "open" : ""
          } flex justify-between flex-col`}
        >
          <div>
            <button className="close-button py-2" onClick={toggleSidebar}>
              <IoCloseOutline />
            </button>
            <div className="sidebar-content flex flex-col">
              <ul className="flex flex-col gap-y-10">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/courses"}>Courses</Link>
                </li>
                <li>
                  <Link href={"/team"}>Team</Link>
                </li>
                <li>
                  <Link href={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-5">
            <a
              href="https://www.facebook.com/QuaidCollegeNetwork/"
              target="_blank"
              className="p-2 bg-[#476974] rounded-full hover:scale-110 duration-500"
            >
              <TiSocialFacebook size={17} />
            </a>
            <a
              href="https://www.linkedin.com/company/quaid-college/?originalSubdomain=pk"
              className="p-2 bg-[#476974] rounded-full hover:scale-110 duration-500"
            >
              <IoLogoLinkedin size={17} />
            </a>
            <a
              href="https://wa.me/923044642555"
              className="p-2 bg-[#476974] rounded-full hover:scale-110 duration-500"
            >
              <FaWhatsapp size={17} />
            </a>
          </div>
        </div>
        {isOpen && <div className="backdrop" onClick={toggleSidebar}></div>}
      </div>
    </div>
  );
}
