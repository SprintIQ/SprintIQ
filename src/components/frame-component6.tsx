import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent7 from "./frame-component7";

const FrameComponent6: NextPage = () => {
  const router = useRouter();

  const onPolygonIconClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  return (
    <section className="w-[1456px] flex flex-col items-end justify-start gap-[50px] max-w-full text-center text-41xl text-white font-inter mq750:gap-[25px_50px]">
      <header className="self-stretch h-[133px] flex flex-row items-start justify-between gap-[20px] text-center text-9xl text-limegreen font-inter">
        <div className="h-[51.1px] w-[314px] flex flex-row items-start justify-start gap-[43.9px] mq450:gap-[43.9px_22px]">
          <div className="self-stretch flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <img
              className="w-[48.1px] h-[48.1px] relative object-contain cursor-pointer"
              loading="lazy"
              alt=""
              src="/polygon-4.svg"
              onClick={onPolygonIconClick}
            />
          </div>
          <div className="h-[45.1px] flex-1 flex flex-row items-end justify-start gap-[10.4px]">
            <img
              className="h-[45.1px] w-[40.6px] relative object-cover"
              loading="lazy"
              alt=""
              src="/group-1124@2x.png"
            />
            <div className="h-[31.1px] flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[1.1px] box-border">
              <img
                className="self-stretch h-[30px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/sprint-iq.svg"
              />
            </div>
          </div>
        </div>
        <FrameComponent7 />
      </header>
      <div className="w-[1415px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1089px] flex flex-col items-start justify-start gap-[36px] max-w-full mq750:gap-[18px_36px]">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
            <h1 className="m-0 h-[76px] w-[482px] relative text-inherit leading-[22.53px] font-normal font-inherit flex items-center justify-center shrink-0 max-w-full mq450:text-17xl mq450:leading-[14px] mq1050:text-29xl mq1050:leading-[18px]">
              Input Game Title
            </h1>
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-darkslategray" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
