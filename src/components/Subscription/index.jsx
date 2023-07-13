import React from "react";

export default function Subscription() {
  return (
    <div
      className="w-full h-[280px] mb-[168px]"
      style={{
        backgroundImage: "url(/images/Mask-group.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="h-full relative subscription-gradient">
          <img src="/images/image-26.png" className="h-full" />
        </div>
        <div className="mr-[71px] ml-[87px]">
          <p className="text-[28px] font-black leading-[45px] text-white max-w-[20ch] mb-[35px] ">
            لذت تماشـــای سـاعت‌ها فیلم و سریال و موسیقی در منـــــــه باخ
          </p>
          <button className="bg-white rounded-full p-[5px] flex items-center gap-[9px]">
            <div className="w-[40px] h-[40px] bg-[#1B202C] rounded-full flex items-center justify-center">
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Shape"
                  d="M13 1.7565C13 0.425892 11.5921 -0.420182 10.4362 0.215782L0.905613 5.45928C-0.30187 6.12361 -0.301872 7.87639 0.905613 8.54072L10.4362 13.7842C11.5921 14.4202 13 13.5741 13 12.2435V1.7565Z"
                  fill="#fff"
                />
              </svg>
            </div>
            <span className="text-base text-[#1B202C] font-medium leading-normal pl-[22px]">
              خرید اشتراک
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
