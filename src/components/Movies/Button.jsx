import React from "react";

export default function Button() {
  return (
    <button className="flex items-center px-3 py-[14px] bg-bg-light backdrop:blur-[5px] rounded-[25px] mx-auto mb-[49px]">
      <img src="/svg/Film.svg" className="w-[47px] h-[47px] object-contain" />
      <span className="text-2xl font-bold leading-normal text-white mx-[35px]">
        ترکی لر
      </span>
    </button>
  );
}
