import React from "react";
import { navbarLinks } from "../../statics";
import { twMerge } from "tailwind-merge";

export default function Navigation({ style = "" }) {
  return (
    <ul
      className={twMerge(
        "flex md:flex-row flex-col md:items-center md:gap-10 gap-8 md:mx-auto mx-4",
        style
      )}
    >
      {navbarLinks.map((link) => {
        return (
          <li
            key={link.id}
            className="text-white md:text-sm text-base cursor-pointer hover:text-zinc-300 transition-colors"
          >
            <a>{link.title}</a>
          </li>
        );
      })}
    </ul>
  );
}
