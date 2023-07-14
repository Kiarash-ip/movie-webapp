import React from "react";
import { twMerge } from "tailwind-merge";

export default function DomeShape({ url, desc, theme, gradient }) {
  return (
    <div
      className="w-[380px] h-[360px] rounded-t-[200px] rounded-b-[25px] p-6 flex flex-col"
      style={{
        background: `url(/images/floor.png), linear-gradient(140deg, ${gradient} 0%, #212E46 100%)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
      }}
    >
      <div
        className={twMerge(
          "h-[200px] self-center flex justify-center relative dome-image-container",
          theme
        )}
      >
        <img src={url} className="h-full" />
      </div>
      <div className="flex justify-between mt-auto">
        <p className="text-white text-xl font-bold leading-7 max-w-[15ch] text-justify">
          {desc}
        </p>
        <button className="w-[50px] h-[50px] self-end rounded-[18px] bg-bg-light transition-colors hover:bg-[#ffffff4d] flex items-center justify-center">
          <img src="/svg/arrow-right.svg" className="rotate-180" />
        </button>
      </div>
    </div>
  );
}
