import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent10Type = {
  polygon2?: string;
  whatIsBlockchain?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propGap?: CSSProperties["gap"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent10: NextPage<FrameComponent10Type> = ({
  polygon2,
  whatIsBlockchain,
  propWidth,
  propGap,
  propMinWidth,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      gap: propGap,
    };
  }, [propWidth, propGap]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="w-[475px] flex flex-row items-start justify-center gap-[39.9px] max-w-full text-center text-11xl text-white font-inter mq825:flex-wrap mq825:gap-[39.9px_20px]"
      style={frameDiv3Style}
    >
      <img
        className="h-[71.1px] w-[71.1px] relative object-contain z-[1]"
        loading="lazy"
        alt=""
        src={polygon2}
      />
      <div
        className="flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[237px] max-w-full"
        style={frameDiv4Style}
      >
        <div className="self-stretch relative leading-[23px] z-[1] mq450:text-lg mq450:leading-[14px] mq825:text-5xl mq825:leading-[18px]">
          {whatIsBlockchain}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
