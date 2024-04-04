import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ButtonPrimaryType = {
  addQuestion?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth1?: CSSProperties["width"];

  /** Action props */
  onButtonPrimaryClick?: () => void;
  onButtonPrimary1Click?: () => void;
};

const ButtonPrimary: NextPage<ButtonPrimaryType> = ({
  addQuestion,
  propWidth,
  propAlignSelf,
  propMinWidth,
  propWidth1,
  onButtonPrimaryClick,
  onButtonPrimary1Click,
}) => {
  const buttonPrimaryStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const buttonPrimary1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const addQuestionStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className="w-[1090px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full"
      style={buttonPrimaryStyle}
    >
      <div className="w-[834px] flex flex-row flex-wrap items-start justify-start gap-[38px] max-w-full mq450:gap-[19px]">
        <button
          className="cursor-pointer [border:none] py-4 px-5 bg-limegreen flex-1 rounded-81xl flex flex-row items-start justify-center box-border min-w-[193px] whitespace-nowrap max-w-full hover:bg-forestgreen"
          style={buttonPrimary1Style}
          onClick={onButtonPrimaryClick}
        >
          <div
            className="w-[193px] relative text-11xl font-inter text-white text-center inline-block"
            style={addQuestionStyle}
          >
            {addQuestion}
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] py-4 px-5 bg-limegreen w-[335px] rounded-81xl flex flex-row items-start justify-center box-border max-w-full hover:bg-forestgreen"
          onClick={onButtonPrimary1Click}
        >
          <div className="w-[83px] relative text-11xl font-inter text-white text-center inline-block min-w-[83px] mq450:text-lg mq1050:text-5xl">
            Finish
          </div>
        </button>
      </div>
    </div>
  );
};

export default ButtonPrimary;
