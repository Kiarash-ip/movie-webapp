import React, { useRef, useState } from "react";
import Slider from "./Slider";
import Content from "./Content";

export default function Header() {
  return (
    <header className="w-full h-5/6 relative flex items-center">
      <Slider />
    </header>
  );
}
