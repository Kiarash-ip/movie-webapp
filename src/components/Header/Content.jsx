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
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto flex sm:flex-row flex-col z-20">
        <div>
          <Tag tag={tag} />
          <h3 className="lg:text-3xl sm:text-2xl text-xl text-white font-bold leading-normal mb-4">
            {title}
          </h3>
          <p className="lg:text-lg sm:text-base text-sm text-white leading-normal mb-9 lg:max-w-[55ch] sm:max-w-[45ch]">
            {description}
          </p>
          <Button
            text="مشاهده سریال"
            theme={["bg-secondary", "bg-white", "#202735"]}
          />
        </div>
        <div className="flex items-end gap-5 mr-auto">
          <div className="lg:w-[100px] w-[80px] lg:h-[100px] h-[80px] bg-[#ffffff33] backdrop:blur-[5px] cursor-pointer flex flex-col justify-center items-center rounded-3xl gap-[6px] select-none">
            <img src="/svg/subscription.svg" className="h-[35px]" />
            <span className="lg:text-sm text-xs font-bold leading-5 text-white">
              خرید اشتراک
            </span>
          </div>
          <div className="lg:w-[100px] w-[80px] lg:h-[100px] h-[80px] bg-[#ffffff33] backdrop:blur-[5px] cursor-pointer flex flex-col justify-center items-center rounded-3xl gap-[6px] select-none">
            <img src="/svg/movie.svg" className="h-[35px]" />
            <span className="lg:text-sm text-xs font-bold leading-5 text-white">
              مفته باخ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
