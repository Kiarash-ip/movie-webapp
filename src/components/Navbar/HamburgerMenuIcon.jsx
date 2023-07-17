import React from "react";

export default function HamburgerMenuIcon({ toggleMenuHandler }) {
  return (
    <button
      className="md:hidden flex justify-center items-center w-[45px] h-[45px]"
      onClick={toggleMenuHandler}
    >
      <img src="/svg/hamburger-menu.svg" />
    </button>
  );
}
