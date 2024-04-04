import type { NextPage } from "next";
import FrameComponent12 from "../components/frame-component12";
import FrameComponent11 from "../components/frame-component11";

const HomePageForCreatedQuestion: NextPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] overflow-hidden flex flex-col items-start justify-start pt-0.5 px-0 pb-[73px] box-border tracking-[normal]">
      <FrameComponent12 />
      <main className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
        <section className="w-[1563px] rounded-t-none rounded-b-11xl box-border flex flex-col items-end justify-start pt-12 pb-[317px] pr-[280px] pl-[59px] gap-[109px] max-w-full text-center text-11xl text-white font-inter border-[1px] border-solid border-darkslategray lg:pl-[29px] lg:pr-[140px] lg:box-border mq450:gap-[27px_109px] mq450:pt-5 mq450:pr-5 mq450:pb-[134px] mq450:box-border mq750:gap-[54px_109px] mq750:pr-[70px] mq750:box-border mq1050:pt-[31px] mq1050:pb-[206px] mq1050:box-border">
          <div className="w-[1563px] h-[819px] relative rounded-t-none rounded-b-11xl box-border hidden max-w-full border-[1px] border-solid border-darkslategray" />
          <FrameComponent11 />
          <div className="self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px_35px]">
            <div className="w-[111px] relative leading-[23px] flex items-center justify-center z-[1] mq450:text-lg mq450:leading-[14px] mq1050:text-5xl mq1050:leading-[18px]">
              Drafts
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[17px] box-border max-w-full text-left">
              <div className="flex-1 rounded-3xl bg-paleturquoise flex flex-row items-start justify-between pt-[39px] pb-[38.8px] pr-[55.6px] pl-16 box-border max-w-full gap-[20px] z-[1] lg:pl-8 lg:pr-7 lg:box-border mq1050:flex-wrap mq1050:justify-center">
                <div className="h-[168px] w-[1205px] relative rounded-3xl bg-paleturquoise hidden max-w-full" />
                <div className="w-[548px] flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch h-[48.4px] relative leading-[15px] flex items-center shrink-0 [debug_commit:f6aba90] z-[1] mq450:text-lg mq450:leading-[9px] mq1050:text-5xl mq1050:leading-[12px]">
                    Blockchain Tech
                  </div>
                  <div className="h-[41.8px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border text-xl text-darkgray">
                    <div className="mt-[-6.600000000000364px] h-[48.4px] relative leading-[15px] flex items-center shrink-0 [debug_commit:f6aba90] z-[1] mq450:text-base mq450:leading-[12px]">
                      Created 2h ago
                    </div>
                  </div>
                </div>
                <div className="w-[98.4px] flex flex-col items-start justify-start pt-[19.4px] px-0 pb-0 box-border text-center text-limegreen">
                  <div className="self-stretch h-[48.5px] relative leading-[15px] font-semibold flex items-center justify-center shrink-0 z-[1] mq450:text-lg mq450:leading-[9px] mq1050:text-5xl mq1050:leading-[12px]">{`View `}</div>
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
