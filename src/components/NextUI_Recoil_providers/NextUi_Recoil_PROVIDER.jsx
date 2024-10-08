"use client";
import { NextUIProvider } from "@nextui-org/react";
import { RecoilRoot } from "recoil";

export default function NextUI({ children }) {
  return (
    <RecoilRoot>
      <NextUIProvider>{children}</NextUIProvider>
    </RecoilRoot>
  );
}
