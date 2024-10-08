import Link from "next/link";
import React from "react";

export default function UpcomingEventsCards({
  EventTitle,
  img,
  description,
  data,
  eventPlace,
}) {
  return (
    <div className="max-w-[310px] duration-400 hover:bg-[#005976]  group hover:shadow-lg overflow-hidden  bg-[#EEF7FF]">
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
              <h1 className="text-[25px] font-semibold group-hover:text-white cursor-pointer duration-400 transition-colors leading-7">
                {EventTitle}
              </h1>
              <p className="group-hover:text-[#b4c3f3] pt-2">{description}</p>
            </div>
            <div className="flex group-hover:text-white flex-col pt-2">
              <span className="">{data}</span>
              <span className="text-[#ff6941] group-hover:text-white">
                {eventPlace}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
