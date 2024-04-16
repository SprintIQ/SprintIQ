import type { NextPage } from "next";
import { useCallback } from "react";

const AddReward: NextPage = () => {
  const onPolygonIconClick = useCallback(() => {
    // Please sync "get code" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    // Please sync "Quiz 1 wrong answer" to the project
  }, []);

  const onRectangle2Click = useCallback(() => {
    // Please sync "Quiz 1 wrong answer" to the project
  }, []);

  const onRectangle3Click = useCallback(() => {
    // Please sync "Quiz 1 wrong answer" to the project
  }, []);

  const onRectangle4Click = useCallback(() => {
    // Please sync "Quiz 1 wrong answer" to the project
  }, []);

  const onAddMoreTextClick = useCallback(() => {
    // Please sync "Input question" to the project
  }, []);

  const onButtonPrimaryClick = useCallback(() => {
    // Please sync "home page for created question" to the project
  }, []);

  return (
    <div className="w-full relative bg-gray-200 flex flex-row items-start justify-start pt-[51px] px-[116px] pb-[50px] box-border gap-[113.9px] tracking-[normal] lg:pl-[58px] lg:pr-[58px] lg:box-border mq450:gap-[28px] mq850:gap-[57px] mq850:pl-[29px] mq850:pr-[29px] mq850:box-border mq1500:flex-wrap">
      <div className="h-[114.1px] flex flex-col items-start justify-start pt-[66px] px-0 pb-0 box-border">
        <img
          className="w-[48.1px] h-[48.1px] relative object-contain cursor-pointer"
          loading="lazy"
          alt=""
          src="/polygon-4.svg"
          onClick={onPolygonIconClick}
        />
      </div>
      <section className="w-[1173px] rounded-11xl bg-darkgreen box-border flex flex-col items-start justify-start pt-28 px-[209px] pb-[87px] gap-[65px] max-w-full text-center text-11xl text-white font-inter border-[1px] border-solid border-limegreen lg:gap-[32px] lg:pt-[73px] lg:px-[104px] lg:pb-[57px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq850:gap-[16px] mq850:pt-[47px] mq850:px-[52px] mq850:pb-[37px] mq850:box-border">
        <div className="w-[1173px] h-[1187px] relative rounded-11xl bg-darkgreen box-border hidden max-w-full border-[1px] border-solid border-limegreen" />
        <div className="self-stretch flex flex-row items-start justify-end pt-0 px-px pb-1.5 box-border max-w-full text-41xl">
          <h1 className="m-0 h-[103px] w-[635px] relative text-inherit leading-[50px] font-normal font-inherit flex items-center justify-center shrink-0 max-w-full z-[1] mq450:text-17xl mq450:leading-[30px] mq850:text-29xl mq850:leading-[40px]">
            Set up Reward
          </h1>
        </div>
        <div className="w-[583px] flex flex-col items-start justify-start gap-[25px] max-w-full">
          <div className="w-[233px] relative leading-[23px] font-medium flex items-center justify-center z-[1] mq450:text-lg mq450:leading-[14px] mq850:text-5xl mq850:leading-[18px]">
            Add amount
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-6 box-border max-w-full text-darkgray-300">
            <div className="flex-1 flex flex-row items-start justify-between pt-[22px] pb-[23px] pr-[18px] pl-[19px] box-border relative max-w-full gap-[20px] mq450:flex-wrap mq450:justify-center">
              <div
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-dimgray cursor-pointer z-[1]"
                onClick={onRectangleClick}
              />
              <div className="w-8 relative leading-[23px] flex items-center justify-center shrink-0 z-[2] mq450:text-lg mq450:leading-[14px] mq850:text-5xl mq850:leading-[18px]">
                $
              </div>
              <div className="relative leading-[23px] inline-block min-w-[86px] z-[2] mq450:text-lg mq450:leading-[14px] mq850:text-5xl mq850:leading-[18px]">
                USDC
              </div>
            </div>
          </div>
        </div>
        <div className="w-[464px] flex flex-row items-start justify-start pt-0 px-[13px] pb-[50px] box-border max-w-full mq850:pb-8 mq850:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[47px] max-w-full mq450:gap-[23px]">
            <div className="w-[361px] flex flex-row items-start justify-start py-0 px-[11px] box-border max-w-full">
              <div className="flex-1 relative leading-[23px] font-medium z-[1] mq450:text-lg mq450:leading-[14px] mq850:text-5xl mq850:leading-[18px]">
                Distribution percentage
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[34px] max-w-full text-darkgray-100 mq450:gap-[17px]">
              <div className="w-[249px] flex flex-col items-start justify-start gap-[13px]">
                <div className="w-[164px] relative leading-[23px] flex items-center justify-center z-[1] mq450:text-lg mq450:leading-[14px] mq850:text-5xl mq850:leading-[18px]">{`First prize `}</div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[13px]">
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[68px] flex-1 relative whitespace-nowrap">
                    <div
                      className="absolute top-[0px] left-[0px] rounded-3xs bg-dimgray w-full h-full cursor-pointer z-[1]"
                      onClick={onRectangle2Click}
                    />
                    <div className="absolute top-[22px] left-[22px] text-11xl leading-[23px] font-inter text-darkgray-100 text-center flex items-center justify-center w-[129px] h-[23px] z-[2]">
                      e.g 10%
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-[262px] flex flex-row items-start justify-start py-0 px-[13px] box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[13px]">
                  <div className="w-[152px] relative leading-[23px] flex items-center justify-center z-[1] mq450:text-lg mq450:leading-[14px] mq850:text-5xl mq850:leading-[18px]">{`First prize `}</div>
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch h-[68px] relative whitespace-nowrap">
                    <div
                      className="absolute top-[0px] left-[0px] rounded-3xs bg-dimgray w-full h-full cursor-pointer z-[1]"
                      onClick={onRectangle3Click}
                    />
                    <div className="absolute top-[22px] left-[25px] text-11xl leading-[23px] font-inter text-darkgray-100 text-center flex items-center justify-center w-[129px] h-[23px] z-[2]">
                      e.g 10%
                    </div>
                  </button>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[13px] max-w-full">
                  <div className="w-[165px] relative leading-[23px] flex items-center justify-center z-[1] mq450:text-lg mq450:leading-[14px] mq850:text-5xl mq850:leading-[18px]">{`First prize `}</div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3 box-border max-w-full text-darkgray-200">
                    <div className="flex-1 flex flex-row items-start justify-center gap-[12.5px] max-w-full mq850:flex-wrap">
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-[68px] flex-1 relative min-w-[153px] whitespace-nowrap">
                        <div
                          className="absolute top-[0px] left-[0px] rounded-3xs bg-dimgray w-full h-full cursor-pointer z-[1]"
                          onClick={onRectangle4Click}
                        />
                        <div className="absolute top-[22px] left-[25px] text-11xl leading-[23px] font-inter text-darkgray-100 text-center flex items-center justify-center w-[129px] h-[23px] z-[2]">
                          e.g 10%
                        </div>
                      </button>
                      <div className="w-[143px] flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border">
                        <div
                          className="self-stretch relative leading-[23px] cursor-pointer z-[1] mq450:text-lg mq450:leading-[14px] mq850:text-5xl mq850:leading-[18px]"
                          onClick={onAddMoreTextClick}
                        >
                          Add more
                        </div>
                      </div>
                      <div className="h-11 flex flex-col items-start justify-start pt-[23px] px-0 pb-0 box-border">
                        <img
                          className="w-[21px] h-[21px] relative z-[1]"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center max-w-full">
          <button
            className="cursor-pointer [border:none] py-4 px-5 bg-limegreen w-[419px] rounded-81xl flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[1] hover:bg-forestgreen"
            onClick={onButtonPrimaryClick}
          >
            <div className="w-[248px] relative text-11xl font-inter text-white text-center inline-block">
              Deposit for Game
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default AddReward;
