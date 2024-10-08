"use client";
import React from "react";
import SIRSJ from "./../../../../public/pimg1.jpg";
import SIRSD from "./../../../../public/pimg2.png";
import sinorTrainer from "./../../../../public/sinorTrainer.jpg";
import sinorTrainer2 from "./../../../../public/sinorTrainer2.jpg";
import TeamCard from "@/components/TeamComponents/teamCard";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/pageHeader/PageHeader";

export default function page() {
  return (
    <>
      <NavBar />
      <PageHeader title="Team" />

      <div className="">
        <div className="max-w-6xl mx-auto py-10 ">
          <h1 className="text-5xl font-semibold text-center">Management Team</h1>
          <div className="pt-7">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-10 lg:gap-20 lg:mx-28">
              <TeamCard
                img={SIRSJ}
                name="Prof. Zahid Abbas"
                des=" Executive Director, Quaid College Of Management & Technology and Executive Director at
                    Indus Foundation for Human Development. Educational
                    Consultant, Training Expert & Researcher"
              />
              <TeamCard
                img={SIRSD}
                name="Shahid Khalid"
                des="Seasoned IT expert with over 25 years of hands-on experience in
            system administration, network security, and software development.
            Manager at Quaid College, guiding aspiring professionals towards
            success in the dynamic field of technology."
              />
            </div>
            <h1 className="text-5xl font-semibold text-center py-10 pt-20">
              Training Team
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-10 lg:gap-20 lg:mx-28">
              <TeamCard
                name="Fawad Ahmad"
                img={sinorTrainer}
                des="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum vero doloremque sunt asperiores ipsam magnam. Aliquid neque quasi minus.
            "
              />

              <TeamCard
                name="Ali Husnian"
                img={sinorTrainer2}
                des="
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non earum vero doloremque sunt asperiores ipsam magnam. Aliquid neque quasi minus.
            "
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
