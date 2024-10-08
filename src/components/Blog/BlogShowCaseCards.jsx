import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function BlogCards({
  EventTitle,
  img,
  description,
  data,
  eventPlace,
}) {
  return (
    <div className="max-w-[310px] duration-400  group hover:shadow-lg overflow-hidden  bg-[#EEF7FF]">
      <Link href={`/`}>
        <div>
          <div className="overflow-hidden cursor-pointer">
            <img
              src={img}
              alt="CourseImage"
              className="w-full h-1/2 group-hover:scale-125 duration-700"
            />
          </div>
          <div className=" w-full min-h-56 p-4 h-full flex flex-col justify-between">
            <div className="flex-1">
              <h1 className="text-[25px] font-semibold  cursor-pointer duration-400 transition-colors leading-7">
                {EventTitle}
              </h1>
              <p className=" pt-2">{description}</p>
            </div>
            <button
              className=" px-2 py-5  "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              {" "}
              <span className="flex items-center gap-1 ">
                Read More <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
