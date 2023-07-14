import React from "react";
import Button from "../Globals/Button";

export default function BannerSerial() {
  return (
    <div
      className="container mx-auto h-[300px] rounded-tr-[30px] rounded-br-[30px] flex items-center mb-[125px]"
      style={{
        background:
          "linear-gradient(270deg, #2A3243 0%, rgba(42, 50, 67, 0.00) 100%)",
      }}
    >
      <div className="flex flex-col gap-[35px] mr-[71px] ml-[87px]">
        <p className="text-[28px] font-black leading-[45px] text-white max-w-[20ch]">
          هرچقدر بیشتر فیلم ببینی میلیونر میشی ...
        </p>
        <Button
          text="مشاهده سریال‌ها"
          theme={["bg-secondary", "bg-white", "#202735"]}
        />
      </div>
      <div className="relative grow h-full">
        <img
          src="/svg/rewards.svg"
          className="absolute right-0 top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}
