import React from "react";
import Navigation from "./Navigation";
import Logo from "./Logo";

export default function HamburgerMenu({ menuOpen, toggleMenuHandler }) {
  return (
    <div
      className="md:relative fixed left-full top-0 w-1/2 md:h-auto h-screen z-50 bottom-0 md:bg-transparent bg-[#000000d9] grow flex md:flex-row flex-col md:items-center md:p-0 py-7 md:px-0 px-4 md:gap-0 gap-7 transition-[left] backdrop-blur-sm"
      style={{ left: menuOpen ? "50%" : "100%" }}
    >
      <div className="flex items-center justify-between">
        <Logo />
        <button className="md:hidden" onClick={toggleMenuHandler}>
          <img src="/svg/x.svg" />
        </button>
      </div>
      <Navigation />
    </div>
  );
}
