import type { NextPage } from "next";

import FrameComponent11 from "../components/frame-component11";
import FrameComponent12 from "../components/frame-component12";

const HomePageForCreatedQuestion: NextPage = () => {
  return (
    <div className="relative box-border flex w-full flex-col items-start justify-start overflow-hidden px-0 pb-[73px] pt-0.5 tracking-[normal] [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)]">
      <FrameComponent12 />
      <main className="box-border flex max-w-full flex-row items-start justify-center self-stretch py-0 pl-5 pr-[21px]">
        <section className="rounded-b-11xl text-11xl font-inter border-darkslategray mq450:gap-[27px_109px] mq450:pt-5 mq450:pr-5 mq450:pb-[134px] mq450:box-border mq750:gap-[54px_109px] mq750:pr-[70px] mq750:box-border mq1050:pt-[31px] mq1050:pb-[206px] mq1050:box-border box-border flex w-[1563px] max-w-full flex-col items-end justify-start gap-[109px] rounded-t-none border-[1px] border-solid pb-[317px] pl-[59px] pr-[280px] pt-12 text-center text-white lg:box-border lg:pl-[29px] lg:pr-[140px]">
          <div className="rounded-b-11xl border-darkslategray relative box-border hidden h-[819px] w-[1563px] max-w-full rounded-t-none border-[1px] border-solid" />
          <FrameComponent11 />
          <div className="mq750:gap-[17px_35px] flex max-w-full flex-col items-start justify-start gap-[35px] self-stretch">
            <div className="mq450:text-lg mq450:leading-[14px] mq1050:text-5xl mq1050:leading-[18px] relative z-[1] flex w-[111px] items-center justify-center leading-[23px]">
              Drafts
            </div>
            <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch py-0 pl-[17px] pr-0 text-left">
              <div className="bg-paleturquoise mq1050:flex-wrap mq1050:justify-center z-[1] box-border flex max-w-full flex-1 flex-row items-start justify-between gap-[20px] rounded-3xl pb-[38.8px] pl-16 pr-[55.6px] pt-[39px] lg:box-border lg:pl-8 lg:pr-7">
                <div className="bg-paleturquoise relative hidden h-[168px] w-[1205px] max-w-full rounded-3xl" />
                <div className="flex w-[548px] max-w-full flex-col items-start justify-start">
                  <div className="mq450:text-lg mq450:leading-[9px] mq1050:text-5xl mq1050:leading-[12px] relative z-[1] flex h-[48.4px] shrink-0 items-center self-stretch leading-[15px] [debug_commit:f6aba90]">
                    Blockchain Tech
                  </div>
                  <div className="text-darkgray box-border flex h-[41.8px] flex-row items-start justify-start px-0 pb-0 pt-0 text-xl">
                    <div className="mq450:text-base mq450:leading-[12px] relative z-[1] mt-[-6.600000000000364px] flex h-[48.4px] shrink-0 items-center leading-[15px] [debug_commit:f6aba90]">
                      Created 2h ago
                    </div>
                  </div>
                </div>
                <div className="text-limegreen box-border flex w-[98.4px] flex-col items-start justify-start px-0 pb-0 pt-[19.4px] text-center">
                  <div className="mq450:text-lg mq450:leading-[9px] mq1050:text-5xl mq1050:leading-[12px] relative z-[1] flex h-[48.5px] shrink-0 items-center justify-center self-stretch font-semibold leading-[15px]">{`View `}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePageForCreatedQuestion;
