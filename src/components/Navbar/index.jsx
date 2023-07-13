import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import Notification from "./Notification";
import Profile from "./Profile";

export default function Navbar() {
  const [active, setActive] = useState(false);

  function navbarActiveToggler() {
    if (window.scrollY > 120) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", navbarActiveToggler);
    return () => {
      window.removeEventListener("scroll", navbarActiveToggler);
    };
  }, []);
  return (
    <nav
      className={`fixed top-0 right-0 left-0 py-9 z-40 transition-colors ${
        active ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <Navigation />
        <div className="flex items-center gap-[10px]">
          <Search />
          <Notification />
          <Profile />
        </div>
      </div>
    </nav>
  );
}
