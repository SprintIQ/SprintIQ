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
    <header className="self-stretch bg-gray-200 flex flex-row items-end justify-center pt-[93px] pb-[62px] pr-5 pl-[90px] box-border gap-[890px] max-w-full lg:gap-[890px_445px] lg:pl-[45px] lg:box-border mq450:gap-[890px_111px] mq750:gap-[890px_222px] mq750:pl-[22px] mq750:box-border">
      <div className="h-[223px] w-[1728px] relative bg-gray-200 hidden max-w-full" />
      <div className="w-[222px] flex flex-col items-start justify-end pt-0 px-0 pb-[3.9px] box-border">
        <div className="self-stretch h-[45.1px] flex flex-row items-end justify-start gap-[10.4px]">
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
      </div>
      <div className="flex flex-row items-end justify-start gap-[58.5px] max-w-full mq450:gap-[58.5px_29px]">
        <div className="flex flex-row items-start justify-start gap-[8.5px]">
          <div className="h-[45px] flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border">
            <img
              className="w-[23px] h-[23px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/group-1093.svg"
            />
          </div>
          <button
            className="cursor-pointer [border:none] py-4 px-8 bg-limegreen rounded-81xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-forestgreen"
            onClick={onButtonPrimaryClick}
          >
            <div className="w-[190px] relative text-11xl font-semibold font-inter text-white text-center inline-block">
              Create Game
            </div>
          </button>
        </div>
        <div className="h-11 flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border">
          <img
            className="w-[36.1px] h-[41px] relative cursor-pointer z-[1]"
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
