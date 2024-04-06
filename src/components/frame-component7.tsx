import type { NextPage } from "next";
import Image from "next/image";
import { type CSSProperties, useMemo } from "react";

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
      className="text-[#1FC04D] font-inter box-border flex w-[307px] flex-col items-start justify-start  px-0 pb-0  text-center "
      style={frameDivStyle}
    >
      <div
        className="rounded-[1.875rem] bg-darkgreen border-[#1FC04D] flex flex-1 flex-row items-start justify-start gap-[1.25rem]  border-[1px] border-solid px-7 py-6 "
        style={titleInputStyle}
      >
        <div className="rounded-11xl bg-darkgreen border-limegreen relative box-border hidden h-[119px] w-[307px] border-[1px] border-solid" />
        <button
          className="border-limegreen z-[1] box-border flex w-[68px] cursor-pointer flex-row items-start justify-start self-stretch rounded-3xl border-[0.5px] border-solid bg-[transparent] pb-3.5 pl-4 pr-[15px] pt-[13px] [background:radial-gradient(50%_50%_at_50%_50%,_#023e0a,_#007205)]"
          style={frameButtonStyle}
        >
          <div className="border-limegreen relative box-border hidden h-[62px] w-[68px] rounded-3xl border-[0.5px] border-solid [background:radial-gradient(50%_50%_at_50%_50%,_#023e0a,_#007205)]" />
<div   className="relative z-[2] h-[35px] w-[35px]" >
          <Image
            fill
            alt=""
            src="/option-buttons.svg"
            />
            </div>          
        </button>
        <div
          className="flex flex-1 flex-col items-start justify-start px-0 pb-0 pt-[19px]"
          style={frameDiv1Style}
        >
          <div className="relative z-[1] flex h-[23px] shrink-0 items-center justify-center self-stretch whitespace-nowrap leading-[15px]">
            New Game
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent7;
