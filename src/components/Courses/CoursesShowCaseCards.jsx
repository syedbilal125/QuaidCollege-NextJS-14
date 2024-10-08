import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SlBookOpen } from "react-icons/sl";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CoursesShowCaseCards({
  CourseTitle,
  img,
  description,
  courseID
}) {
  return (
    <div className="max-w-[310px] duration-400 hover:bg-white  group hover:shadow-lg overflow-hidden  bg-[#EEF7FF]">
      <Link href={``}></Link>
      <div>
        <div className="overflow-hidden cursor-pointer">
          <Image
            src={img}
            alt="CourseImage"
            width={300}
            height={500}
            className="w-full h-1/2 group-hover:scale-125 duration-700"
          />
        </div>
        <div className=" w-full min-h-56 p-4 h-full flex flex-col justify-between">
          <div className="flex-1">
            <h1 className="text-[25px] font-semibold hover:text-[#ff6941] cursor-pointer duration-400 transition-colors">
              {CourseTitle}
            </h1>
            <p>{description}</p>
          </div>
          <div className="mt-2">
            <Link href={`/courses/${courseID}`} className="mt-2 flex justify-between  ">
              <div className=" flex items-center gap-2 text-[#ff6941]">
                <span>Learn more</span> <FaArrowRightLong />
              </div>
              <SlBookOpen className="group-hover:scale-125 text-[#fc8766] duration-400 group-hover:text-[#ff6941]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
