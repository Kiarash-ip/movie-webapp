import React, { useEffect } from "react";
import Tag from "../Globals/Tag";
import { useSwiperSlide, useSwiper } from "swiper/react";

export default function SlideItem({
  englishTitle,
  persianTitle,
  rate,
  tag,
  url,
  description,
}) {
  const swiperSlide = useSwiperSlide();
  const swiper = useSwiper();

  return (
    <div className={`${swiperSlide.isActive ? "" : "movies-slider"}`}>
      <img
        src={`${url}`}
        className="w-[509px] h-[368px] object-cover mb-5 rounded-[25px] shadow-[0px_6px_90px_0px_#1C1B2C]"
      />
      <div
        className="transition-opacity relative"
        style={{ opacity: `${swiperSlide.isActive ? "1" : "0"}` }}
      >
        <div className="flex justify-between mb-[20px]">
          <div className="text-white">
            <h4 className="text-[25px] font-bold leading-normal">
              {englishTitle}
            </h4>
            <h4 className="text-sm font-medium">{persianTitle}</h4>
          </div>
          <div className="flex items-end">
            <span className="text-main-light text-xs font-medium leading-normal ml-[3px]">
              10 /
            </span>
            <span className="text-white text-sm font-medium leading-normal ml-[3px]">
              {rate}
            </span>
            <img
              src="/svg/award.svg"
              className="w-6 h-6 object-contain ml-[10px]"
            />
            <Tag tag={tag} />
          </div>
        </div>
        <p className="text-sm text-white font-medium leading-6 text-justify">
          {description}
        </p>
        <button
          onClick={() => swiper.slidePrev()}
          className="w-[50px] h-[50px] hover:bg-slate-700 transition-colors rounded-full border border-white flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2     translate-x-[200%]"
        >
          <img
            src="/svg/arrow-right.svg"
            className="w-[30px] h-[30px] object-contain"
          />
        </button>
        <button
          onClick={() => swiper.slideNext()}
          className="w-[50px] h-[50px] hover:bg-slate-700 transition-colors rounded-full border border-white flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 translate-x-[-200%]"
        >
          <img
            src="/svg/arrow-right.svg"
            className="w-[30px] h-[30px] object-contain rotate-180"
          />
        </button>
      </div>
    </div>
  );
}
