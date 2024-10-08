"use client";
import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import HeaderCourseShowCaseCards from "./HeaderCourseShowCaseCards";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function Header() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <div className="headerBACK " id="home">
        <div className="max-w-6xl pt-32 mx-auto content px-4">
          <div>
            <p
              className="text-white uppercase font-semibold text-[20px] tracking-normal w-1/2"
              data-aos="fade"
              data-aos-duration="3000"
            >
              Welcome to Quaid College
            </p>
            <h2
              className="text-white text-5xl font-bold capitalize pt-8"
              data-aos="fade-up"
            >
              Cyber Leadership Development Program
            </h2>
            <div data-aos="fade" data-aos-duration="3000">
              <h2 className=" text-white text-[17px] pt-2 w-2/3">
                CLDP is a flagship initiative of Quaid College. It aims to
                develop cyber technology leaders having a futuristic vision and
                global professional outlook. The program will facilitate
                technological transformation and economic prosperity through
                cyber innovation and empowerment of IT human resource of global
                standards using bootcamp methodology.
              </h2>
            </div>
          </div>
          <div className="flex gap-2 pt-5">
            <ScrollLink
              to="about"
              smooth={true}
              duration={2000}
            >
              <button
                className="headerBTNS px-2"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                {" "}
                <span className="flex items-center gap-1 ">
                  Discover More <FaArrowRightLong />
                </span>
              </button>
            </ScrollLink>
            <Link href="/contact">
              <button
                className="bg-white headerBTNSs "
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {" "}
                <span className="flex items-center gap-1">
                  Contact Us <FaArrowRightLong />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="max-w-6xl mx-auto  justify-center hidden mt-10 lg:block md:mt-10 mb-5 lg:mt-28  ">
          <HeaderCourseShowCaseCards />
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex  justify-center  mt-10 lg:hidden  md:mt-10 mb-5 lg:mt-10  ">
        <HeaderCourseShowCaseCards />
      </div>
    </>
  );
}
