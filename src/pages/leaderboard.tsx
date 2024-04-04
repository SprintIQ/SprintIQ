import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Leaderboard: NextPage = () => {
  const router = useRouter();

  const onPolygonIconClick = useCallback(() => {
    router.push("/home-page-for-created-question");
  }, [router]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] overflow-hidden flex flex-col items-end justify-end pt-[92px] pb-0 pr-[215px] pl-[116px] box-border gap-[1px] tracking-[normal] text-center text-xl text-gray-300 font-inter mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:pl-[58px] mq1050:pr-[107px] mq1050:box-border">
      <main className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[50.9px] max-w-full shrink-0 mq750:gap-[25px]">
        <div className="h-[73.1px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border">
          <img
            className="w-[48.1px] h-[48.1px] relative object-contain shrink-0 [debug_commit:f6aba90] cursor-pointer"
            loading="lazy"
            alt=""
            src="/polygon-4.svg"
            onClick={onPolygonIconClick}
          />
        </div>
        <section className="flex-1 flex flex-col items-start justify-start pt-[146px] px-0 pb-[73px] box-border relative gap-[70px] min-w-[844px] shrink-0 [debug_commit:f6aba90] text-center text-41xl text-limegreen font-inter mq1225:min-w-full mq450:gap-[17px_70px] mq750:gap-[35px_70px] mq750:pt-[62px] mq750:pb-[31px] mq750:box-border mq1050:pt-[95px] mq1050:pb-[47px] mq1050:box-border">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
            <h3 className="m-0 w-[425px] relative text-inherit leading-[23px] font-black font-inherit flex items-center justify-center shrink-0 max-w-full mq450:text-17xl mq450:leading-[14px] mq750:text-29xl mq750:leading-[18px]">
              Leaderboard
            </h3>
          </div>
          <div className="w-full h-[1108px] absolute !m-[0] right-[0px] bottom-[-83px] left-[0px] rounded-11xl bg-darkgreen box-border z-[1] border-[1px] border-solid border-limegreen" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-21xl text-white mq750:gap-[20px_40px]">
            <div className="self-stretch h-px relative box-border z-[2] border-t-[1px] border-solid border-lime" />
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[1028px] flex flex-col items-end justify-start gap-[68.5px] max-w-full mq750:gap-[17px_68.5px] mq1050:gap-[34px_68.5px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[56px] max-w-full mq750:gap-[28px_56px]">
                  <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                    <div className="w-[395px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[19px] mq450:flex-wrap">
                        <div className="h-[72px] w-[73px] relative">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#b78f00,_rgba(218,_105,_0,_0.65))] w-full h-full z-[2]" />
                          <div className="absolute w-[calc(100%_-_8px)] top-[3px] left-[5px] leading-[22.53px] font-medium flex items-center justify-center h-[67px] z-[3] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px]">
                            1
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[197px]">
                          <div className="self-stretch h-[66px] relative leading-[22.53px] font-medium flex items-center justify-center shrink-0 z-[2] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px]">
                            JayLove
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[67px] w-[324px] relative leading-[22.53px] font-medium flex items-center justify-center shrink-0 max-w-full z-[2] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px]">
                      30 points
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[67px] max-w-full mq750:gap-[17px_67px] mq1050:gap-[33px_67px]">
                    <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                      <div className="w-[395px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[19px] mq450:flex-wrap">
                          <div className="h-[73px] w-[73px] relative">
                            <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#51b700,_rgba(0,_165,_218,_0.65))] w-full h-full z-[2]" />
                            <div className="absolute w-[calc(100%_-_8px)] top-[3px] left-[5px] leading-[22.53px] font-medium flex items-center justify-center h-[68px] z-[3] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px]">
                              2
                            </div>
                          </div>
                          <div className="h-[67px] flex-1 relative leading-[22.53px] font-medium flex items-center justify-center min-w-[124px] z-[2] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px]">
                            JayLove
                          </div>
                        </div>
                      </div>
                      <div className="h-[68px] w-[324px] relative leading-[22.53px] font-medium flex items-center justify-center shrink-0 max-w-full z-[2] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px]">
                        25 points
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                      <div className="w-[395px] flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[19px] mq450:flex-wrap">
                          <div className="h-[74px] w-[73px] relative">
                            <div className="absolute top-[0px] left-[0px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#1b8f7a,_#0033b7,_#eb00ff_0.01%,_rgba(148,_0,_218,_0.65))] w-full h-full z-[2]" />
                            <div className="absolute h-[calc(100%_-_6px)] top-[2px] left-[0px] leading-[22.53px] font-medium flex items-center justify-center w-[65px] z-[3] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px]">
                              3
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[197px]">
                            <div className="self-stretch h-[68px] relative leading-[22.53px] font-medium flex items-center justify-center shrink-0 z-[2] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px]">
                              JayLove
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[67px] w-[324px] relative leading-[22.53px] font-medium flex items-center justify-center shrink-0 max-w-full z-[2] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px]">
                        20 points
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                  <div className="w-[390px] flex flex-col items-start justify-end pt-0 px-0 pb-[11px] box-border max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[22px] mq450:flex-wrap">
                      <div className="h-[67px] w-[65px] relative leading-[22.53px] font-medium flex items-center justify-center shrink-0 z-[2] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px]">
                        4
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[197px]">
                        <div className="self-stretch h-[67px] relative leading-[22.53px] font-medium flex items-center justify-center shrink-0 z-[2] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px]">
                          JayLove
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[67px] w-[324px] relative leading-[22.53px] font-medium flex items-center justify-center shrink-0 max-w-full z-[2] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px]">
                    15 points
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                  <div className="w-[390px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[22px] mq450:flex-wrap">
                      <div className="h-[67px] w-[65px] relative leading-[22.53px] font-medium flex items-center justify-center shrink-0 z-[2] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px]">
                        5
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[197px]">
                        <div className="self-stretch h-[67px] relative leading-[22.53px] font-medium flex items-center justify-center shrink-0 z-[2] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px]">
                          JayLove
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[67px] w-[324px] relative leading-[22.53px] font-medium flex items-center justify-center shrink-0 max-w-full z-[2] mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px]">
                    10 points
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="w-[1374px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[864px] flex flex-row items-end justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <div className="w-[327px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border max-w-full">
            <div className="self-stretch flex flex-row items-end justify-start gap-[15px]">
              <div className="w-[55px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
                <div className="self-stretch h-[68px] relative leading-[22.53px] font-medium flex items-center justify-center shrink-0 z-[2] mq450:text-base mq450:leading-[18px]">
                  6
                </div>
              </div>
              <div className="h-[67px] flex-1 relative leading-[22.53px] font-medium text-white flex items-center justify-center mq450:text-base mq450:leading-[18px]">
                JayLove
              </div>
            </div>
          </div>
          <div className="h-[67px] w-[275px] relative leading-[22.53px] font-medium text-white flex items-center justify-center shrink-0 z-[2] mq450:text-base mq450:leading-[18px]">
            5 points
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
