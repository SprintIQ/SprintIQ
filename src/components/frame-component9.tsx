import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const FrameComponent9: NextPage = () => {
  const router = useRouter();

  const onButtonPrimaryClick = useCallback(() => {
    router.push("/home-page-for-created-question");
  }, [router]);

  return (
    <div className="absolute top-[227px] left-[401px] rounded-11xl bg-darkgreen box-border w-[927px] flex flex-col items-center justify-start py-[203px] px-5 gap-[63px] max-w-full z-[1] text-center text-41xl text-lime font-inter border-[1px] border-solid border-limegreen">
      <div className="w-[927px] h-[663px] relative rounded-11xl bg-darkgreen box-border hidden max-w-full border-[1px] border-solid border-limegreen" />
      <div className="w-[635px] flex flex-col items-start justify-start max-w-full">
        <h1 className="m-0 self-stretch h-[103px] relative text-inherit leading-[50px] font-bold font-inherit flex items-center justify-center shrink-0 z-[2] mq450:text-17xl mq450:leading-[30px] mq750:text-29xl mq750:leading-[40px]">
          You are Set
        </h1>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-2.5 text-11xl text-white">
          <div className="flex-1 relative leading-[23px] font-medium z-[2] mq450:text-lg mq450:leading-[14px] mq750:text-5xl mq750:leading-[18px]">
            You will get notified when participants join
          </div>
        </div>
      </div>
      <div className="w-[635px] flex flex-row items-start justify-center max-w-full">
        <button
          className="cursor-pointer [border:none] py-4 px-[62.5px] bg-limegreen rounded-81xl flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full z-[2] hover:bg-forestgreen"
          onClick={onButtonPrimaryClick}
        >
          <div className="w-[294px] relative text-11xl font-inter text-white text-center inline-block">
            Return to Homepage
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent9;
