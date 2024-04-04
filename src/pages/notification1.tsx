import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent10 from "../components/frame-component10";

const Notification1: NextPage = () => {
  const router = useRouter();

  const onPolygonIconClick = useCallback(() => {
    router.push("/home-page-for-created-question");
  }, [router]);

  const onWhatIsBlockchainClick = useCallback(() => {
    router.push("/leaderboard");
  }, [router]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] overflow-hidden flex flex-row items-start justify-start pt-[92px] px-[116px] pb-[91px] box-border gap-[50.9px] tracking-[normal] mq1250:pl-[58px] mq1250:pr-[58px] mq1250:box-border mq1550:flex-wrap mq825:gap-[50.9px_25px] mq825:pl-[29px] mq825:pr-[29px] mq825:box-border">
      <div className="h-[73.1px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
        <img
          className="w-[48.1px] h-[48.1px] relative object-contain cursor-pointer"
          loading="lazy"
          alt=""
          src="/polygon-4.svg"
          onClick={onPolygonIconClick}
        />
      </div>
      <main className="w-[1298px] rounded-11xl bg-darkgreen box-border flex flex-col items-start justify-start py-[211px] pr-[245px] pl-[247px] gap-[52.6px] min-h-[934px] max-w-full text-center text-11xl text-white font-inter border-[1px] border-solid border-limegreen mq1250:pl-[123px] mq1250:pr-[122px] mq1250:box-border mq1550:min-h-[auto] mq450:pl-5 mq450:pr-5 mq450:box-border mq825:gap-[26px_52.6px] mq825:py-[137px] mq825:px-[61px] mq825:box-border">
        <div className="w-[1298px] h-[934px] relative rounded-11xl bg-darkgreen box-border hidden max-w-full border-[1px] border-solid border-limegreen" />
        <div className="self-stretch flex flex-row items-end justify-start gap-[39.5px] max-w-full mq1250:flex-wrap mq450:gap-[39.5px_20px]">
          <img
            className="h-[71.1px] w-[71.1px] relative object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/polygon-1.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[21.6px] box-border min-w-[450px] max-w-full mq1250:min-w-full">
            <div
              className="self-stretch relative leading-[23px] cursor-pointer z-[1] mq450:text-lg mq450:leading-[14px] mq825:text-5xl mq825:leading-[18px]"
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
