import React from "react";
import { twMerge } from "tailwind-merge";

export default function Logo({ style = "" }) {
  return (
    <div className={twMerge("lg:w-28 w-24", style)}>
      <img src="/svg/logo.svg" className="w-full" />
    </div>
  );
}
