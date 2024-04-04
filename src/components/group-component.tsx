import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  /** Style props */
  propBackground?: CSSProperties["background"];
  propBackground1?: CSSProperties["background"];
  propPadding?: CSSProperties["padding"];
  propBackground2?: CSSProperties["background"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  propBackground,
  propBackground1,
  propPadding,
  propBackground2,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground1,
    };
  }, [propBackground1]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const createAGameStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground2,
    };
  }, [propBackground2]);

  return (
    <div
      className="flex-1 rounded-3xl [background:linear-gradient(180deg,_#c50183,_#a100d9)] flex flex-col items-center justify-start pt-[146px] pb-[113.8px] pr-[22px] pl-5 box-border min-w-[381px] max-w-full text-center text-sm font-inter mq725:min-w-full mq450:pt-[95px] mq450:pb-[74px] mq450:box-border"
      style={groupDivStyle}
    >
      <div
        className="w-[507.6px] h-[365px] relative rounded-3xl [background:linear-gradient(180deg,_#c50183,_#a100d9)] hidden max-w-full"
        style={rectangleDivStyle}
      />
      <div
        className="w-[264.8px] h-[66.2px] flex flex-row items-start justify-center"
        style={frameDiv2Style}
      >
        <img
          className="h-[74.7px] w-[74.7px] relative z-[1]"
          loading="lazy"
          alt=""
          src="/group-1092.svg"
        />
      </div>
      <div
        className="w-[264.8px] h-[39px] relative leading-[22.53px] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#c50183,_#a100d9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] flex items-center justify-center shrink-0 z-[1]"
        style={createAGameStyle}
      >
        Create a Game
      </div>
    </div>
  );
};

export default GroupComponent;
