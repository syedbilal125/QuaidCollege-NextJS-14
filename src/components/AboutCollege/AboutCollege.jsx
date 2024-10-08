import React from "react";
import CollegeImage from "./../../../public/aboutCollege.png";
import Image from "next/image";
import { LuGraduationCap } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function AboutCollege() {
  return (
    <div className="max-w-6xl mx-auto overflow-hidden " id="about">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="">
          <Image
            data-aos="fade-right"
            data-aos-duration="1500"
            src={CollegeImage}
            alt="College Image"
            className="max-w-2xl w-[300px] md:w-[400px] lg:w-[530px]"
            width={550}
          />
        </div>
        <div className="mx-10 lg:pl-3 flex flex-col justify-center  pt-8 lg:pt-0 ">
          <h1 className="text-[40px] md:text-[50px] font-semibold leading-none pt-5  text-[#ff6941]">
            Quaid College
          </h1>
          <div className="text-[30px] pt-3 font-semibold leading-none capitalize text-gray-900">
            &apos;learning beyond imaginations&apos;
          </div>
          <p className="mt-6">
            Quaid College of Management & Technology (QCMT) was established in
            April-1995. Cyber Leadership Development Program is a flagship
            initiative of Quaid College. It aims to develop cyber technology
            leaders having a futuristic vision and global professional outlook.
            The program will facilitate technological transformation and
            economic prosperity through cyber innovation and empowerment of IT
            human resource of global standards using bootcamp methodology.
          </p>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-y-6">
            <div
              className="flex gap-2 "
              data-aos="fade"
              data-aos-duration="3000"
            >
              <div className="rounded-full text-white w-12 h-14 bg-[#ff6941] flex justify-center items-center">
                <span className="text-xl">01</span>
              </div>
              <div className="flex flex-col ">
                <span className="text-xl font-semibold">Quality education</span>
                <p className="w-[200px] pt-1">
                  Providing best quality education since 1995.
                </p>
              </div>
            </div>
            <div
              className="flex gap-2  "
              data-aos="fade-left"
              data-aos-duration="2500"
            >
              <div className="rounded-full text-white w-12 h-14 bg-[#ff6941] flex justify-center items-center">
                <span className="text-xl">02</span>
              </div>
              <div className="flex flex-col ">
                <span className="text-xl font-semibold">Cyber leadership</span>
                <p className="w-[200px] pt-1">
                  Quaid College aims to make cyber leaders.
                </p>
              </div>
            </div>
            <div
              className="flex gap-2 "
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="rounded-full text-white w-12 h-14 bg-[#ff6941] flex justify-center items-center">
                <span className="text-xl">03</span>
              </div>
              <div className="flex flex-col ">
                <span className="text-xl font-semibold">We are built different</span>
                <p className="w-[200px] pt-1">
                  Our unique approach to education sets us apart.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-5" data-aos="fade-up" data-aos-duration="1500">
            <Link href='/about'>
              <button className="headerBTNS w-40 h-10 ">
                {" "}
                <span className="flex items-center gap-1 text-[14px]">
                  Read More <FaArrowRightLong />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
