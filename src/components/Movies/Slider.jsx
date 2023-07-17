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
    <div className="movies-swiper-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={10}
        autoHeight={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper "
      >
        {sliderMoviesData.map((movie) => (
          <SwiperSlide
            key={movie.id}
            className="sm:w-[509px] w-[400px] movie__slide__item"
          >
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
