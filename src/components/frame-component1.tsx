import type { NextPage } from "next";
import { useCallback } from "react";

const FrameComponent1: NextPage = () => {
  const onButtonPrimaryClick = useCallback(() => {
    // Please sync "Connect wallet" to the project
  }, []);

  return (
    <header className="self-stretch bg-gray flex flex-row items-end justify-center pt-[84px] px-5 pb-[71px] box-border gap-[884px] max-w-full text-center text-11xl text-white font-inter mq450:gap-[884px_110px] mq825:gap-[884px_221px] mq1400:flex-wrap mq1400:gap-[884px_442px]">
      <div className="h-[223px] w-[1728px] relative bg-gray hidden max-w-full" />
      <div className="h-[45.1px] w-[222px] flex flex-row items-end justify-start gap-[10.4px]">
        <img
          className="h-[45.1px] w-[40.6px] relative object-cover shrink-0 [debug_commit:f6aba90] z-[1]"
          loading="lazy"
          alt=""
          src="/group-1124@2x.png"
        />
        <div className="h-[31.1px] flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[1.1px] box-border">
          <img
            className="self-stretch h-[30px] relative max-w-full overflow-hidden shrink-0 [debug_commit:f6aba90] z-[1]"
            loading="lazy"
            alt=""
            src="/sprint-iq.svg"
          />
        </div>
      </div>
      <div className="w-[340px] flex flex-row items-start justify-start gap-[19px] top-[0] z-[99] sticky max-w-full">
        <button
          className="cursor-pointer [border:none] py-4 px-8 bg-limegreen flex-1 rounded-81xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-forestgreen"
          onClick={onButtonPrimaryClick}
        >
          <div className="flex-1 relative text-11xl font-semibold font-inter text-white text-center">
            Get Started
          </div>
        </button>
        <div className="w-[88px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border">
          <div className="self-stretch relative font-semibold inline-block min-w-[88px] whitespace-nowrap z-[1]">
            Log In
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent1;
