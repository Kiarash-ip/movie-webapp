import React, { useEffect, useState, useRef, useCallback } from "react";

export default function Search() {
  const [open, setOpen] = useState(false);
  const searchInput = useRef();

  const openHandler = useCallback(() => {
    setOpen(true);
  }, [open]);

  const closeHandler = useCallback(() => {
    setOpen(false);
  }, [open]);

  useEffect(() => {
    console.log("useEffect", open);
    if (open) {
      searchInput.current.style.opacity = 1;
      searchInput.current.focus();
    } else {
      searchInput.current.style.opacity = 0;
      searchInput.current.blur();
    }
  }, [open]);

  function inputBlurHandler() {
    if (open) {
      setOpen(false);
      searchInput.current.style.opacity = 0;
    }
  }

  return (
    <div
      style={{
        width: `${open && window.innerWidth > 1024 ? "200px" : "45px"}`,
      }}
      className="h-[45px] relative bg-icon-bg hover:bg-zinc-500 rounded-full transition-[width,background-color]"
    >
      {open ? (
        <div
          key="open"
          className="absolute left-0 top-0 bottom-0  w-[45px] h-[45px] flex justify-center items-center cursor-pointer"
          onClick={closeHandler}
        >
          <img
            src="/svg/search.svg"
            className="w-[24px] h-[24px] object-cover"
          />
        </div>
      ) : (
        <div
          key="close"
          className="absolute left-0 top-0 bottom-0  w-[45px] h-[45px] flex justify-center items-center cursor-pointer"
          onClick={openHandler}
        >
          <img
            src="/svg/search.svg"
            className="w-[24px] h-[24px] object-cover"
          />
        </div>
      )}

      <input
        type="search"
        ref={searchInput}
        onBlur={inputBlurHandler}
        className={`opacity-0 transition-opacity absolute lg:left-[45px] lg:top-0 top-full rounded-full lg:translate-y-0 translate-y-1/2 lg:right-0 lg:bottom-0 focus:outline-none lg:bg-transparent mx-4 text-white text-sm bg-zinc-500 lg:p-0 py-2 px-3`}
      />
    </div>
  );
}
