import React, { useEffect, useRef, useState } from "react";
import ArrowBtn from "./ArrowBtn";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function MovieSlider({
  movies,
  title,
  CartComponent,
  cartWidth,
  spaceBetween,
}) {
  const swiperRef = useRef();
  const [isEnd, setIsEnd] = useState(false);
  const [isBeggining, setIsBeggining] = useState(true);

  function nextSlideHandler() {
    swiperRef.current.slideNext();
    setIsBeggining(false);
    if (swiperRef.current.isEnd) {
      setIsEnd(true);
    }
  }

  function prevSlideHandler() {
    swiperRef.current.slidePrev();
    setIsEnd(false);
    if (swiperRef.current.isBeginning) {
      setIsBeggining(true);
    }
  }

  return (
    <div className="container mx-auto mb-[125px]">
      <div className="flex items-center mb-6">
        <h4 className="text-[25px] text-white font-bold leading-normal ml-[11px]">
          {title}
        </h4>
        <a className="text-main-light text-sm font-medium leading-normal">
          مشاهده بیشتر
        </a>
        <div className="w-[32px] h-[32px] flex justify-center items-center bg-[#645E7D] rounded-full mr-auto">
          <img
            src="/svg/filter.svg"
            className="w-[20px] h-[20px] object-contain"
          />
        </div>
        <ArrowBtn
          style={`${isBeggining ? "text-main-light" : "text-white"} rotate-180`}
          clickHandler={prevSlideHandler}
        />
        <ArrowBtn
          style={`${isEnd ? "text-main-light" : "text-white"} `}
          clickHandler={nextSlideHandler}
        />
      </div>
      <Swiper
        className="mySwiper movieSlider-swiper"
        slidesPerView={"auto"}
        spaceBetween={spaceBetween}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {movies.map((movie) => {
          return (
            <SwiperSlide key={movie.id} style={{ width: `${cartWidth}px` }}>
              <CartComponent data={movie} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
