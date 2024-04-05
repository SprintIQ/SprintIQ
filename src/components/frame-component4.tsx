import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

import ButtonPrimary from "./button-primary";

const FrameComponent4: NextPage = () => {
  const router = useRouter();

  const onButtonPrimary1Click = useCallback(() => {
    void router.push("/question-overview");
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
    <section className="text-13xl font-inter flex w-[1385px] max-w-full flex-row items-start justify-center text-center text-white">
      <div className="mq750:gap-[29px_118px] flex w-[1195px] max-w-full flex-col items-end justify-start gap-[118px] lg:gap-[59px_118px]">
        <div className="mq750:gap-[17px_69px] flex max-w-full flex-col items-start justify-start gap-[69px] self-stretch lg:gap-[34px_69px]">
          <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-[29px] self-stretch">
            <div className="box-border flex w-[38px] flex-col items-start justify-start py-0 pl-0 pr-[18px]">
              <div className="mq450:text-lgi mq450:leading-[14px] mq1050:text-7xl mq1050:leading-[18px] relative inline-block min-w-[20px] self-stretch leading-[23px]">
                2
              </div>
            </div>
            <div className="mq1050:min-w-full box-border flex min-w-[561px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-3">
              <div className="border-darkslategray relative box-border h-px self-stretch border-t-[1px] border-solid" />
            </div>
            <div className="text-darkgray box-border flex h-11 w-[236px] flex-col items-start justify-start px-0 pb-0 pt-4 text-xl">
              <div className="flex flex-1 flex-row items-start justify-start self-stretch">
                <img
                  className="relative z-[1] h-7 min-h-[28px] w-7"
                  alt=""
                  src="/vector-11.svg"
                />
                <div className="flex flex-1 flex-col items-start justify-start px-0 pb-0 pt-0.5">
                  <div
                    className="mq450:text-base mq450:leading-[18px] relative cursor-pointer self-stretch leading-[23px]"
                    onClick={onUploadImagevideoText1Click}
                  >
                    Upload image/video
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mq750:gap-[16px_63px] flex max-w-full flex-col items-end justify-start gap-[63px] self-stretch text-9xl lg:gap-[31px_63px]">
            <div className="border-darkslategray relative box-border h-px w-[1129px] max-w-full border-t-[1px] border-solid" />
            <div className="box-border flex max-w-full flex-row items-start justify-end self-stretch py-0 pl-0 pr-[39px]">
              <div className="mq750:gap-[18px] flex max-w-full flex-1 flex-row flex-wrap items-start justify-start gap-[37px]">
                <div className="flex w-[206px] flex-col items-start justify-start gap-[19px]">
                  <div className="flex flex-row items-start justify-start gap-[4px] self-stretch">
                    <div className="flex flex-col items-start justify-start px-0 pb-0 pt-[7px]">
                      <div className="bg-lime relative h-[33px] w-[33px] rounded-[50%]" />
                    </div>
                    <div className="mq450:text-3xl mq450:leading-[18px] relative flex h-[47px] flex-1 items-center justify-center leading-[22.53px]">
                      Option 1
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start self-stretch px-0.5 py-0">
                    <div className="flex flex-1 flex-row items-end justify-start">
                      <div className="bg-lime relative z-[1] h-[33px] w-[33px] rounded-[50%]" />
                      <div className="flex flex-1 flex-col items-start justify-end px-0 pb-1 pt-0">
                        <div className="mq450:text-3xl mq450:leading-[18px] relative self-stretch leading-[22.53px]">
                          Option 2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-darkslategray mq1050:min-w-full box-border flex min-w-[593px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-[5px]">
                  <div className="rounded-3xs border-darkslategray mq450:gap-[34.8px_17px] mq1050:flex-wrap z-[1] box-border flex max-w-full flex-row items-end justify-start gap-[34.8px] self-stretch border-[1px] border-solid px-[33px] pb-[26px] pt-[23px]">
                    <button className="box-border flex w-[294.2px] cursor-pointer flex-col items-start justify-end bg-[transparent] px-0 pb-[3.3px] pt-0 [border:none]">
                      <button
                        className="mq450:flex-wrap z-[2] flex cursor-pointer flex-row items-start justify-start self-stretch bg-[transparent] p-0 [border:none] [row-gap:20px]"
                        onClick={onGroupButtonClick}
                      >
                        <div className="font-inter text-darkslategray mq450:text-3xl mq450:leading-[18px] relative flex h-[53.7px] min-w-[184px] flex-1 shrink-0 items-center justify-center text-center text-9xl leading-[22.53px] [debug_commit:f6aba90]">
                          Add more options
                        </div>
                        <div className="mq450:ml-0 ml-[-9.4px] box-border flex h-[37.3px] flex-col items-start justify-start px-0 pb-0 pt-[16.3px]">
                          <img
                            className="relative h-[21px] w-[21px] shrink-0 [debug_commit:f6aba90]"
                            alt=""
                            src="/vector-21.svg"
                          />
                        </div>
                      </button>
                    </button>
                    <div className="box-border flex w-[313.2px] flex-col items-start justify-end pb-px pl-0 pr-[14.2px] pt-0">
                      <div className="mq450:text-3xl mq450:leading-[18px] relative flex h-[53px] shrink-0 items-center justify-center self-stretch leading-[22.53px]">
                        Set Correct Option
                      </div>
                    </div>
                    <div className="rounded-3xs border-darkslategray relative box-border hidden h-[106px] w-[913px] max-w-full border-[1px] border-solid" />
                    <div
                      className="mq450:text-3xl mq450:leading-[18px] relative flex h-[54px] w-[154px] shrink-0 cursor-pointer items-center justify-center leading-[22.53px]"
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
