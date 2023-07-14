import React from "react";
import { twMerge } from "tailwind-merge";

export default function Button({ text, theme }) {
  return (
    <button
      className={twMerge(
        "group rounded-full p-[5px] flex items-center gap-[9px] self-start",
        theme[0]
      )}
    >
      <div
        className={twMerge(
          "w-[40px] h-[40px] rounded-full flex items-center justify-center",
          theme[1]
        )}
      >
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:rotate-[360deg] duration-500 transition-transform"
        >
          <path
            id="Shape"
            d="M13 1.7565C13 0.425892 11.5921 -0.420182 10.4362 0.215782L0.905613 5.45928C-0.30187 6.12361 -0.301872 7.87639 0.905613 8.54072L10.4362 13.7842C11.5921 14.4202 13 13.5741 13 12.2435V1.7565Z"
            fill={theme[2]}
          />
        </svg>
      </div>
      <span
        className="text-base font-medium leading-normal pl-[22px] whitespace-nowrap"
        style={{ color: theme[3] ? theme[3] : "#fff" }}
      >
        {text}
      </span>
    </button>
  );
}
