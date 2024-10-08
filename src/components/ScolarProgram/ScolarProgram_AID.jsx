import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ScolarProgram_AID() {
  return (
    <div className="aid   ">
      <div className="max-w-6xl mx-auto text-white py-4 lg:flex  lg:flex-row lg:justify-between lg:items-center">
        <div className="py-16 ">
          <h1 className="text-2xl lg:text-6xl text-center lg:text-start font-semibold">
            Scholarship Programs
          </h1>
          <p className="w-300 text-[15px] lg:w-[700px] pt-3 text-xl text-center lg:text-start">
            At Estuidar University, we prepare you to launch your career by
            providing a supportive, creative, and professional environment from
            which to learn practical skills and build a network of industry
            contacts.
          </p>
          <div className="flex items-center justify-center w-full pt-10">
            <button
              className="headerBTNS px-2 py-5  lg:hidden "
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              {" "}
              <span className="flex items-center gap-1 text-center">
                Financial Aid <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
        <div className="hidden lg:inline-flex">
          <button
            className="headerBTNS px-2 py-5  "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            {" "}
            <span className="flex items-center gap-1 ">
              Financial Aid <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
