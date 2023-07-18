import React from "react";
import { footerNavigationLinks, footerSocialIcons } from "../../statics";

export default function Footer() {
  return (
    <footer className="container mx-auto grid grid-cols-[1fr_min-content] grid-rows-[1fr_max-content] items-center md:gap-x-[37px] gap-x-4 md:gap-y-0 gap-y-4 py-8">
      <div className="col-start-1 col-end-2">
        <div className="flex items-center gap-[71px] mb-[10px]">
          <img src="/svg/logo.svg" />
          <hr className="w-full bg-bg-light" />
        </div>
        <p className="text-base font-medium leading-[32px] text-white mb-3">
          پلتفرم نمایش آنلاین فیلم
        </p>
      </div>
      <div className="flex sm:flex-row flex-col sm:items-end items-center flex-wrap gap-4 col-start-1 md:col-end-2 col-end-3 row-start-2 row-end-3">
        <ul className="flex  sm:flex-row flex-col lg:grow-0 grow items-center lg:justify-normal justify-between lg:gap-[30px] gap-5 text-white text-base leading-[22px] font-medium">
          {footerNavigationLinks.map((item) => {
            return (
              <li
                className="cursor-pointer hover:-translate-y-1 transition-transform duration-200"
                key={item.id}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        <ul className="flex  items-center gap-4 mr-auto ml-auto">
          {footerSocialIcons.map((icon) => {
            return (
              <li
                className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center bg-bg-light transition-colors hover:bg-[#ffffff4d] rounded-full"
                key={icon.id}
              >
                <img src={icon.src} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-start-2 col-end-3 sm:w-[147px] sm:h-[147px] w-[100px] h-[100px]">
        <img src="/svg/QR.svg" />
      </div>
    </footer>
  );
}
