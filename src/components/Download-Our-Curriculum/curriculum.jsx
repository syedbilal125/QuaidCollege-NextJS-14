"use client";
import React from "react";
import { IoMdDownload } from "react-icons/io";
import download from "downloadjs";

export default function Curriculum() {
  return (
    <div className="fixed bottom-0 left-0 m-10 lg:m-20 z-30" >
      <div className="group relative flex justify-center items-center text-white text-sm font-bold">
        <div
          className="shadow-md flex items-center group-hover:gap-2 bg-[#ff6941] p-4 rounded-full cursor-pointer duration-300"
          onClick={() => download("Curriculum.pdf")}
        >
          <IoMdDownload size={24} />
          <button
            href={""}
            target="_blank"
            className="text-[0px] group-hover:text-sm duration-300"
          >
            Download Our Curriculum
          </button>
        </div>
      </div>
    </div>
  );
}
