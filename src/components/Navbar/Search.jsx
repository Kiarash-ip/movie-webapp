import React, { useEffect, useState, useRef } from "react";

export default function Search() {
  const [open, setOpen] = useState(false);
  const searchInput = useRef();

  function toggleHandler() {
    setOpen((prevState) => !prevState);
  }

  useEffect(() => {
    if (open) {
      searchInput.current.focus();
    }
  }, [open]);

  function inputBlurHandler() {
    setOpen(false);
  }

  return (
    <div
      style={{
        width: `${open ? "200px" : "45px"}`,
      }}
      className="h-[45px] relative bg-icon-bg hover:bg-zinc-500 rounded-full transition-[width,background-color]"
    >
      <div
        className="absolute left-0 top-0 bottom-0  w-[45px] h-[45px] flex justify-center items-center cursor-pointer"
        onClick={toggleHandler}
      >
        <img src="/svg/search.svg" className="w-[24px] h-[24px] object-cover" />
      </div>
      <input
        type="search"
        ref={searchInput}
        onBlur={inputBlurHandler}
        className="absolute left-[45px] top-0 right-0 bottom-0 focus:outline-none bg-transparent mx-4 text-white text-sm"
      />
    </div>
  );
}
