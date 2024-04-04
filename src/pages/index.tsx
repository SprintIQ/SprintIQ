import type { NextPage } from "next";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] overflow-hidden flex flex-col items-start justify-start pt-2 px-0 pb-[124px] box-border gap-[175px] tracking-[normal] lg:gap-[87px_175px] mq450:gap-[44px_175px]">
      <FrameComponent1 />
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1476px] flex flex-col items-start justify-start gap-[63px] max-w-full mq450:gap-[16px_63px] mq825:gap-[31px_63px]">
          <FrameComponent />
          <div className="self-stretch h-[170px] flex flex-row items-start justify-center py-0 px-5 box-border">
            <img
              className="h-[170px] w-[170px] relative"
              loading="lazy"
              alt=""
              src="/group-1147.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
