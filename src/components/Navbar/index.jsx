import React, { useEffect, useState, useRef } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import Notification from "./Notification";
import Profile from "./Profile";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const menuBackDrop = useRef();

  function navbarActiveToggler() {
    if (window.scrollY > 120) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  function toggleMenuHandler() {
    if (open) {
      setOpen(false);
      document.body.style.overflow = "auto";
    } else {
      setOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", navbarActiveToggler);
    return () => {
      window.removeEventListener("scroll", navbarActiveToggler);
    };
  }, []);
  return (
    <>
      <HamburgerMenu menuOpen={open} toggleMenuHandler={toggleMenuHandler} />
      <nav
        className={`fixed top-0 right-0 left-0 lg:py-9 py-7 z-30 transition-colors ${
          active ? "navbar-scrolled" : ""
        }`}
      >
        <div className="container mx-auto flex items-center ">
          {!open && <HamburgerMenuIcon toggleMenuHandler={toggleMenuHandler} />}
          <Logo style="hidden md:inline-block" />
          <Navigation style="hidden md:flex" />
          <div className="flex items-center gap-[10px] mr-auto">
            <Search />
            <Notification />
            <Profile />
          </div>
        </div>
      </nav>
      <div
        className="bg-[#00000080] fixed inset-0 z-30 transition-opacity"
        onClick={() => setOpen(false)}
        ref={menuBackDrop}
        style={{ display: open ? "block" : "none" }}
      ></div>
    </>
  );
}
