import type { NextPage } from "next";
import { useCallback } from "react";

const FrameComponent3: NextPage = () => {
  const onButtonPrimaryClick = useCallback(() => {
    // Please sync "create game" to the project
  }, []);

  const onGroupIcon2Click = useCallback(() => {
    // Please sync "notification" to the project
  }, []);

  return (
    <header className="mq450:gap-[890px_111px] mq750:gap-[890px_222px] mq750:pl-[22px] mq750:box-border box-border flex max-w-full flex-row items-end justify-center gap-[890px] self-stretch bg-gray-200 pb-[62px] pl-[90px] pr-5 pt-[93px] lg:box-border lg:gap-[890px_445px] lg:pl-[45px]">
      <div className="relative hidden h-[223px] w-[1728px] max-w-full bg-gray-200" />
      <div className="box-border flex w-[222px] flex-col items-start justify-end px-0 pb-[3.9px] pt-0">
        <div className="flex h-[45.1px] flex-row items-end justify-start gap-[10.4px] self-stretch">
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
      </div>
      <div className="mq450:gap-[58.5px_29px] flex max-w-full flex-row items-end justify-start gap-[58.5px]">
        <div className="flex flex-row items-start justify-start gap-[8.5px]">
          <div className="box-border flex h-[45px] flex-col items-start justify-start px-0 pb-0 pt-[22px]">
            <img
              className="relative z-[1] h-[23px] w-[23px]"
              loading="lazy"
              alt=""
              src="/group-1093.svg"
            />
          </div>
          <button
            className="bg-limegreen rounded-81xl hover:bg-forestgreen z-[1] flex cursor-pointer flex-row items-start justify-start whitespace-nowrap px-8 py-4 [border:none]"
            onClick={onButtonPrimaryClick}
          >
            <div className="text-11xl font-inter relative inline-block w-[190px] text-center font-semibold text-white">
              Create Game
            </div>
          </button>
        </div>
        <div className="box-border flex h-11 flex-col items-start justify-end px-0 pb-[3px] pt-0">
          <img
            className="relative z-[1] h-[41px] w-[36.1px] cursor-pointer"
            loading="lazy"
            alt=""
            src="/group-1145.svg"
            onClick={onGroupIcon2Click}
          />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent3;
