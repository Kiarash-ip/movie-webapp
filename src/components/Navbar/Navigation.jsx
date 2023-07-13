import React from "react";
import { navbarLinks } from "../../statics";

export default function Navigation() {
  return (
    <ul className="flex items-center gap-10">
      {navbarLinks.map((link) => {
        return (
          <li key={link.id} className="text-white text-sm cursor-pointer">
            <a>{link.title}</a>
          </li>
        );
      })}
    </ul>
  );
}
