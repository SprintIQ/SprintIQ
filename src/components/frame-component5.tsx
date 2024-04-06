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
    <section className="text-13xl font-inter box-border flex w-[1391px] max-w-full flex-row items-start justify-center px-0 pb-[62px] pt-0 text-center text-white">
      <div className=" flex w-[1195px] max-w-full flex-col items-end justify-start gap-[68.5px] lg:gap-[34px_68.5px]">
        <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-[29px] self-stretch">
          <div className="box-border flex w-[38px] flex-col items-start justify-start py-0 pl-0 pr-[23px]">
            <div className="text-[2rem] relative self-stretch leading-[23px]">
              1
            </div>
          </div>
          <div className=" box-border flex min-w-[561px] max-w-full flex-1 flex-col items-start justify-start px-0 pb-0 pt-3">
            <input className=" relative box-border bg-transparent self-stretch border-b-[1px] border-solid outline-none border-[#373737] " type="text" />
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
                  onClick={onUploadImagevideoTextClick}
                >
                  Upload image/video
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="border-darkslategray relative box-border h-px w-[1129px] max-w-full border-t-[1px] border-solid" /> */}
        <div className=" flex max-w-full flex-row items-start justify-end self-stretch py-0 pl-0 pr-[39px] text-9xl">
          <div className=" flex max-w-full flex-1 flex-row flex-wrap items-start justify-start gap-[39px]">
            <div className=" flex w-[204px] flex-col items-start justify-start px-0 pb-0 pt-0.5">
              <div className="flex flex-col items-start justify-start gap-[26px] self-stretch">
                <div className="flex flex-row items-center justify-start self-stretch">
                  <div className="bg-[#28FF15] relative z-[1] h-[33px] w-[33px] rounded-[50%]" />
                  <div className="flex flex-1 flex-col items-start justify-end px-0 pb-1 pt-0">
                    <div className="text-[1.25rem]  relative self-stretch leading-[22.53px]">
                      Option 1
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start self-stretch py-0 pl-0.5 pr-0">
                  <div className="flex flex-1 flex-row items-center justify-start">
                    <div className="bg-[#28FF15] relative z-[1] h-[33px] w-[33px] rounded-[50%]" />
                    <div className="flex flex-1 flex-col items-start justify-end px-0 pb-1 pt-0">
                      <div className="text-[1.25rem] mq450:leading-[18px] relative self-stretch leading-[22.53px]">
                        Option 2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[1.25rem] text-darkslategray border-[#373737]  z-[1] box-border flex min-w-[593px] max-w-full flex-1 flex-row items-end justify-start gap-[34.8px] border-[1px] border-solid px-[33px] pb-[26px] pt-[23px]">
              <div className="box-border flex w-[294.2px] flex-col items-start justify-end px-0 pb-[3.3px] pt-0">
                <div
                  className="relative z-[2] h-[53.7px] cursor-pointer self-stretch"
                  onClick={onGroupContainerClick}
                >
                  <div className="text-[1.25rem] text-[#373737] absolute left-[calc(50%_-_80px)] top-[0px] flex h-full w-[200px] items-center justify-center leading-[22.53px]">
                    Add more options
                  </div>
                  <div className="absolute left-[273.2px] top-[16.3px] flex flex-row items-start justify-start">
                    <div className="relative h-[21px] w-[21px]">
                      <img
                        className="absolute left-[0px] top-[0px] h-[21px] w-[21px]"
                        alt=""
                        src="/vector-21.svg"
                      />
                      <div className="absolute left-[0px] top-[0px] h-full w-full">
                        <img
                          className="absolute left-[0px] top-[0px] z-[1] h-[21px] w-[21px]"
                          alt=""
                          src="/vector-21.svg"
                        />
                        <img
                          className="absolute left-[0px] top-[0px] z-[2] h-[21px] w-[21px]"
                          alt=""
                          src="/vector-21.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border flex w-[313.2px] flex-col items-start justify-end pb-px pl-0 pr-[14.2px] pt-0">
                <div className="text-[1.25rem] text-[#373737] relative flex h-[53px] shrink-0 items-center justify-center self-stretch leading-[22.53px]">
                  Set Correct Option
                </div>
              </div>
              <div className="rounded-3xs border-darkslategray relative box-border hidden h-[106px] w-[913px] max-w-full border-[1px] border-solid" />
              <div
                className="text-[1.25rem] text-[#373737] relative flex h-[54px] w-[154px] shrink-0 cursor-pointer items-center justify-center leading-[22.53px]"
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
