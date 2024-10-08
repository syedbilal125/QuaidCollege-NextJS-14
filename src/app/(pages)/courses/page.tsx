"use client";
import { firestore } from "@/Firebase/firebase";
import CoursesShowCaseCards from "@/components/Courses/CoursesShowCaseCards";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/Navbar";
import PageHeader from "@/components/pageHeader/PageHeader";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

type CourseType = {
  id: string
  coursetitle: string
  deepDescription: string
  image: string
  shortDescription: string
};

export default function Page() {
  function useGetEnrollments() {
    const [problems, setProblems] = useState<CourseType[]>([]);

    useEffect(() => {
      const getProblems = async () => {
        // Fetching data logic
        const q = collection(firestore, "courses");
        const querySnapshot = await getDocs(q);
        const temp: CourseType[] = [];
        querySnapshot.forEach((doc) => {
          temp.push({ id: doc.id, ...doc.data() } as CourseType);
        });
        setProblems(temp);
      };
      getProblems();
    }, []);
    return problems;
  }

  const test = useGetEnrollments();
  console.log(test);
  return (
    <div>
      <NavBar />
      <PageHeader title="Courses" />
      <div className="max-w-6xl mx-auto py-9">
        <div className="flex justify-center items-center md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 overflow-hidden pt-4">
            {test.map((item) => (
              <div data-aos="fade-up" data-aos-duration="2000" key={item.id}>
                <CoursesShowCaseCards
                  CourseTitle={item.coursetitle}
                  courseID={item.id}
                  img={item.image}
                  description={item.shortDescription}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
