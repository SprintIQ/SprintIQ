import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ButtonPrimary from "./button-primary";

const FrameComponent4: NextPage = () => {
  const router = useRouter();

  const onButtonPrimary1Click = useCallback(() => {
    router.push("/question-overview");
  }, [router]);

  const onUploadImagevideoText1Click = useCallback(() => {
    // Please sync "Set Timer" to the project
  }, []);

  const onGroupButtonClick = useCallback(() => {
    // Please sync "add options" to the project
  }, []);

  const onSetTimerText1Click = useCallback(() => {
    // Please sync "set timer" to the project
  }, []);

  return (
    <section className="w-[1385px] flex flex-row items-start justify-center max-w-full text-center text-13xl text-white font-inter">
      <div className="w-[1195px] flex flex-col items-end justify-start gap-[118px] max-w-full lg:gap-[59px_118px] mq750:gap-[29px_118px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[69px] max-w-full lg:gap-[34px_69px] mq750:gap-[17px_69px]">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[29px] max-w-full">
            <div className="w-[38px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
              <div className="self-stretch relative leading-[23px] inline-block min-w-[20px] mq450:text-lgi mq450:leading-[14px] mq1050:text-7xl mq1050:leading-[18px]">
                2
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[561px] max-w-full mq1050:min-w-full">
              <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-darkslategray" />
            </div>
            <div className="h-11 w-[236px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border text-xl text-darkgray">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                <img
                  className="h-7 w-7 relative min-h-[28px] z-[1]"
                  alt=""
                  src="/vector-11.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div
                    className="self-stretch relative leading-[23px] cursor-pointer mq450:text-base mq450:leading-[18px]"
                    onClick={onUploadImagevideoText1Click}
                  >
                    Upload image/video
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[63px] max-w-full text-9xl lg:gap-[31px_63px] mq750:gap-[16px_63px]">
            <div className="w-[1129px] h-px relative box-border max-w-full border-t-[1px] border-solid border-darkslategray" />
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[39px] pl-0 box-border max-w-full">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[37px] max-w-full mq750:gap-[18px]">
                <div className="w-[206px] flex flex-col items-start justify-start gap-[19px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[4px]">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="w-[33px] h-[33px] relative rounded-[50%] bg-lime" />
                    </div>
                    <div className="h-[47px] flex-1 relative leading-[22.53px] flex items-center justify-center mq450:text-3xl mq450:leading-[18px]">
                      Option 1
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5">
                    <div className="flex-1 flex flex-row items-end justify-start">
                      <div className="h-[33px] w-[33px] relative rounded-[50%] bg-lime z-[1]" />
                      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1">
                        <div className="self-stretch relative leading-[22.53px] mq450:text-3xl mq450:leading-[18px]">
                          Option 2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[593px] max-w-full text-darkslategray mq1050:min-w-full">
                  <div className="self-stretch rounded-3xs box-border flex flex-row items-end justify-start pt-[23px] px-[33px] pb-[26px] gap-[34.8px] max-w-full z-[1] border-[1px] border-solid border-darkslategray mq450:gap-[34.8px_17px] mq1050:flex-wrap">
                    <button className="cursor-pointer [border:none] pt-0 px-0 pb-[3.3px] bg-[transparent] w-[294.2px] flex flex-col items-start justify-end box-border">
                      <button
                        className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start [row-gap:20px] z-[2] mq450:flex-wrap"
                        onClick={onGroupButtonClick}
                      >
                        <div className="h-[53.7px] flex-1 relative text-9xl leading-[22.53px] font-inter text-darkslategray text-center flex items-center justify-center min-w-[184px] shrink-0 [debug_commit:f6aba90] mq450:text-3xl mq450:leading-[18px]">
                          Add more options
                        </div>
                        <div className="h-[37.3px] flex flex-col items-start justify-start pt-[16.3px] px-0 pb-0 box-border ml-[-9.4px] mq450:ml-0">
                          <img
                            className="w-[21px] h-[21px] relative shrink-0 [debug_commit:f6aba90]"
                            alt=""
                            src="/vector-21.svg"
                          />
                        </div>
                      </button>
                    </button>
                    <div className="w-[313.2px] flex flex-col items-start justify-end pt-0 pb-px pr-[14.2px] pl-0 box-border">
                      <div className="self-stretch h-[53px] relative leading-[22.53px] flex items-center justify-center shrink-0 mq450:text-3xl mq450:leading-[18px]">
                        Set Correct Option
                      </div>
                    </div>
                    <div className="h-[106px] w-[913px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-darkslategray" />
                    <div
                      className="h-[54px] w-[154px] relative leading-[22.53px] flex items-center justify-center shrink-0 cursor-pointer mq450:text-3xl mq450:leading-[18px]"
                      onClick={onSetTimerText1Click}
                    >
                      Set Timer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonPrimary
          addQuestion="Add Question"
          onButtonPrimary1Click={onButtonPrimary1Click}
        />
      </div>
    </section>
  );
};

export default FrameComponent4;
