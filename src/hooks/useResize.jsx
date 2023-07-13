import React, { useState, useEffect } from "react";

export default function useResize() {
  const [width, setWidth] = useState(1920);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return <div>useResize</div>;
}
