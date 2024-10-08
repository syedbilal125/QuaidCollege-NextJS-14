import { atom } from "recoil";

type AdminModleState = {
  isOpen: boolean;
  type:
    | "accountSettings"
    | "staffPanal"
    | "getAllUser"
    | "getAllEnrollements"
    | "getAllFAQ"
    | "MakeCourse"
    | "Youtube_testimonials"
};

const initalUserModleState: AdminModleState = {
  isOpen: false,
  type: "accountSettings",
};

export const adminModleState = atom<AdminModleState>({
  key: "adminModleState",
  default: initalUserModleState,
});
