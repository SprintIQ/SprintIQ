import type { NextPage } from "next";
import { type CSSProperties, useMemo } from "react";

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
      className=" my-6 box-border flex w-fit flex-row items-start justify-start px-5 py-0"
      style={buttonPrimaryStyle}
    >
      <div className=" flex w-full flex-row flex-wrap items-start justify-start gap-[20px] md:gap-[38px]">
        <button
          className="  flex border border-green-500  w-full flex-1 cursor-pointer flex-row items-start justify-center whitespace-nowrap rounded-md  px-5 py-4 lg:w-1/3"
          style={buttonPrimary1Style}
          onClick={onButtonPrimaryClick}
        >
          <div
            className="text-11xl font-inter relative inline-block w-[193px] text-center text-green-500"
            style={addQuestionStyle}
          >
            {addQuestion}
          </div>
        </button>
        <button
          className="hover:bg-forestgreen box-border flex w-full cursor-pointer flex-row items-start justify-center rounded-md bg-[#1FC04D] px-5 py-4 [border:none] lg:w-1/3"
          onClick={onButtonPrimary1Click}
        >
          <div className="text-11xl font-inter mq450:text-lg mq1050:text-5xl relative inline-block w-[83px] min-w-[83px] text-center text-white">
            Finish
          </div>
        </button>
      </div>
    </div>
  );
};

export default ButtonPrimary;
