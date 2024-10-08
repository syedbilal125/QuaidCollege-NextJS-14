"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/Navbar";
import PageHeader from "@/components/pageHeader/PageHeader";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { MdTour } from "react-icons/md";
import { SiReactos } from "react-icons/si";
import CollegeImage from "./../../../../public/aboutusImage.png";
import AboutUsImage1 from "../../../../public/aboutusImage1.jpg";
import AboutUsImage2 from "../../../../public/aboutusImage2.jpg";
import Test1 from "../../../../public/sinorTrainer.jpg";
import Test2 from "../../../../public/sinorTrainer2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Testminoal from "@/components/AbooutUSPage/Testminoal";

export default function About() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <NavBar />
      <PageHeader title="About Us" />
      <div className="py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="">
              <Image
                data-aos="fade-right"
                data-aos-duration="1500"
                src={CollegeImage}
                alt="College Image"
                className="max-w-2xl w-[300px] md:w-[400px] lg:w-[530px]"
                width={550}
              />
            </div>
            <div className="mx-10 lg:pl-3 flex flex-col justify-center  pt-8 lg:pt-0 ">
              {/* <h2 className="flex items-center text-[20px] text-[#ff6941] gap-2 ">
                <LuGraduationCap />
                <span className="font-semibold">About Quaid College</span>
              </h2> */}
              <h1 className="text-[40px] md:text-[50px] font-semibold leading-none pt-5 text-[#ff6941] ">
                Quaid College
              </h1>
              <div className="text-[30px] pt-3  font-semibold leading-none capitalize text-gray-900">
                &ldquo; learning beyond imaginations &quot;
              </div>
              <p className="mt-6">
                Quaid College of Management & Technology (QCMT) was established
                in April-1995. Cyber Bootcamps is a flagship initiative of Quaid
                College. It aims to develop cyber technology leaders having a
                futuristic vision and global professional outlook. The program
                will facilitate technological transformation and economic
                prosperity through cyber innovation and empowerment of IT human
                resource of global standards using bootcamp methodology.
              </p>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div>
            <div className="w-full bg-[#005976] flex flex-col lg:flex-row lg:items-center">
              <div className="lg:w-1/2 ">
                <div className="mx-20 text-white flex flex-col gap-5 lg:text-start text-center">
                  <div className="flex justify-center pt-5 lg:block">
                    <div className="bg-[#FF6941]  rounded-full flex justify-center items-center w-20 h-20">
                      <MdTour size={40} color="white" />
                    </div>
                  </div>
                  <h1 className="text-2xl lg:text-5xl font-semibold">
                    Campus Tour
                  </h1>
                  <p className="text-[16px] font-medium">
                    Campus on a tour designed for prospective graduate and
                    professional students. You will see how our university like,
                    facilities, studenst and life in this university. Meet our
                    graduate admissions representative to learn more about our
                    graduate programs and decide what it the best for you.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 w-[450px] mx-auto">
                <Image
                  src={AboutUsImage1}
                  className="w-full lg:h-auto h-[300px] pt-3 lg:pt-0"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                />
              </div>
            </div>
            <div className="w-full bg-[#002F3F] flex lg:items-center flex-col lg:flex-row">
              <div className="lg:w-1/2 w-[450px] mx-auto">
                <Image
                  src={AboutUsImage2}
                  className="w-full lg:h-auto h-[300px] pt-3 lg:pt-0"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                />
              </div>
              <div className="lg:w-1/2 ">
                <div className="mx-20 text-white flex flex-col gap-5">
                  <div className="flex justify-center pt-5 lg:block">
                    <div className="bg-[#FF6941]  rounded-full flex justify-center items-center w-20 h-20">
                      <SiReactos size={40} color="white" />
                    </div>
                  </div>
                  <h1 className="lg:text-5xl font-semibold text-center lg:text-start text-2xl">
                    Powerful Alumni
                  </h1>
                  <p className="text-[18px] font-medium text-center lg:text-start pb-10 lg:pb-0">
                    Campus on a tour designed for prospective graduate and
                    professional students. You will see how our university like,
                    facilities, studenst and life in this university. Meet our
                    graduate admissions representative to learn more about our
                    graduate programs and decide what it the best for you.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="bg-[#002F3F]"></div> */}
          </div>
        </div>

        <div>
          <div className="flex justify-center flex-col items-center">
            <h2 className="flex items-center md:text-center text-[20px] text-[#ff6941] gap-2 ml-4 md:ml-0">
              <LuGraduationCap />
              <span className="font-semibold">Testimonial</span>
            </h2>
            <h2 className="text-5xl font-semibold pt-2 text-center">
              What Our Students Says
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 max-w-6xl mx-auto gap-20 pt-10">
            <div className="bg-[#EEF7FF] rounded-md">
              <Testminoal
                des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos impedit ipsa suscipit ut voluptatem optio sunt deserunt earum modi. Adipisci!"
                name="Faiq Saqib"
                job="Web Developer"
                img={Test1}
              />
            </div>
            <div className="bg-[#EEF7FF] rounded-md">
              <Testminoal
                des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos impedit ipsa suscipit ut voluptatem optio sunt deserunt earum modi. Adipisci!"
                name="Faiq Saqib"
                job="Web Developer"
                img={Test2}
              />
            </div>{" "}
            <div className="bg-[#EEF7FF] rounded-md">
              <Testminoal
                des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos impedit ipsa suscipit ut voluptatem optio sunt deserunt earum modi. Adipisci!"
                name="Ali Jawad"
                job="Web Developer"
                img={Test1}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
