import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

import FrameComponent7 from "./frame-component7";

const FrameComponent6: NextPage = () => {
  const router = useRouter();

  const onPolygonIconClick = useCallback(() => {
    void router.push("/landing-page");
  }, [router]);

  return (
    <section className="text-41xl font-inter mq750:gap-[25px_50px] flex w-[1456px] max-w-full flex-col items-end justify-start gap-[50px] text-center text-white">
      <header className="text-limegreen font-inter flex h-[133px] flex-row items-start justify-between gap-[20px] self-stretch text-center text-9xl">
        <div className="mq450:gap-[43.9px_22px] flex h-[51.1px] w-[314px] flex-row items-start justify-start gap-[43.9px]">
          <div className="flex flex-col items-start justify-start self-stretch px-0 pb-0 pt-[3px]">
            <img
              className="relative h-[48.1px] w-[48.1px] cursor-pointer object-contain"
              loading="lazy"
              alt=""
              src="/polygon-4.svg"
              onClick={onPolygonIconClick}
            />
          </div>
          <div className="flex h-[45.1px] flex-1 flex-row items-end justify-start gap-[10.4px]">
            <img
              className="relative h-[45.1px] w-[40.6px] object-cover"
              loading="lazy"
              alt=""
              src="/group-1124@2x.png"
            />
            <div className="box-border flex h-[31.1px] flex-1 flex-col items-start justify-end px-0 pb-[1.1px] pt-0">
              <img
                className="relative h-[30px] max-w-full shrink-0 self-stretch overflow-hidden"
                loading="lazy"
                alt=""
                src="/sprint-iq.svg"
              />
            </div>
          </div>
        </div>
        <FrameComponent7 />
      </header>
      <div className="box-border flex w-[1415px] max-w-full flex-row items-start justify-center px-5 py-0">
        <div className="mq750:gap-[18px_36px] flex w-[1089px] max-w-full flex-col items-start justify-start gap-[36px]">
          <div className="box-border flex max-w-full flex-row items-start justify-center self-stretch py-0 pl-5 pr-[21px]">
            <h1 className="font-inherit mq450:text-17xl mq450:leading-[14px] mq1050:text-29xl mq1050:leading-[18px] relative m-0 flex h-[76px] w-[482px] max-w-full shrink-0 items-center justify-center font-normal leading-[22.53px] text-inherit">
              Input Game Title
            </h1>
          </div>
          <div className="border-darkslategray relative box-border h-px self-stretch border-t-[1px] border-solid" />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
