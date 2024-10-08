import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TeamCard({ img, name, des }) {
  return (
    <div>
      <div className=" bg-[#EEF7FF]  rounded-md hover:bg-blue-100 duration-500 transition-opacity group cursor-pointer h-[450px]">
        <div className="bg-[#002F3F] h-1/3 flex justify-center items-center rounded-t-md ">
          <Image
            src={img}
            width={100}
            height={100}
            alt="e"
            className="rounded-full  border-white border-2 translate-y-14 absolute group-hover:scale-105 duration-700"
          />
        </div>
        <div className="flex justify-center mt-12 flex-col items-center">
          <h1 className="text-2xl font-medium">{name}</h1>
          <p className="text-center px-5 pt-3">{des}</p>
        </div>
      </div>
    </div>
  );
}
