import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

const FrameComponent9: NextPage = () => {
  const router = useRouter();

  const onButtonPrimaryClick = useCallback(() => {
    void router.push("/home-page-for-created-question");
  }, [router]);

  return (
    <div className="rounded-11xl bg-darkgreen text-41xl text-lime font-inter border-limegreen absolute left-[401px] top-[227px] z-[1] box-border flex w-[927px] max-w-full flex-col items-center justify-start gap-[63px] border-[1px] border-solid px-5 py-[203px] text-center">
      <div className="rounded-11xl bg-darkgreen border-limegreen relative box-border hidden h-[663px] w-[927px] max-w-full border-[1px] border-solid" />
      <div className="flex w-[635px] max-w-full flex-col items-start justify-start">
        <h1 className="font-inherit mq450:text-17xl mq450:leading-[30px] mq750:text-29xl mq750:leading-[40px] relative z-[2] m-0 flex h-[103px] shrink-0 items-center justify-center self-stretch font-bold leading-[50px] text-inherit">
          You are Set
        </h1>
        <div className="text-11xl flex flex-row items-start justify-start self-stretch py-0 pl-2.5 pr-3 text-white">
          <div className="mq450:text-lg mq450:leading-[14px] mq750:text-5xl mq750:leading-[18px] relative z-[2] flex-1 font-medium leading-[23px]">
            You will get notified when participants join
          </div>
        </div>
      </div>
      <div className="flex w-[635px] max-w-full flex-row items-start justify-center">
        <button
          className="bg-limegreen rounded-81xl hover:bg-forestgreen z-[2] box-border flex max-w-full cursor-pointer flex-row items-start justify-start whitespace-nowrap px-[62.5px] py-4 [border:none]"
          onClick={onButtonPrimaryClick}
        >
          <div className="text-11xl font-inter relative inline-block w-[294px] text-center text-white">
            Return to Homepage
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent9;
