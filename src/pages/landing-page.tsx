import type { NextPage } from "next";

import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";

const LandingPage: NextPage = () => {
  return (
    <div className="relative box-border flex w-full flex-col items-start justify-start overflow-hidden px-0 pb-[73px] pt-0.5 tracking-[normal] [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)]">
      <FrameComponent3 />
      <main className="box-border flex max-w-full flex-row items-start justify-center self-stretch py-0 pl-5 pr-[21px]">
        <section className="rounded-b-11xl text-11xl font-inter border-darkslategray mq450:gap-[27px_109px] mq450:pt-5 mq450:pr-5 mq450:pb-[109px] mq450:box-border mq750:gap-[54px_109px] mq750:pr-[70px] mq750:box-border mq1050:pt-[31px] mq1050:pb-[168px] mq1050:box-border box-border flex w-[1563px] max-w-full flex-col items-end justify-start gap-[109px] rounded-t-none border-[1px] border-solid pb-[259px] pl-[59px] pr-[280px] pt-12 text-center text-white lg:box-border lg:pl-[29px] lg:pr-[140px]">
          <div className="rounded-b-11xl border-darkslategray relative box-border hidden h-[819px] w-[1563px] max-w-full rounded-t-none border-[1px] border-solid" />
          <FrameComponent2 />
          <div className="flex max-w-full flex-row items-start justify-start self-stretch">
            <div className="mq450:gap-[21px_172px] mq750:gap-[43px_172px] flex w-[1123px] max-w-full flex-col items-start justify-start gap-[172px] lg:gap-[86px_172px]">
              <div className="mq450:text-lg mq450:leading-[14px] mq1050:text-5xl mq1050:leading-[18px] relative z-[1] flex w-[111px] items-center justify-center leading-[23px]">
                Drafts
              </div>
              <div className="flex max-w-full flex-row items-start justify-end self-stretch">
                <div className="mq450:text-3xl mq450:leading-[40px] relative z-[1] flex h-[89px] w-[801px] max-w-full shrink-0 items-center leading-[50px]">
                  <span className="w-full">
                    <p className="m-0 font-semibold">Nothing in Drafts</p>
                    <p className="m-0 text-9xl text-gray-100">
                      Created games and ongoing games will be listed here
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
