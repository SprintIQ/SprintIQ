import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

import FrameComponent10 from "../components/frame-component10";

const Notification1: NextPage = () => {
  const router = useRouter();

  const onPolygonIconClick = useCallback(() => {
    void router.push("/home-page-for-created-question");
  }, [router]);

  const onWhatIsBlockchainClick = useCallback(() => {
    void router.push("/leaderboard");
  }, [router]);

  return (
    <div className="mq1250:pl-[58px] mq1250:pr-[58px] mq1250:box-border mq1550:flex-wrap mq825:gap-[50.9px_25px] mq825:pl-[29px] mq825:pr-[29px] mq825:box-border relative box-border flex w-full flex-row items-start justify-start gap-[50.9px] overflow-hidden px-[116px] pb-[91px] pt-[92px] tracking-[normal] [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)]">
      <div className="box-border flex h-[73.1px] flex-col items-start justify-start px-0 pb-0 pt-[25px]">
        <img
          className="relative h-[48.1px] w-[48.1px] cursor-pointer object-contain"
          loading="lazy"
          alt=""
          src="/polygon-4.svg"
          onClick={onPolygonIconClick}
        />
      </div>
      <main className="rounded-11xl bg-darkgreen text-11xl font-inter border-limegreen mq1250:pl-[123px] mq1250:pr-[122px] mq1250:box-border mq1550:min-h-[auto] mq450:pl-5 mq450:pr-5 mq450:box-border mq825:gap-[26px_52.6px] mq825:py-[137px] mq825:px-[61px] mq825:box-border box-border flex min-h-[934px] w-[1298px] max-w-full flex-col items-start justify-start gap-[52.6px] border-[1px] border-solid py-[211px] pl-[247px] pr-[245px] text-center text-white">
        <div className="rounded-11xl bg-darkgreen border-limegreen relative box-border hidden h-[934px] w-[1298px] max-w-full border-[1px] border-solid" />
        <div className="mq1250:flex-wrap mq450:gap-[39.5px_20px] flex max-w-full flex-row items-end justify-start gap-[39.5px] self-stretch">
          <img
            className="relative z-[1] h-[71.1px] w-[71.1px] object-contain"
            loading="lazy"
            alt=""
            src="/polygon-1.svg"
          />
          <div className="mq1250:min-w-full box-border flex min-w-[450px] max-w-full flex-1 flex-col items-start justify-end px-0 pb-[21.6px] pt-0">
            <div
              className="mq450:text-lg mq450:leading-[14px] mq825:text-5xl mq825:leading-[18px] relative z-[1] cursor-pointer self-stretch leading-[23px]"
              onClick={onWhatIsBlockchainClick}
            >
              <span>Game 437200 is starting now.</span>
              <span className="text-black">{` `}</span>
              <span className="text-lime">View Leaderboard</span>
            </div>
          </div>
        </div>
        <FrameComponent10
          polygon2="/polygon-2.svg"
          whatIsBlockchain="Jaylove joined your Game"
        />
        <FrameComponent10
          polygon2="/polygon-3.svg"
          whatIsBlockchain="Game 437200 has a winner"
          propWidth="523.5px"
          propGap="33.4px"
          propMinWidth="272px"
        />
      </main>
    </div>
  );
};

export default Notification1;
