import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { moviesData } from "../../statics";

import "swiper/css";
import "swiper/css/pagination";
import Content from "./Content";

export default function Slider() {
  const paginationContainer = useRef();
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={true}
        className="mySwiper"
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        //   el: paginationContainer.current,
        // }}
        loop={true}
      >
        {moviesData.map((movie) => {
          return (
            <SwiperSlide key={movie.id} className="hero-section-gradient">
              <Content
                title={movie.title}
                description={movie.description}
                url={movie.url}
                tag={movie.tag}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
