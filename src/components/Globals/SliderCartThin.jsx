import React from "react";

export default function SliderCartThin({ data: { url, title, enTitle } }) {
  return (
    <div className="w-full">
      <div className="h-[295px] w-full mb-[9px]">
        <img src={url} className="w-full h-full object-cover rounded-[25px]" />
      </div>
      <div className="mr-3">
        <h3 className="text-white text-base font-bold leading-normal">
          {title}
        </h3>
        <h4 className="text-main-light text-sm font-medium leading-normal capitalize">
          {enTitle}
        </h4>
      </div>
    </div>
  );
}
