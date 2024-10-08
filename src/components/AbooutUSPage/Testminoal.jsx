import Image from "next/image";
import React from "react";

export default function Testminoal({ img, name, job, des }) {
  return (
    <div className="flex justify-center flex-col items-center py-10">
      <Image src={img} alt="e" className="w-20 rounded-full h-20" />
      <h1 className="text-2xl font-medium pt-1">{name}</h1>
      <p className="text-gray-400 pt-1 ">{job}</p>
      <p className="text-center text-gray-500 mx-3">{des}</p>
    </div>
  );
}
