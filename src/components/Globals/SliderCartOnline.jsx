import React from "react";

export default function SliderCartOnline({ data: { url, title } }) {
  return (
    <div className="w-full">
      <div className="h-[300px] w-full mb-[9px] relative slider_cart--gradient">
        <img src={url} className="w-full h-full object-cover rounded-[25px]" />
        <div className="absolute bottom-4 right-4 z-10">
          <span className="text-lg font-normal text-white leading-normal">
            اکران آنلاین
          </span>
          <h3 className="text-white text-xl font-bold leading-normal">
            {title}
          </h3>
        </div>
      </div>
      <button className="bg-secondary rounded-full p-[5px] flex items-center gap-[9px] mr-3">
        <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center">
          <img src="/svg/ticket.svg" />
        </div>
        <span className="text-base text-white font-medium leading-normal pl-[22px]">
          تهیه بلیت
        </span>
      </button>
    </div>
  );
}
