import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "../Globals/Button";

export default function BannerFilm({ order, style = "" }) {
  return (
    <div
      className={twMerge("w-full h-[300px] mt-[40px] mb-[125px]", style)}
      style={{
        background: "url(/images/gray-bg.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="container mx-auto h-full flex items-start lg:gap-[40px] gap-[20px] justify-center">
        <div
          className="flex flex-col justify-center gap-[27px] self-center lg:mx-[60px] mx-[30px]"
          style={{ order: order }}
        >
          <h3 className="lg:text-[25px] text-xl font-black leading-[38px] lg:max-w-[15ch] max-w-[18ch] text-center text-white">
            تماشــای فیلم‌هـــای ایرانــــی و خارجـــــی بـه روز در منـــه
            بـــاخ
          </h3>
          <Button
            text="مشاهده فیلم‌ها"
            theme={["bg-main", "bg-white", "#202735"]}
          />
        </div>
        {[1, 2, 3, 4].map((id) => {
          return (
            <div style={{ order: order === id ? id + 1 : id }}>
              <img key={id} src={`/images/0${id}.png`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
