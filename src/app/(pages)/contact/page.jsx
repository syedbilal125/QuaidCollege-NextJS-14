"use client";
import React, { useEffect } from "react";
import {
  FaFacebook,
  FaPhoneVolume,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/pageHeader/PageHeader";
import Link from "next/link";
import { FaSquareWhatsapp } from "react-icons/fa6";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <NavBar />
      <PageHeader title="Contact Us" />

      <div className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#EDF7FF] rounded-md min-h-24 hover:bg-[#FFF7EF] duration-500 cursor-pointer group">
                <div className="px-10 py-10 flex justify-center flex-col items-center gap-4">
                  <div className="p-10 rounded-full bg-white shadow-md">
                    <FaPhoneVolume size={40} />
                  </div>
                  <h1 className=" text-2xl font-semibold  group-hover:text-[#ff6941] duration-500 transition-colors">
                    042-35857491
                  </h1>
                </div>
              </div>
              <div className=" rounded-md min-h-24 bg-[#FFF7EF] group cursor-pointer">
                <div className="px-10 py-10 flex justify-center flex-col items-center gap-4">
                  <div className="p-10 rounded-full bg-white shadow-md">
                    <MdEmail size={40} />
                  </div>
                  <h1 className=" text-2xl font-semibold  group-hover:text-[#ff6941] duration-500 transition-colors">
                    info@quaid.edu.pk
                  </h1>
                </div>
              </div>
              <div className="bg-[#EDF7FF] rounded-md min-h-24 hover:bg-[#FFF7EF] duration-500 cursor-pointer group">
                <div className="px-10 py-10 flex justify-center flex-col items-center gap-4">
                  <div className="p-10 rounded-full bg-white shadow-md">
                    <FaLocationDot size={40} />
                  </div>
                  <h1 className=" text-2xl font-semibold text-center  group-hover:text-[#ff6941] duration-500 transition-colors">
                    114-A, New Muslim Town, Wahdat Road ,Lahore
                  </h1>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#EDF7FF] rounded-md min-h-24 hover:bg-[#FFF7EF] duration-500 cursor-pointer group">
                <Link target="_blank" href={'https://www.facebook.com/QuaidCollegeNetwork/'} className="px-10 py-10 flex justify-center flex-col items-center gap-4">
                  <div className="p-10 rounded-full bg-white shadow-md">
                    <FaFacebook size={40} />
                  </div>
                  <h1 className=" text-2xl font-semibold  group-hover:text-[#ff6941] duration-500 transition-colors">
                    Facebook
                  </h1>
                </Link>
              </div>
              <Link target="_blank" href={'https://wa.me/923044642555'} className=" rounded-md min-h-24 bg-[#FFF7EF] group cursor-pointer">
                <div className="px-10 py-10 flex justify-center flex-col items-center gap-4">
                  <div className="p-10 rounded-full bg-white shadow-md">
                    <FaSquareWhatsapp size={40} />
                  </div>
                  <h1 className=" text-2xl font-semibold  group-hover:text-[#ff6941] duration-500 transition-colors">
                    WhatsApp
                  </h1>
                </div>
              </Link>
              <Link target="_blank" href={'https://www.youtube.com/channel/UCrlC5RhaabUZdZFkO4ST6-g'} className="bg-[#EDF7FF] rounded-md min-h-24 hover:bg-[#FFF7EF] duration-500 cursor-pointer group">
                <div className="px-10 py-10 flex justify-center flex-col items-center gap-4">
                  <div className="p-10 rounded-full bg-white shadow-md">
                    <FaYoutube size={40} />
                  </div>
                  <h1 className=" text-2xl font-semibold text-center  group-hover:text-[#ff6941] duration-500 transition-colors">
                    Quaid College
                  </h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto py-10 mt-10">
          <h1 className="text-5xl pb-7 font-semibold text-center group-hover:text-[#ff6941]">
            Visit to Quaid College
          </h1>
          <div style={{ width: "100%" }} className="">
            <iframe
              width="100%"
              height="400"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=114-A,%20New%20Muslim%20Town,%20Bank%20Stop,%20Wahdat%20Road,%20Lahore,%20Pakistan+(Quaid%20College)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
