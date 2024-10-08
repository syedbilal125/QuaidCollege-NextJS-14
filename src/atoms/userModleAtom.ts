import { atom } from "recoil";

type UserModleState = {
  isOpen: boolean;
  type: "account" | "yourfaq" | "support";
};

const initalUserModleState: UserModleState = {
  isOpen: false,
  type: "account",
};

export const userModleState = atom<UserModleState>({
  key: "userModleState",
  default: initalUserModleState,
});
