import React from "react";
import { twMerge } from "tailwind-merge";

export default function BannerFilm({ order, style = "" }) {
  return (
    <div
      className={twMerge("w-full h-[300px] mt-[40px] mb-[125px]", style)}
      style={{
        background: "url(/images/gray-bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
      }}
    >
      <div className="container mx-auto h-full flex items-start gap-[40px] justify-center">
        <div
          className="flex flex-col justify-center gap-[27px] self-center mx-[60px]"
          style={{ order: order }}
        >
          <h3 className="text-[25px] font-black leading-[38px] max-w-[15ch] text-center text-white">
            تماشــای فیلم‌هـــای ایرانــــی و خارجـــــی بـه روز در منـــه
            بـــاخ
          </h3>
          <button className="bg-main rounded-full p-[5px] flex items-center gap-[9px]">
            <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
              <img src="/svg/triangle.svg" />
            </div>
            <span className="text-base text-white font-medium leading-normal pl-[22px]">
              مشاهده فیلم‌ها
            </span>
          </button>
        </div>
        {[1, 2, 3, 4].map((id) => {
          return (
            <img
              key={id}
              src={`/images/0${id}.png`}
              style={{ order: order === id ? id + 1 : id }}
            />
          );
        })}
      </div>
    </div>
  );
}
