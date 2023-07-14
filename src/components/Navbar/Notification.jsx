import React, { useState } from "react";

export default function Notification() {
  const [count, setCount] = useState(1);
  return (
    <div className="w-[45px] h-[45px] relative bg-icon-bg hover:bg-zinc-500 transition-colors rounded-full">
      <div className="absolute left-0 top-0 bottom-0  w-[45px] h-[45px] flex justify-center items-center cursor-pointer">
        <img
          src="/svg/notification.svg"
          className="w-[24px] h-[24px] object-cover"
        />
      </div>
      <div className="absolute w-4 h-4 rounded-full bg-secondary">
        <span className="text-white text-xs leading-4 absolute inset-0 flex items-center justify-center">
          {count}
        </span>
      </div>
    </div>
  );
}
