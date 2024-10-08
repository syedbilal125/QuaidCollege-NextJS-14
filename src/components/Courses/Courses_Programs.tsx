import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import CoursesShowCaseCards from "./CoursesShowCaseCards";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { firestore } from "@/Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

type CourseType = {
  id: string;
  coursetitle: string;
  deepDescription: string;
  image: string;
  shortDescription: string;
};

export const getCourses = async (): Promise<CourseType[]> => {
  const q = collection(firestore, "courses");
  const querySnapshot = await getDocs(q);
  const courses: CourseType[] = [];
  querySnapshot.forEach((doc) => {
    courses.push({ id: doc.id, ...doc.data() } as CourseType);
  });
  return courses;
};

const CoursesPrograms = async () => {
  const courses = await getCourses();

  return (
    <div
      className="max-w-6xl md:flex  md:flex-col md:items-center lg:block lg:mx-auto"
      id="courses"
    >
      <h2 className="flex  items-center md:text-center text-[20px] text-[#ff6941] gap-2 ml-4 md:ml-0">
        <LuGraduationCap />
        <span className="font-semibold">Our Courses</span>
      </h2>
      <h2 className="md:text-[50px] font-semibold text-[40px] text-center md:text-start">
        Graduate Programs
      </h2>
      <div className="flex justify-center items-center md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden pt-4">
          {courses.map((item) => (
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
  );
};

export default CoursesPrograms;