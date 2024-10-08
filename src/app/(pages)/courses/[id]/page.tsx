"use client";
import { auth, firestore } from "@/Firebase/firebase";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/Navbar";
import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import download from "downloadjs";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";

type pageProps = {
  params: {
    id: string;
  };
};

interface CourseType {
  id: string;
  coursetitle: string;
  deepDescription: string;
  image: string;
  shortDescription: string;
  coursePoints: [];
  outCome: string
}

type User = {
  displayName: string;
  email: string;
  Enrolled: boolean;
  createdAt: number;
  uid: string;
  updateAt: number;
  isAdmin: boolean;
};

const Page: React.FC<pageProps> = (props) => {
  const [user] = useAuthState(auth);
  const {
    params: { id },
  } = props;

  const [points, setPoints] = useState("");
  const [CourseData, setCourseData] = useState<CourseType>({} as CourseType);

  useEffect(() => {
    const getSingleEnrollment = async () => {
      const docRef = doc(firestore, "courses", id);
      const docSnap = await getDoc(docRef);
      setCourseData(docSnap.data() as CourseType);
    };
    getSingleEnrollment();
  }, [setCourseData]);

  const [userData, setUserData] = useState<User>({} as User);

  useEffect(() => {
    const getUserData = async () => {
      // @ts-ignore
      const docRef = doc(firestore, "user_data_logs", user!.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data() as User);
      } else {
        console.log("No such document!");
      }
    };
    getUserData();
  }, [setUserData]);

  const UpdateCoursePoints = async () => {
    const docRef = doc(firestore, "courses", id); // Update with your collection and document ID

    await updateDoc(docRef, {
      coursePoints: arrayUnion(points),
    });

    setPoints("");
  };

  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className="flex justify-center items-center flex-col  lg:flex-row lg:justify-normal lg:items-start w-[80%] mx-auto py-10 space-x-4">
          <div className="">
            <div className="">
              <Image
                src={CourseData.image}
                alt={CourseData.coursetitle}
                width={200}
                height={200}
                className="w-[400px] h-[150px]"
              />
            </div>
          </div>
          <div className=" w-full space-y-6">
            <div className="w-full">
              <h1 className="text-3xl font-semibold">
                {CourseData.coursetitle}
              </h1>
              <p className="">{CourseData.deepDescription}</p>
            </div>
            <div className="flex  items-start flex-col">
              <ul className="mt-2 space-y-2 list-disc">
                <h2 className="text-[20px] font-semibold">Technical Modules</h2>
                {CourseData?.coursePoints?.map((i) => (
                  <li key={i} className="ml-4">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[20px] font-semibold">OutComes</h2>
              <p>
               {CourseData.outCome}
              </p>
            </div>
            <button
              className="button hidden md:block mt-5"
              onClick={() => download("Curriculum.pdf")}
            >
              <span className="button-content text-white ">
                Download Full Curriculum
              </span>
            </button>
            {userData.isAdmin && (
              <div>
                <input
                  type="text"
                  value={points}
                  onChange={(e) => setPoints(e.target.value)}
                />
                <button onClick={UpdateCoursePoints}>add</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Page;
