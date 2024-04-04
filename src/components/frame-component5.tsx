import type { NextPage } from "next";
import { useCallback } from "react";

const FrameComponent5: NextPage = () => {
  const onUploadImagevideoTextClick = useCallback(() => {
    // Please sync "Set Timer" to the project
  }, []);

  const onGroupContainerClick = useCallback(() => {
    // Please sync "add options" to the project
  }, []);

  const onSetTimerTextClick = useCallback(() => {
    // Please sync "set timer" to the project
  }, []);

  return (
    <section className="w-[1391px] flex flex-row items-start justify-center pt-0 px-0 pb-[62px] box-border max-w-full text-center text-13xl text-white font-inter">
      <div className="w-[1195px] flex flex-col items-end justify-start gap-[68.5px] max-w-full lg:gap-[34px_68.5px] mq750:gap-[17px_68.5px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[29px] max-w-full">
          <div className="w-[38px] flex flex-col items-start justify-start py-0 pr-[23px] pl-0 box-border">
            <div className="self-stretch relative leading-[23px] mq450:text-lgi mq450:leading-[14px] mq1050:text-7xl mq1050:leading-[18px]">
              1
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
                  onClick={onUploadImagevideoTextClick}
                >
                  Upload image/video
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1129px] h-px relative box-border max-w-full border-t-[1px] border-solid border-darkslategray" />
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[39px] pl-0 box-border max-w-full text-9xl">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[39px] max-w-full mq750:gap-[19px]">
            <div className="w-[204px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
                <div className="self-stretch flex flex-row items-end justify-start">
                  <div className="h-[33px] w-[33px] relative rounded-[50%] bg-lime z-[1]" />
                  <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1">
                    <div className="self-stretch relative leading-[22.53px] mq450:text-3xl mq450:leading-[18px]">
                      Option 1
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
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
            </div>
            <div className="flex-1 rounded-3xs box-border flex flex-row items-end justify-start pt-[23px] px-[33px] pb-[26px] gap-[34.8px] min-w-[593px] max-w-full z-[1] text-darkslategray border-[1px] border-solid border-darkslategray mq450:gap-[34.8px_17px] mq1050:flex-wrap mq1050:min-w-full">
              <div className="w-[294.2px] flex flex-col items-start justify-end pt-0 px-0 pb-[3.3px] box-border">
                <div
                  className="self-stretch h-[53.7px] relative cursor-pointer z-[2]"
                  onClick={onGroupContainerClick}
                >
                  <div className="absolute h-full top-[0px] left-[calc(50%_-_147.1px)] leading-[22.53px] flex items-center justify-center w-[282.6px] mq450:text-3xl mq450:leading-[18px]">
                    Add more options
                  </div>
                  <div className="absolute top-[16.3px] left-[273.2px] flex flex-row items-start justify-start">
                    <div className="h-[21px] w-[21px] relative">
                      <img
                        className="absolute top-[0px] left-[0px] w-[21px] h-[21px]"
                        alt=""
                        src="/vector-21.svg"
                      />
                      <div className="absolute top-[0px] left-[0px] w-full h-full">
                        <img
                          className="absolute top-[0px] left-[0px] w-[21px] h-[21px] z-[1]"
                          alt=""
                          src="/vector-21.svg"
                        />
                        <img
                          className="absolute top-[0px] left-[0px] w-[21px] h-[21px] z-[2]"
                          alt=""
                          src="/vector-21.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[313.2px] flex flex-col items-start justify-end pt-0 pb-px pr-[14.2px] pl-0 box-border">
                <div className="self-stretch h-[53px] relative leading-[22.53px] flex items-center justify-center shrink-0 mq450:text-3xl mq450:leading-[18px]">
                  Set Correct Option
                </div>
              </div>
              <div className="h-[106px] w-[913px] relative rounded-3xs box-border hidden max-w-full border-[1px] border-solid border-darkslategray" />
              <div
                className="h-[54px] w-[154px] relative leading-[22.53px] flex items-center justify-center shrink-0 cursor-pointer mq450:text-3xl mq450:leading-[18px]"
                onClick={onSetTimerTextClick}
              >
                Set Timer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
