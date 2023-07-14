import React from "react";
import { footerNavigationLinks, footerSocialIcons } from "../../statics";

export default function Footer() {
  return (
    <footer className="container mx-auto flex items-center gap-[37px] py-8">
      <div className="flex flex-col grow">
        <div className="flex items-center gap-[71px] mb-[10px]">
          <img src="/svg/logo.svg" />
          <hr className="w-full bg-bg-light" />
        </div>
        <p className="text-base font-medium leading-[32px] text-white mb-3">
          پلتفرم نمایش آنلاین فیلم
        </p>
        <div className="flex items-end flex-wrap gap-4">
          <ul className="flex items-center lg:gap-[30px] gap-5 text-white text-base leading-[22px] font-medium">
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
          <ul className="flex items-center gap-4 mr-auto ml-auto">
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
      </div>
      <div className="aspect-square">
        <img src="/svg/QR.svg" />
      </div>
    </footer>
  );
}
