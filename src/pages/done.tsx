import type { NextPage } from "next";
import { useCallback } from "react";

const Done: NextPage = () => {
  const onButtonPrimaryClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  return (
    <div className="w-full relative rounded-3xl bg-gray-200 overflow-hidden flex flex-col items-start justify-start pt-[354px] px-0 pb-[225px] box-border gap-[15px] leading-[normal] tracking-[normal]">
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-10 pl-[39px] text-center text-[20px] text-white font-inter">
        <div className="flex-1 flex flex-col items-end justify-start">
          <h3 className="m-0 self-stretch h-[55px] relative text-inherit leading-[22.53px] font-normal font-inherit flex items-center justify-center shrink-0 z-[2]">
            You have successfully deposited 500 USDC for Game #437201
          </h3>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[21px] pl-[22px] mt-[-9px] text-sm">
            <div className="h-[55px] flex-1 relative leading-[14px] flex items-center justify-center z-[2]">
              Winners will automatically receive reward at the end of the Sprint
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-[55px] pb-9 relative text-center text-sm text-gray-100 font-inter">
        <div className="w-[497px] h-[calc(100%_-_36px)] absolute !m-[0] top-[0px] right-[-63px] bottom-[36px] rounded-11xl bg-darkgreen box-border z-[2] border-[1px] border-solid border-limegreen" />
        <div className="w-[271px] h-[55px] relative leading-[14px] flex items-center justify-center shrink-0 z-[3]">
          You have the chance to edit rewards before Game begins
        </div>
      </section>
      <section className="w-full h-[723px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <div className="absolute top-[-637px] left-[-176px] rounded-[50%] [background:linear-gradient(180deg,_#1fc04d,_rgba(0,_0,_0,_0))] [filter:blur(70px)] w-[745px] h-[1273px]" />
        <img
          className="absolute top-[81px] left-[-122px] w-[577.8px] h-[642px] object-cover z-[1]"
          alt=""
          src="/group-1143@2x.png"
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[255px] left-[161px] w-[70px] h-[70px]">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-limegreen w-full h-full z-[2]" />
          <img
            className="absolute top-[24.5px] left-[19.2px] w-[32.6px] h-[22.4px] z-[3]"
            alt=""
            src="/group-1164.svg"
          />
        </button>
      </section>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-6 pl-5">
        <button
          className="cursor-pointer [border:none] py-4 px-8 bg-limegreen rounded-81xl flex flex-row items-start justify-start whitespace-nowrap z-[2]"
          onClick={onButtonPrimaryClick}
        >
          <div className="w-[129px] relative text-base font-inter text-white text-center inline-block min-w-[129px]">
            Go to Homepage
          </div>
        </button>
      </div>
    </div>
  );
};

export default Done;
