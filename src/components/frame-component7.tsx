import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent7Type = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propHeight?: CSSProperties["height"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({
  propAlignSelf,
  propFlex,
  propAlignSelf1,
  propHeight,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const titleInputStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const frameButtonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      height: propHeight,
    };
  }, [propAlignSelf1, propHeight]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="self-stretch w-[307px] flex flex-col items-start justify-start pt-3.5 px-0 pb-0 box-border text-center text-9xl text-limegreen font-inter"
      style={frameDivStyle}
    >
      <div
        className="self-stretch flex-1 rounded-11xl bg-darkgreen flex flex-row items-start justify-start pt-[29px] pb-7 pr-9 pl-[37px] gap-[9px] border-[1px] border-solid border-limegreen"
        style={titleInputStyle}
      >
        <div className="h-[119px] w-[307px] relative rounded-11xl bg-darkgreen box-border hidden border-[1px] border-solid border-limegreen" />
        <button
          className="cursor-pointer pt-[13px] pb-3.5 pr-[15px] pl-4 bg-[transparent] self-stretch w-[68px] rounded-3xl [background:radial-gradient(50%_50%_at_50%_50%,_#023e0a,_#007205)] box-border flex flex-row items-start justify-start z-[1] border-[0.5px] border-solid border-limegreen"
          style={frameButtonStyle}
        >
          <div className="h-[62px] w-[68px] relative rounded-3xl [background:radial-gradient(50%_50%_at_50%_50%,_#023e0a,_#007205)] box-border hidden border-[0.5px] border-solid border-limegreen" />
          <img
            className="h-[35px] w-[35px] relative z-[2]"
            alt=""
            src="/option-buttons.svg"
          />
        </button>
        <div
          className="flex-1 flex flex-col items-start justify-start pt-[19px] px-0 pb-0"
          style={frameDiv1Style}
        >
          <div className="self-stretch h-[23px] relative leading-[15px] flex items-center justify-center shrink-0 whitespace-nowrap z-[1]">
            New Game
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
