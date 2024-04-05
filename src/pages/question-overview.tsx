import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

import ButtonPrimary from "../components/button-primary";
import FrameComponent8 from "../components/frame-component8";

const QuestionOverview: NextPage = () => {
  const router = useRouter();

  const onButtonPrimaryClick = useCallback(() => {
    void router.push("/create-game");
  }, [router]);

  const onButtonPrimary1Click = useCallback(() => {
    void router.push("/generate-code");
  }, [router]);

  return (
    <div className="relative box-border flex w-full flex-row items-start justify-center overflow-hidden pb-[117px] pl-[21px] pr-5 pt-[59px] tracking-[normal] [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)]">
      <main className="rounded-b-11xl border-darkslategray mq450:gap-[24px_196px] mq750:gap-[49px_196px] mq750:pt-5 mq750:pb-[53px] mq750:box-border box-border flex w-[1563px] max-w-full flex-col items-start justify-start gap-[196px] rounded-t-none border-[1px] border-solid px-8 pb-[191px] pt-[55px] lg:box-border lg:gap-[98px_196px] lg:pb-[81px] lg:pt-[23px]">
        <div className="rounded-b-11xl border-darkslategray relative box-border hidden h-[2209px] w-[1563px] max-w-full rounded-t-none border-[1px] border-solid" />
        <FrameComponent8 />
        <section className="text-13xl font-inter box-border flex w-[1389px] max-w-full flex-row items-start justify-center px-0 pb-6 pt-0 text-center text-white">
          <div className="mq750:gap-[15px_62px] flex w-[1195px] max-w-full flex-col items-start justify-start gap-[62px] lg:gap-[31px_62px]">
            <div className="mq750:gap-[23px] box-border flex max-w-full flex-row flex-wrap items-end justify-start gap-[47px] self-stretch px-0 pb-7 pt-0">
              <div className="mq1050:text-7xl mq1050:leading-[18px] mq450:text-lgi mq450:leading-[14px] relative z-[1] flex w-5 min-w-[20px] shrink-0 items-center justify-center leading-[23px]">
                2
              </div>
              <div className="mq1050:min-w-full box-border flex min-w-[733px] max-w-full flex-1 flex-col items-start justify-end px-0 pb-2.5 pt-0">
                <div className="border-darkslategray relative z-[1] box-border h-px self-stretch border-t-[1px] border-solid" />
              </div>
            </div>
            <div className="flex h-px max-w-full flex-row items-start justify-end self-stretch">
              <div className="border-darkslategray relative z-[1] box-border w-[1129px] max-w-full self-stretch border-t-[1px] border-solid" />
            </div>
            <div className="flex w-[204px] flex-col items-start justify-start gap-[12px] text-9xl">
              <div className="flex flex-row items-end justify-start self-stretch">
                <div className="flex flex-col items-start justify-end px-0 pb-1.5 pt-0">
                  <div className="bg-lime relative z-[2] h-[33px] w-[33px] rounded-[50%]" />
                </div>
                <div className="mq450:text-3xl mq450:leading-[18px] relative z-[1] flex h-[47px] flex-1 items-center justify-center leading-[22.53px]">
                  Option 1
                </div>
              </div>
              <div className="flex flex-row items-start justify-start self-stretch py-0 pl-0.5 pr-0">
                <div className="flex flex-1 flex-row items-end justify-start">
                  <div className="flex flex-col items-start justify-end px-0 pb-1.5 pt-0">
                    <div className="bg-lime relative z-[2] h-[33px] w-[33px] rounded-[50%]" />
                  </div>
                  <div className="mq450:text-3xl mq450:leading-[18px] relative z-[1] flex h-[47px] flex-1 items-center justify-center leading-[22.53px]">
                    Option 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-13xl font-inter box-border flex w-[1389px] max-w-full flex-row items-start justify-center px-0 pb-9 pt-0 text-center text-white">
          <div className="mq750:gap-[15px_62px] flex w-[1195px] max-w-full flex-col items-start justify-start gap-[62px] lg:gap-[31px_62px]">
            <div className="mq750:gap-[26px] box-border flex max-w-full flex-row flex-wrap items-end justify-start gap-[52px] self-stretch px-0 pb-7 pt-0">
              <div className="mq1050:text-7xl mq1050:leading-[18px] mq1050:w-full mq1050:h-[15px] mq450:text-lgi mq450:leading-[14px] relative z-[1] inline-block min-w-[15px] leading-[23px]">
                3
              </div>
              <div className="mq1050:min-w-full box-border flex min-w-[733px] max-w-full flex-1 flex-col items-start justify-end px-0 pb-2.5 pt-0">
                <div className="border-darkslategray relative z-[1] box-border h-px self-stretch border-t-[1px] border-solid" />
              </div>
            </div>
            <div className="flex h-px max-w-full flex-row items-start justify-end self-stretch">
              <div className="border-darkslategray relative z-[1] box-border w-[1129px] max-w-full self-stretch border-t-[1px] border-solid" />
            </div>
            <div className="flex w-[204px] flex-col items-start justify-start gap-[12px] text-9xl">
              <div className="flex flex-row items-end justify-start self-stretch">
                <div className="flex flex-col items-start justify-end px-0 pb-1.5 pt-0">
                  <div className="bg-lime relative z-[2] h-[33px] w-[33px] rounded-[50%]" />
                </div>
                <div className="mq450:text-3xl mq450:leading-[18px] relative z-[1] flex h-[47px] flex-1 items-center justify-center leading-[22.53px]">
                  Option 1
                </div>
              </div>
              <div className="flex flex-row items-start justify-start self-stretch py-0 pl-0.5 pr-0">
                <div className="flex flex-1 flex-row items-end justify-start">
                  <div className="flex flex-col items-start justify-end px-0 pb-1.5 pt-0">
                    <div className="bg-lime relative z-[2] h-[33px] w-[33px] rounded-[50%]" />
                  </div>
                  <div className="mq450:text-3xl mq450:leading-[18px] relative z-[1] flex h-[47px] flex-1 items-center justify-center leading-[22.53px]">
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
