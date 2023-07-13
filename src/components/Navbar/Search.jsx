import React, { useState } from "react";

export default function Search() {
  const [open, setOpen] = useState(false);

  function toggleHandler() {
    setOpen((prevState) => !prevState);
  }

  return (
    <div
      style={{
        width: `${open ? "200px" : "45px"}`,
      }}
      className="h-[45px] relative bg-[rgba(255,255,255,0.15)] rounded-full transition-[width]"
    >
      <div
        className="absolute left-0 top-0 bottom-0  w-[45px] h-[45px] flex justify-center items-center cursor-pointer"
        onClick={toggleHandler}
      >
        <img src="/svg/search.svg" className="w-[24px] h-[24px] object-cover" />
      </div>
      <input
        type="search"
        className="absolute left-[45px] top-0 right-0 bottom-0 focus:outline-none bg-transparent mx-4 text-white text-sm"
      />
    </div>
  );
}
