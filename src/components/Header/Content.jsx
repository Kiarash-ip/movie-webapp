import React from "react";
import Tag from "../Globals/Tag";
import Button from "../Globals/Button";

export default function Content({ title, description, tag, url }) {
  return (
    <div
      className="w-full h-full absolute flex items-center"
      style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="container mx-auto flex z-20">
        <div>
          <Tag tag={tag} />
          <h3 className="text-3xl text-white font-bold leading-normal mb-4">
            {title}
          </h3>
          <p className="text-lg text-white leading-normal mb-9 max-w-[55ch]">
            {description}
          </p>
          <Button
            text="مشاهده سریال"
            theme={["bg-secondary", "bg-white", "#202735"]}
          />
        </div>
        <div className="flex items-end gap-5 mr-auto">
          <div className="w-[100px] h-[100px] bg-[#ffffff33] backdrop:blur-[5px] cursor-pointer flex flex-col justify-center items-center rounded-3xl gap-[6px] select-none">
            <img src="/svg/subscription.svg" className="h-[45px]" />
            <span className="text-sm font-bold leading-5 text-white">
              خرید اشتراک
            </span>
          </div>
          <div className="w-[100px] h-[100px] bg-[#ffffff33] backdrop:blur-[5px] cursor-pointer flex flex-col justify-center items-center rounded-3xl gap-[6px] select-none">
            <img src="/svg/movie.svg" className="h-[45px]" />
            <span className="text-sm font-bold leading-5 text-white">
              مفته باخ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
