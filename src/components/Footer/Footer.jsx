import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="py-10 bg-[#002F3F]">
        <div className="max-w-6xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-white gap-5 pl-5 overflow-hidden">
            <div className="">
              <div className="w-1/2">
                <span className="text-[25px] font-semibold">About Us</span>
                <div className="bg-[#FF6941] w-1/2  h-[2px]"></div>
              </div>
              <p className="pt-6 text-gray-300">
                CLDP is a flagship initiative of Quaid College. It aims to
                develop cyber technology leaders having a futuristic vision and
                global professional outlook. The program will facilitate
                technological transformation and economic prosperity through
                cyber innovation and empowerment of IT human resource of global
                standards using bootcamp methodology.
              </p>
              <div className="flex items-center gap-3 pt-5">
                <a
                  href="https://www.facebook.com/QuaidCollegeNetwork/"
                  target="_blank"
                  className="p-2 bg-[#476974] rounded-full hover:scale-110 duration-500"
                >
                  <TiSocialFacebook size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/company/quaid-college/?originalSubdomain=pk"
                  className="p-2 bg-[#476974] rounded-full hover:scale-110 duration-500"
                >
                  <IoLogoLinkedin size={17} />
                </a>
                <a
                  href="https://wa.me/923044642555"
                  className="p-2 bg-[#476974] rounded-full hover:scale-110 duration-500"
                >
                  <FaWhatsapp size={17} />
                </a>
              </div>
            </div>

            <div>
              <div className="w-1/2 overflow-hidden">
                <span className="text-[25px] font-semibold">Our Links</span>
                <div className="bg-[#FF6941] w-1/2  h-[2px]"></div>
              </div>
              <div>
                <ul className="flex flex-col gap-2 pt-5">
                  <Link href="/">
                    <li className="hover:translate-x-2 duration-150 hover:text-[#FF6941]">
                      Home
                    </li>
                  </Link>
                  <Link href="/about">
                    <li className="hover:translate-x-2 duration-150 hover:text-[#FF6941]">
                      About
                    </li>
                  </Link>
                  <Link href="/courses">
                    <li className="hover:translate-x-2 duration-150 hover:text-[#FF6941]">
                      Courses
                    </li>
                  </Link>
                  <Link href="/gallery">
                    <li className="hover:translate-x-2 duration-150 hover:text-[#FF6941]">
                      Gallery
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li className="hover:translate-x-2 duration-150 hover:text-[#FF6941]">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <div>
              <div className="w-1/2">
                <span className="text-[25px] font-semibold">Latest Post</span>
                <div className="bg-[#FF6941] w-1/2  h-[2px]"></div>
              </div>
              <div className="flex  pt-5 gap-2">
                <div className="">
                  <Image
                    src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/s-blogimg-01.png"
                    width={60}
                    height={60}
                    alt="latest posts"
                  ></Image>
                </div>
                <div>
                  <span className="text-[13px] leading-6 w-1/3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </span>
                  <p className="text-[#FF6941] text-[13px]">7 March, 2023</p>
                </div>
              </div>
              <div className="flex  pt-3 gap-2">
                <div className="">
                  <Image
                    src="https://wpdemo.zcubethemes.com/qeducato/wp-content/uploads/2023/03/s-blogimg-01.png"
                    width={60}
                    height={60}
                    alt="latest posts"
                  ></Image>
                </div>
                <div>
                  <span className="text-[13px] leading-6 w-1/3">
                    ipsum dolor sit Nobis, cum! Lorem ipsum dolor obcaecati
                    harum!
                  </span>
                  <p className="text-[#FF6941] text-[13px]">7 March, 2023</p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-1/2">
                <span className="text-[25px] font-semibold">Contact Us</span>
                <div className="bg-[#FF6941] w-1/2  h-[2px]"></div>
              </div>
              <div>
                <ul>
                  <div className="flex items-center gap-2 pt-5">
                    <li className="w-10 h-10  bg-[#FF6941] flex justify-center items-center rounded-full">
                      <FaPhone size={20} className="" />
                    </li>
                    <div className="">
                      <p>042-35857491</p>
                      <p>+92 304 464 2555</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-5">
                    <li className="w-10 h-10  bg-[#FF6941] flex justify-center items-center rounded-full">
                      <MdEmail size={20} className="" />
                    </li>
                    <div className="">
                      <p>info@quaid.edu.pk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 pt-5">
                    <li className="w-10 lg:w-20 h-10  bg-[#FF6941] flex justify-center items-center rounded-full">
                      <IoLocationSharp size={20} className="" />
                    </li>
                    <div className="">
                      <p>
                        114-A, New Muslim Town, Bank Stop, Wahdat Road, Lahore,
                        Pakistan
                      </p>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FF6941] py-3  md:px-4">
        <div className="max-w-6xl mx-auto flex lg:flex-row lg:items-center lg:justify-between flex-col items-center">
          <div className="flex justify-center items-center">
            <h1 className="text-[24px] lg:text-[26px] text-white font-semibold ">
              Quaid College
            </h1>
          </div>
          <p className="text-white">
            Copyright © Quaid College 2024 . All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
