import React from "react";
import NewsLetter from "./../../../public/letter.png";
import Image from "next/image";

export default function News() {
  return (
    <div className="py-[70px] bg-[#005976]">
      <div className="max-w-6xl mx-auto flex flex-col px-4 lg:flex-row lg:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src={NewsLetter} alt="letter" className="w-12 h-12" />
          <div>
            <h1 className="text-white text-2xl lg:text-5xl font-medium">Subscribe for Newsletter</h1>
            <p className="text-white">Get the latest news and updates about Quaid College.</p>
          </div>
        </div>
          <form action="" className="w-full bg-white flex px-4 rounded-md lg:w-1/3">
            <input type="email" className="py-2 w-full focus:outline-none" placeholder="Email Adress..." />
            <button className="bg-[#005976] py-3 my-2 px-4 rounded-md w-56 text-white ">Subscribe Now</button>
          </form>
      </div>
    </div>
  );
}
