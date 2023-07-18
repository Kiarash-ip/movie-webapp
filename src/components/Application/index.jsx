import React from "react";

export default function Application() {
  return (
    <section className="h-[480px] relative traditional-bg mb-[125px]">
      <div className="container mx-auto h-full flex md:flex-row flex-col items-center justify-between gap-4">
        <div className="flex flex-col justify-center md:gap-[40px] gap-5 grow">
          <p className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold leading-[40px] md:max-w-[15ch] text-white sm:text-right text-justify">
            هرحالدا، هر دیل ده هر سلیقه ده، هر یرده{" "}
            <span className="text-secondary">منه باخ</span>
          </p>
          <div className="flex items-center md:justify-start justify-center">
            <button className="sm:w-[183px] w-[120px]">
              <img src="/images/app-store-icon.png" />
            </button>
            <button className="sm:w-[183px] w-[120px]">
              <img src="/images/google-play-icon.png" />
            </button>
          </div>
        </div>
        <div className="md:w-auto md:relative absolute md:top-0 md:left-0 left-4 md:right-0 right-4 top-full  md:h-[396px] self-start md:translate-y-4 sm:-translate-y-1/2 -translate-y-2/3">
          <img src="/images/screen.png" className="h-full object-contain" />
        </div>
      </div>
    </section>
  );
}
