import React from "react";

export default function Tag({ tag }) {
  return (
    <span className="inline-block rounded-[20px] bg-[rgba(255,255,255,0.2)] text-base font-medium text-white px-[9px] py-[3px]">
      {tag}
    </span>
  );
}
