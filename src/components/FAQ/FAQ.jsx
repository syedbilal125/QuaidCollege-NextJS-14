"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, firestore } from "@/Firebase/firebase";
import { v4 as uuidv4 } from "uuid";
import { useAuthState } from "react-firebase-hooks/auth";

export default function FAQ() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  const data = [
    {
      question: "How can i enroll in a course?",
      answer:
        "To enroll click on the button in the top right corner then enter all fields. You will be contacted by one of our team members to aprove your enrollment in a course.",
    },
    {
      question: "Is Life skills sessions are free?",
      answer:
        "Yeah 21st Life Skills are totaly free. We Dont want students to bound their lifes in just coding. Thats why we are providing free life skills sessions, so students know how to behiave, communicate, survive, and top of that we will also guide them how to crack a job.",
    },
    {
      question: "What is the duration of each course?",
      answer:
        "Each course has a duration of 1 year. Now most of your will think that others are offering 3 months courses but think this way to be a master at something you need to provide some time to it.",
    },
    {
      question: "Will i recive a certificate after completing a course?",
      answer:
        "Yes on a successful course completion, you will revice a certificate of completion and you can add it to your professional portfolio.",
    },
    {
      question: "Do we provide online classes too?",
      answer:
        "No we dont provide online classes just because of communication lack, internet disturbance and inperson a trainner can assist you more easily.",
    },
  ];

  const [state, setState] = useState(null);
  const toggle = (i) => {
    if (state === i) {
      return setState(null);
    }
    setState(i);
  };

  const [faq, setFAQ] = useState({
    ID: uuidv4(),
    name: "",
    email: "",
    phone: "",
    question: "",
  });

  const HandleInput = (e) => {
    setFAQ({ ...faq, [e.target.name]: e.target.value });
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const newFAQ = {
      ...faq,
    };
    await setDoc(doc(firestore, "faq_data_logs", faq.ID), newFAQ);
    const FaqReferenceID = faq.ID
    const UserRef = doc(firestore, "user_data_logs", user.uid);
    await updateDoc(UserRef, {
      FAQ: arrayUnion(FaqReferenceID),
    });
  };

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-center md:items-center gap-2 lg:ustify-between items-center">
        <div className="w-[370px] lg:w-[800px]">
          <h1 className="text-3xl lg:text-6xl font-semibold">
            Get every single answer here.
          </h1>
          <p className="text-[14px] lg:text-xl text-gray-600 py-4">
           Ask anything about the courses, fees, any douts and please provide a valid email & phone number so we can assist you. 
          </p>
          <div className="pt-3">
            {data.map((item, i) => (
              <div className="mb-2" key={i + item}>
                <motion.div
                  initial={{ y: 200 }}
                  whileInView={{
                    y: 0,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                  className={`flex rounded-md  border border-gray-300 items-center justify-between py-4 px-4 gap-2 ${
                    state === i && "border-orange-500"
                  }`}
                >
                  <h2 className="">{item.question}</h2>
                  <button className="border p-2" onClick={() => toggle(i)}>
                    {state === i ? (
                      <IoIosArrowDown size={25} />
                    ) : (
                      <IoIosArrowBack size={25} />
                    )}
                  </button>
                </motion.div>
                <div
                  className={` pt-3   ${
                    state === i ? "block " : "hidden"
                  } duration-500 transition-transform`}
                >
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[375px] lg:w-[600px] px-4  ">
          <div className="bg-[#002F3F] py-14 rounded-xl ">
            <div className="mx-14">
              <h1 className="text-4xl font-semibold text-white ">
                Ask a Question
              </h1>
              <div className="flex  flex-col pt-4">
                <form
                  className="pt-2 flex flex-col gap-4"
                  onChange={HandleSubmit}
                >
                  <input
                    type="text"
                    className="focus:outline-none px-4 py-2 placeholder:text-gray-500 rounded-md"
                    placeholder="Your Name"
                    name="name"
                    required
                    onChange={HandleInput}
                  />
                  <input
                    type="email"
                    className="focus:outline-none px-4 py-2 placeholder:text-gray-500 rounded-md "
                    placeholder="Your Email"
                    required
                    name="email"
                    onChange={HandleInput}
                  />
                  <input
                    type="number"
                    className="focus:outline-none px-4 py-2 placeholder:text-gray-500 rounded-md"
                    placeholder="Your Phone"
                    required
                    name="phone"
                    onChange={HandleInput}
                  />
                  <textarea
                    id=""
                    cols="30"
                    name="question"
                    rows="10"
                    className="resize-none p-4 focus:outline-none rounded-md"
                    placeholder="Write comments"
                    onChange={HandleInput}
                  ></textarea>
                  <div className="flex justify-center pt-3">
                    <button
                      className="headerBTNS px-2 w-1/2"
                      onClick={HandleSubmit}
                    >
                      {" "}
                      <span className=" gap-1 text-center">Submit</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
