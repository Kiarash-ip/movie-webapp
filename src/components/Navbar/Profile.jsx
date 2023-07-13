import React from "react";

export default function Profile() {
  return (
    <div className="flex items-center gap-[9px] h-[45px]">
      <div className="w-[45px] h-[45px] rounded-full">
        <img
          src="/images/avatar.png"
          className="w-[45px] h-[45px] object-cover"
        />
      </div>
      <div className="flex flex-col justify-between h-full text-sm text-white">
        <p className="font-medium opacity-70">سلام، خوش آمدی</p>
        <p className="font-medium">فاطمه کریمی</p>
      </div>
    </div>
  );
}
