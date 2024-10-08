import Image from "next/image";
import React from "react";

export default function FeaturesShowCase({ icon, title, des }) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start">
      <div className="p-2 rounded-full bg-[#ff6941] text-[35px]">{icon}</div>
      <div className="flex  flex-col">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p>
          {des}
        </p>
      </div>
    </div>
  );
}
