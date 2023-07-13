import React from "react";
import DomeShape from "../Globals/DomeShape";

export default function Services() {
  return (
    <div className="container mx-auto flex items-center justify-center gap-[35px] mb-[125px]">
      <DomeShape
        url="/images/headset.png"
        desc="شنیدن
موسیقی های به روز
با کیفیت بی نظیــــــر"
        theme="after:bg-[#CB5F83]"
        gradient="#FD6585"
      />
      <DomeShape
        url="/images/traditional.png"
        desc="شبکه آناوطن
        با پوشش گسترده
        تمام ساعات روز"
        theme="after:bg-[#42B78D]"
        gradient="#42C98E"
      />
      <DomeShape
        url="/images/animation.png"
        desc="تماشای
        انیمیشن‌های روز دنیا
        با کیفیت بی نظیــــــــر"
        theme="after:bg-[#14BBBB]"
        gradient="#12D1CA"
      />
    </div>
  );
}
