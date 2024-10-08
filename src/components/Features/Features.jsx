"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import FeaturesImage from "./../../../public/features.png";
import FeaturesShowCase from "./FeaturesShowCase";
import { PiStudent } from "react-icons/pi";
import { CiTimer } from "react-icons/ci";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function Features() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="bg-[#002F3F]  lg:flex lg:flex-row  justify-center p-20 flex flex-col overflow-hidden items-center space-x-3">
      <div className="max-w-6xl flex-1  text-white ">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold  text-center md:text-start">
          Our Best Features
        </h1>
        <p className="text-center md:text-start pt-4 text-xl">
          Special wedding garments are often worn, and the ceremony is sometimes
          followed by a wedding reception. Music, poetry.
        </p>
        <div className="pt-10 space-y-4">
          <motion.div
            initial={{ y: 200 }}
            whileInView={{
              y: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <FeaturesShowCase
              icon={<PiStudent />}
              title={"One Trainer On 3 Students"}
              des={'Experience personalized learning with our course offering one trainer for every three students, ensuring focused attention and tailored guidance for mastering the material with ease and confidence.'}
            />
          </motion.div>
          <motion.div
            initial={{ y: 200 }}
            whileInView={{
              y: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <FeaturesShowCase
              icon={<AiOutlineFundProjectionScreen />}
              title={"400+ Projects"}
              des={"Gain hands-on experience with our course offering 400+ projects. Perfect for students to learn practical skills and apply theoretical knowledge in real-world scenarios for comprehensive development"}
            />
          </motion.div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <FeaturesShowCase
              icon={<HiOutlineLightBulb />}
              title={"21s Century Digital & Life Skills for Free"}
              des={
                'Free life skills sessions are designed to empower students with essential tools for personal growth, career success, and well-being.'
              }
            />
          </div>
        </div>
      </div>
      <div
        className="lg:h-full p-6 md:pb-5 lg:p-0 md:max-w-xl lg:inline-flex lg:max-w-2xl"
        data-aos="fade-left"
        data-aos-duration="2000"
      >
        <Image src={FeaturesImage} alt="Image" className="w-full " />
      </div>
    </div>
  );
}
