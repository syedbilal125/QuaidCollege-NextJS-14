import { auth, firestore } from "@/Firebase/firebase";
import { userModleState } from "@/atoms/userModleAtom";
import { Avatar } from "@nextui-org/react";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

type SupportProps = {};

type User = {
  displayName: string;
  email: string;
  Enrolled: boolean;
  createdAt: number;
  uid: string;
  updateAt: number;
  isAdmin: boolean;
  profileImage: string;
};

const Support: React.FC<SupportProps> = () => {
  const [user] = useAuthState(auth);

  const [userData, setUserData] = useState<User>({} as User);
  const setUserModelState = useSetRecoilState(userModleState);
  const ChangeUserState = (type: "account" | "yourfaq" | "support") => {
    setUserModelState((oldType) => ({ ...oldType, type }));
  };

  useEffect(() => {
    const getUserData = async () => {
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
  return (
    <div>
      <div className="hidden lg:block">
        <h1 className="text-3xl font-semibold">Contact Support</h1>
        <div className="text-xl mt-4 font-medium">Need Help?</div>
        <div className="w-2/3">
          <p>
            If you&apos;re experiencing any issues or have any questions
            regarding our services, feel free to get in touch with our support
            team. We&apos;re here to assist you!
          </p>
          <div className="mt-2">
            <span className="my-2 text-xl font-medium">
              Contact Information
            </span>
            <div className="mt-1">
              <div className="space-x-1.5 ">
                <span className="text-[17px] font-semibold">Email</span> :
                <Link
                  href={`mailto:QuaidCollege@gmail.com`}
                  className="text-blue-500"
                >
                  QuaidCollege@gmail.com
                </Link>
              </div>
              <div className="space-x-1.5 ">
                <span className="text-[17px] font-semibold">Phone</span> :
                <span className="text-blue-500">03214642555</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl mt-3 font-medium">How Can We Help You?</h1>
            <p>
              Whether you have inquiries about admissions course offerings
              technical support or any other concerns our dedicated support
              staff is ready to provide assistance. Please don&apos;t hesitate
              to reach out to us via email or phone and we&apos;ll get back to
              you as soon as possible.
            </p>
            <p className="mt-2">
              Thank you for choosing Quaid College. We&apos;re committed to
              ensuring your experience with us is seamless and enjoyable.
            </p>
          </div>
          <hr className="mt-4" />
          <p className="mt-4">
            Feel free to customize the contact information, support hours, and
            any additional details to match the specific needs and policies of
            Quaid College.
          </p>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="my-6 flex items-center space-x-2 flex-col">
          <Avatar
            isBordered
            color="secondary"
            src={userData.profileImage}
            className="w-[70px] h-[70px]"
          />
          <div>
            <h1 className="text-3xl font-medium text-center">
              {userData.displayName}
            </h1>
            <p className="text-[14px]">{userData.email}</p>
          </div>
        </div>
        <hr />
        <div className="mx-10">
          <ul className="mt-7 space-x-3 flex">
            <li
              className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
              onClick={() => ChangeUserState("account")}
            >
              Account Settings
            </li>
            <li
              className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
              onClick={() => ChangeUserState("support")}
            >
              Support
            </li>
          </ul>
          <div className=" lg:hidden">
            <div className="text-xl mt-4 font-medium">Need Help?</div>
            <div className="w-full">
              <p>
                If you&apos;re experiencing any issues or have any questions
                regarding our services, feel free to get in touch with our
                support team. We&apos;re here to assist you!
              </p>
              <div className="mt-2">
                <span className="my-2 text-xl font-medium">
                  Contact Information
                </span>
                <div className="mt-1">
                  <div className="space-x-1.5 ">
                    <span className="text-[17px] font-semibold">Email</span> :
                    <Link
                      href={`mailto:QuaidCollege@gmail.com`}
                      className="text-blue-500"
                    >
                      QuaidCollege@gmail.com
                    </Link>
                  </div>
                  <div className="space-x-1.5 ">
                    <span className="text-[17px] font-semibold">Phone</span> :
                    <span className="text-blue-500">03214642555</span>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-xl mt-3 font-medium">
                  How Can We Help You?
                </h1>
                <p>
                  Whether you have inquiries about admissions course offerings
                  technical support or any other concerns our dedicated support
                  staff is ready to provide assistance. Please don&apos;t
                  hesitate to reach out to us via email or phone and we&apos;ll
                  get back to you as soon as possible.
                </p>
                <p className="mt-2">
                  Thank you for choosing Quaid College. We&apos;re committed to
                  ensuring your experience with us is seamless and enjoyable.
                </p>
              </div>
              <hr className="mt-4" />
              <p className="mt-4">
                Feel free to customize the contact information, support hours,
                and any additional details to match the specific needs and
                policies of Quaid College.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Support;
