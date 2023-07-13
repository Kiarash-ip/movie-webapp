import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
import SlideItem from "./SlideItem";
import { sliderMoviesData } from "../../statics";

export default function Slider() {
  return (
    <div className="">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        loop={true}
        coverflowEffect={{
          rotate: 5,
          stretch: 10,
          depth: 0,
          slideShadows: false,
          scale: 0.8,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {sliderMoviesData.map((movie) => (
          <SwiperSlide key={movie.id} className="z-50">
            <SlideItem
              englishTitle={movie.englishTitle}
              persianTitle={movie.persianTitle}
              tag={movie.tag}
              url={movie.url}
              rate={movie.rate}
              description={movie.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
