import React from "react";
import Button from "../Globals/Button";

export default function Subscription() {
  return (
    <div
      className="w-full h-[280px] mb-[168px] relative"
      style={{
        backgroundImage: "url(/images/Mask-group.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="h-full relative subscription-gradient sm:inline-block hidden">
          <img src="/images/image-26.png" className="h-full object-cover" />
        </div>
        <div className="lg:mr-[71px] mr-[41px] lg:ml-[87px] ml-[57px] z-10">
          <p className="lg:text-[28px] md:text-2xl sm:text-xl text-lg font-black md:leading-[45px] text-white lg:max-w-[20ch] sm:max-w-[25ch] mb-[35px] ">
            لذت تماشـــای سـاعت‌ها فیلم و سریال و موسیقی در منـــــــه باخ
          </p>
          <Button
            text="خرید اشتراک"
            theme={["bg-white", "bg-main", "#fff", "#1B202C"]}
          />
        </div>
      </div>
    </div>
  );
}
