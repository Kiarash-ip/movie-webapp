import React from "react";

export default function Application() {
  return (
    <section className="h-[480px] relative traditional-bg mb-[125px]">
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="flex flex-col gap-[40px]">
          <p className="text-3xl font-bold leading-[40px] max-w-[15ch] text-white text-right">
            هرحالدا، هر دیل ده هر سلیقه ده، هر یرده{" "}
            <span className="text-secondary">منه باخ</span>
          </p>
          <div className="flex">
            <button>
              <img src="/images/app-store-icon.png" />
            </button>
            <button>
              <img src="/images/google-play-icon.png" />
            </button>
          </div>
        </div>
        <div className="h-[396px] self-start translate-y-4">
          <img src="/images/screen.png" className="h-full" />
        </div>
      </div>
    </section>
  );
}
