import React from "react";

export default function Button() {
  return (
    <button className="flex items-center sm:px-3 px-2 sm:py-[14px] py-3 bg-bg-light backdrop:blur-[5px] rounded-[25px] mx-auto sm:mb-[49px] mb-[30px]">
      <img
        src="/svg/Film.svg"
        className="lg:w-[47px] w-[35px] lg:h-[47px] h-[35px] object-contain"
      />
      <span className="lg:text-2xl sm:text-xl text-lg font-bold leading-normal text-white mx-[35px]">
        ترکی لر
      </span>
    </button>
  );
}
