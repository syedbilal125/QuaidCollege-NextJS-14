"use client";
import { adminModleState } from "@/atoms/adminModleAtom";
import React from "react";
import { useRecoilValue } from "recoil";
import AccountSettings from "./AccountSettings";
import GetAllEntrollments from "./GetAllEntrollments";
import GetAllFAQ from "./GetAllFAQ";
import StaffPanal from "./StaffPanal";
import GetAllUsers from "./GetAllUsers";
import MakeCourses from "./MakeCourses";
import UploadOn_Youtube from "./UploadOn_Youtube";

type AdminTypes = {};

const AdminModle: React.FC<AdminTypes> = () => {
  const adminState = useRecoilValue(adminModleState);
  return (
    <>
      <div className="">
        {adminState.type === "accountSettings" ? (
          <AccountSettings />
        ) : adminState.type === "getAllEnrollements" ? (
          <GetAllEntrollments />
        ) : adminState.type === "staffPanal" ? (
          <StaffPanal />
        ) : adminState.type === "getAllFAQ" ? (
          <GetAllFAQ />
        ) : adminState.type === "getAllUser" ? (
          <GetAllUsers />
        ) : adminState.type === "Youtube_testimonials" ? (
          <UploadOn_Youtube />
        ) : (
          <MakeCourses />
        )}
      </div>
    </>
  );
};
export default AdminModle;
