import type { NextPage } from "next";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] overflow-hidden flex flex-col items-start justify-start pt-0.5 px-0 pb-[73px] box-border tracking-[normal]">
      <FrameComponent3 />
      <main className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
        <section className="w-[1563px] rounded-t-none rounded-b-11xl box-border flex flex-col items-end justify-start pt-12 pb-[259px] pr-[280px] pl-[59px] gap-[109px] max-w-full text-center text-11xl text-white font-inter border-[1px] border-solid border-darkslategray lg:pl-[29px] lg:pr-[140px] lg:box-border mq450:gap-[27px_109px] mq450:pt-5 mq450:pr-5 mq450:pb-[109px] mq450:box-border mq750:gap-[54px_109px] mq750:pr-[70px] mq750:box-border mq1050:pt-[31px] mq1050:pb-[168px] mq1050:box-border">
          <div className="w-[1563px] h-[819px] relative rounded-t-none rounded-b-11xl box-border hidden max-w-full border-[1px] border-solid border-darkslategray" />
          <FrameComponent2 />
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="w-[1123px] flex flex-col items-start justify-start gap-[172px] max-w-full lg:gap-[86px_172px] mq450:gap-[21px_172px] mq750:gap-[43px_172px]">
              <div className="w-[111px] relative leading-[23px] flex items-center justify-center z-[1] mq450:text-lg mq450:leading-[14px] mq1050:text-5xl mq1050:leading-[18px]">
                Drafts
              </div>
              <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                <div className="h-[89px] w-[801px] relative leading-[50px] flex items-center shrink-0 max-w-full z-[1] mq450:text-3xl mq450:leading-[40px]">
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
