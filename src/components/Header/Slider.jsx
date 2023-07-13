import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { moviesData } from "../../statics";

import "swiper/css";
import "swiper/css/pagination";
import Content from "./Content";

export default function Slider() {
  return (
    <>
      <Swiper modules={[Pagination]} pagination={true} className="mySwiper">
        {moviesData.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
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
