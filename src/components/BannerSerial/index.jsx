import React from "react";

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
        <button className="self-start bg-secondary rounded-full p-[5px] flex items-center gap-[9px]">
          <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
            <img src="/svg/triangle.svg" />
          </div>
          <span className="text-base text-white font-medium leading-normal pl-[22px]">
            مشاهده سریال‌ها
          </span>
        </button>
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
