import type { NextPage } from "next";
import { type CSSProperties, useMemo } from "react";

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
      className="text-11xl font-inter mq825:flex-wrap mq825:gap-[39.9px_20px] flex w-[475px] max-w-full flex-row items-start justify-center gap-[39.9px] text-center text-white"
      style={frameDiv3Style}
    >
      <img
        className="relative z-[1] h-[71.1px] w-[71.1px] object-contain"
        loading="lazy"
        alt=""
        src={polygon2}
      />
      <div
        className="box-border flex min-w-[237px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-6"
        style={frameDiv4Style}
      >
        <div className="mq450:text-lg mq450:leading-[14px] mq825:text-5xl mq825:leading-[18px] relative z-[1] self-stretch leading-[23px]">
          {whatIsBlockchain}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
