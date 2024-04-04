import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent8 from "../components/frame-component8";
import ButtonPrimary from "../components/button-primary";

const QuestionOverview: NextPage = () => {
  const router = useRouter();

  const onButtonPrimaryClick = useCallback(() => {
    router.push("/create-game");
  }, [router]);

  const onButtonPrimary1Click = useCallback(() => {
    router.push("/generate-code");
  }, [router]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] overflow-hidden flex flex-row items-start justify-center pt-[59px] pb-[117px] pr-5 pl-[21px] box-border tracking-[normal]">
      <main className="w-[1563px] rounded-t-none rounded-b-11xl box-border flex flex-col items-start justify-start pt-[55px] px-8 pb-[191px] gap-[196px] max-w-full border-[1px] border-solid border-darkslategray lg:gap-[98px_196px] lg:pt-[23px] lg:pb-[81px] lg:box-border mq450:gap-[24px_196px] mq750:gap-[49px_196px] mq750:pt-5 mq750:pb-[53px] mq750:box-border">
        <div className="w-[1563px] h-[2209px] relative rounded-t-none rounded-b-11xl box-border hidden max-w-full border-[1px] border-solid border-darkslategray" />
        <FrameComponent8 />
        <section className="w-[1389px] flex flex-row items-start justify-center pt-0 px-0 pb-6 box-border max-w-full text-center text-13xl text-white font-inter">
          <div className="w-[1195px] flex flex-col items-start justify-start gap-[62px] max-w-full lg:gap-[31px_62px] mq750:gap-[15px_62px]">
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start pt-0 px-0 pb-7 box-border gap-[47px] max-w-full mq750:gap-[23px]">
              <div className="w-5 relative leading-[23px] flex items-center justify-center shrink-0 min-w-[20px] z-[1] mq1050:text-7xl mq1050:leading-[18px] mq450:text-lgi mq450:leading-[14px]">
                2
              </div>
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border min-w-[733px] max-w-full mq1050:min-w-full">
                <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-darkslategray" />
              </div>
            </div>
            <div className="self-stretch h-px flex flex-row items-start justify-end max-w-full">
              <div className="self-stretch w-[1129px] relative box-border max-w-full z-[1] border-t-[1px] border-solid border-darkslategray" />
            </div>
            <div className="w-[204px] flex flex-col items-start justify-start gap-[12px] text-9xl">
              <div className="self-stretch flex flex-row items-end justify-start">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                  <div className="w-[33px] h-[33px] relative rounded-[50%] bg-lime z-[2]" />
                </div>
                <div className="h-[47px] flex-1 relative leading-[22.53px] flex items-center justify-center z-[1] mq450:text-3xl mq450:leading-[18px]">
                  Option 1
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                    <div className="w-[33px] h-[33px] relative rounded-[50%] bg-lime z-[2]" />
                  </div>
                  <div className="h-[47px] flex-1 relative leading-[22.53px] flex items-center justify-center z-[1] mq450:text-3xl mq450:leading-[18px]">
                    Option 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-[1389px] flex flex-row items-start justify-center pt-0 px-0 pb-9 box-border max-w-full text-center text-13xl text-white font-inter">
          <div className="w-[1195px] flex flex-col items-start justify-start gap-[62px] max-w-full lg:gap-[31px_62px] mq750:gap-[15px_62px]">
            <div className="self-stretch flex flex-row flex-wrap items-end justify-start pt-0 px-0 pb-7 box-border gap-[52px] max-w-full mq750:gap-[26px]">
              <div className="relative leading-[23px] inline-block min-w-[15px] z-[1] mq1050:text-7xl mq1050:leading-[18px] mq1050:w-full mq1050:h-[15px] mq450:text-lgi mq450:leading-[14px]">
                3
              </div>
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border min-w-[733px] max-w-full mq1050:min-w-full">
                <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-darkslategray" />
              </div>
            </div>
            <div className="self-stretch h-px flex flex-row items-start justify-end max-w-full">
              <div className="self-stretch w-[1129px] relative box-border max-w-full z-[1] border-t-[1px] border-solid border-darkslategray" />
            </div>
            <div className="w-[204px] flex flex-col items-start justify-start gap-[12px] text-9xl">
              <div className="self-stretch flex flex-row items-end justify-start">
                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                  <div className="w-[33px] h-[33px] relative rounded-[50%] bg-lime z-[2]" />
                </div>
                <div className="h-[47px] flex-1 relative leading-[22.53px] flex items-center justify-center z-[1] mq450:text-3xl mq450:leading-[18px]">
                  Option 1
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-1.5">
                    <div className="w-[33px] h-[33px] relative rounded-[50%] bg-lime z-[2]" />
                  </div>
                  <div className="h-[47px] flex-1 relative leading-[22.53px] flex items-center justify-center z-[1] mq450:text-3xl mq450:leading-[18px]">
                    Option 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ButtonPrimary
          addQuestion="Keep Editing"
          propWidth="unset"
          propAlignSelf="stretch"
          propMinWidth="178px"
          propWidth1="178px"
          onButtonPrimaryClick={onButtonPrimaryClick}
          onButtonPrimary1Click={onButtonPrimary1Click}
        />
      </main>
    </div>
  );
};

export default QuestionOverview;
