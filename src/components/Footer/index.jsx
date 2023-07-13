import React from "react";

export default function Footer() {
  return (
    <footer className="container mx-auto flex items-center gap-[37px] py-8">
      <div className="flex flex-col grow">
        <div className="flex items-center gap-[71px] mb-[10px]">
          <img src="/svg/logo.svg" />
          <hr className="w-full bg-bg-light" />
        </div>
        <p className="text-base font-medium leading-[32px] text-white">
          پلتفرم نمایش آنلاین فیلم
        </p>
        <div className="flex items-end">
          <ul className="flex items-center gap-[30px] text-white text-base leading-[22px] font-medium">
            <li className="cursor-pointer">درباره ما</li>
            <li className="cursor-pointer">تماس با ما</li>
            <li className="cursor-pointer">قوانین و مقررات</li>
            <li className="cursor-pointer">سوالات متداول</li>
            <li className="cursor-pointer">تبلیغ در منه باخ</li>
          </ul>
          <ul className="flex items-center gap-4 mr-auto ml-auto">
            <li className="cursor-pointer">
              <img src="/svg/Insta.svg" />
            </li>
            <li className="cursor-pointer">
              <img src="/svg/Whatsapp.svg" />
            </li>
            <li className="cursor-pointer">
              <img src="/svg/Insta.svg" />
            </li>
            <li className="cursor-pointer">
              <img src="/svg/Whatsapp.svg" />
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src="/svg/QR.svg" />
      </div>
    </footer>
  );
}
