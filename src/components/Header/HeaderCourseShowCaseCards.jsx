"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaReact } from "react-icons/fa";
import hackingCourseicon from "./../../../public/hacker.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { SiKubernetes } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";

export default function HeaderCourseShowCaseCards() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:translate-y-3 ">
      <div
        className="max-w-[340px] min-h-60 bg-[#005976] bg-opacity-80 hover:bg-[#ff6941] cursor-pointer duration-700 upAndDOWN"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex pt-5 px-5">
          <div>
            <FaReact size={60} color="white" />
          </div>
          <ScrollLink to="courses" smooth={true} duration={2000}>
            <div className="text-white pt-[0.9rem] pl-3">
              <h2 className="text-[23px] font-semibold ">React Specialist</h2>
              <p className="pt-3">
                Master React.js fundamentals with our Spliclists comprehensive
                course for aspiring web developers.
              </p>
              <div className="mt-2">
                <Link
                  href={`/courses`}
                  className="mt-2  flex items-center gap-2"
                >
                  <span>Learn more</span> <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </ScrollLink>
        </div>
      </div>
      <ScrollLink to="courses" smooth={true} duration={2000}>
        <div
          className="max-w-[340px] upAndDOWN min-h-60 bg-[#ff6941] bg-opacity-95 hover:bg-[#005976] cursor-pointer duration-700"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="flex pt-5 px-5">
            <div>
              <Image
                src={hackingCourseicon}
                alt="hacking"
                width={300}
                height={300}
              />
            </div>
            <div className="text-white pt-[0.9rem] pl-3">
              <h2 className="text-[23px] font-semibold ">Ethical Hacking</h2>
              <p className="pt-2">
                Explore ethical hacking techniques and cybersecurity
                fundamentals in this comprehensive course for aspiring security
                professionals.
              </p>
              <div className="mt-2">
                <Link
                  href={`/courses`}
                  className="mt-2 flex items-center gap-2"
                >
                  <span>Learn more</span> <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollLink>
      <ScrollLink to="courses" smooth={true} duration={2000}>
        <div
          className="max-w-[340px] upAndDOWN min-h-60  bg-[#005976] bg-opacity-80 hover:bg-[#ff6941] cursor-pointer duration-700"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="flex pt-5 px-5">
            <div>
              <SiKubernetes size={60} color="white" />
            </div>
            <div className="text-white pt-[0.9rem] pl-3">
              <h2 className="text-[23px] font-semibold ">MicroServices</h2>
              <p className="pt-3">
                Learn to design, build, and manage scalable microservices
                architecture with our in-depth course for developers and
                architects.
              </p>
              <div className="mt-2">
                <Link
                  href={`/courses`}
                  className="mt-2 flex items-center gap-2"
                >
                  <span>Learn more</span> <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollLink>
    </div>
  );
}
