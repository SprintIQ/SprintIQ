import type { NextPage } from "next";
import { type CSSProperties, useMemo } from "react";

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
      className="font-inter mq725:min-w-full mq450:pt-[95px] mq450:pb-[74px] mq450:box-border box-border flex min-w-[381px] max-w-full flex-1 flex-col items-center justify-start rounded-3xl pb-[113.8px] pl-5 pr-[22px] pt-[146px] text-center text-sm [background:linear-gradient(180deg,_#c50183,_#a100d9)]"
      style={groupDivStyle}
    >
      <div
        className="relative hidden h-[365px] w-[507.6px] max-w-full rounded-3xl [background:linear-gradient(180deg,_#c50183,_#a100d9)]"
        style={rectangleDivStyle}
      />
      <div
        className="flex h-[66.2px] w-[264.8px] flex-row items-start justify-center"
        style={frameDiv2Style}
      >
        <img
          className="relative z-[1] h-[74.7px] w-[74.7px]"
          loading="lazy"
          alt=""
          src="/group-1092.svg"
        />
      </div>
      <div
        className="relative z-[1] flex h-[39px] w-[264.8px] shrink-0 items-center justify-center !bg-clip-text leading-[22.53px] text-transparent [background:linear-gradient(180deg,_#c50183,_#a100d9)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
        style={createAGameStyle}
      >
        Create a Game
      </div>
    </div>
  );
};

export default GroupComponent;
