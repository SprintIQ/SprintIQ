import type { NextPage } from "next";
import { useCallback } from "react";
import Link from "next/link";

const FrameComponent1: NextPage = () => {
  return (
    <header className="text-11xl font-inter mq450:gap-[884px_110px] mq825:gap-[884px_221px] mq1400:flex-wrap mq1400:gap-[884px_442px] box-border flex max-w-full flex-row items-end justify-center gap-[884px] self-stretch bg-black/30 px-5 py-5 text-center text-white">
      <div className="bg-gray relative hidden h-[223px] w-[1728px] max-w-full" />
      <div className="flex h-[45.1px] w-[222px] flex-row items-end justify-start gap-[10.4px]">
        <img
          className="relative z-[1] h-[45.1px] w-[40.6px] shrink-0 object-cover [debug_commit:f6aba90]"
          loading="lazy"
          alt=""
          src="/group-1124@2x.png"
        />
        <div className="box-border flex h-[31.1px] flex-1 flex-col items-start justify-end px-0 pb-[1.1px] pt-0">
          <img
            className="relative z-[1] h-[30px] max-w-full shrink-0 self-stretch overflow-hidden [debug_commit:f6aba90]"
            loading="lazy"
            alt=""
            src="/sprint-iq.svg"
          />
        </div>
      </div>
      <div className="sticky top-[0] z-[99] flex w-[340px] max-w-full flex-row items-start justify-start gap-[19px]">
        <Link href="/connect-wallet">
          <button className="hover:bg-forestgreen z-[1] flex flex-1 cursor-pointer flex-row items-start justify-start whitespace-nowrap rounded-[2.5rem] bg-[#1FC04D] px-8 py-4 [border:none]">
            <div className="text-11xl font-inter relative flex-1 text-center font-semibold text-white">
              Get Started
            </div>
          </button>
        </Link>
        <Link href="/connect-wallet">
          <div className="box-border flex w-[88px] flex-col items-start justify-start px-0 pb-0 pt-4">
            <div className="relative z-[1] inline-block min-w-[88px] self-stretch whitespace-nowrap font-semibold">
              Log In
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default FrameComponent1;
