import type { NextPage } from "next";

const FrameComponent: NextPage = () => {
  return (
    <div className="w-[805px] flex flex-col items-start justify-start gap-[30px] max-w-full text-center text-11xl text-limegreen font-inter">
      <h1 className="m-0 self-stretch h-[186px] relative text-41xl leading-[55px] font-bold font-inherit flex items-center justify-center shrink-0 z-[1] mq450:text-17xl mq450:leading-[33px] mq850:text-29xl mq850:leading-[44px]">
        You have successfully deposited 500 USDC for Game #437201
      </h1>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-20 pl-[79px] box-border max-w-full text-white mq850:pl-[39px] mq850:pr-10 mq850:box-border">
        <div className="flex-1 relative leading-[22.5px] inline-block max-w-full z-[1] mq450:text-lg mq450:leading-[13px] mq850:text-5xl mq850:leading-[18px]">
          Winners will automatically receive reward at the end of the Sprint
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[34px] box-border max-w-full text-gray-100">
        <div className="flex-1 rounded-11xl bg-darkgreen box-border flex flex-row items-start justify-center py-[27px] pr-5 pl-[21px] max-w-full z-[1] border-[1px] border-solid border-limegreen">
          <div className="h-[109px] w-[737px] relative rounded-11xl bg-darkgreen box-border hidden max-w-full border-[1px] border-solid border-limegreen" />
          <div className="w-[568px] relative leading-[22.5px] flex items-center justify-center shrink-0 max-w-full z-[2] mq450:text-lg mq450:leading-[13px] mq850:text-5xl mq850:leading-[18px]">
            You have the chance to edit rewards before Game begins
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
