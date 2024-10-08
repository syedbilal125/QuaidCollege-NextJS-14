import React from "react";

export default function PageHeader({ title }) {
  return (
    <div className="pageHeaderImage text-6xl text-white flex justify-center items-center font-semibold">
      {title}
    </div>
  );
}
