import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

const Leaderboard: NextPage = () => {
  const router = useRouter();

  const onPolygonIconClick = useCallback(() => {
    void router.push("/home-page-for-created-question");
  }, [router]);

  return (
    <div className="font-inter mq450:pl-5 mq450:pr-5 mq450:box-border mq1050:pl-[58px] mq1050:pr-[107px] mq1050:box-border relative box-border flex w-full flex-col items-end justify-end gap-[1px] overflow-hidden pb-0 pl-[116px] pr-[215px] pt-[92px] text-center text-xl tracking-[normal] text-gray-300 [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)]">
      <main className="mq750:gap-[25px] flex max-w-full shrink-0 flex-row flex-wrap items-start justify-start gap-[50.9px] self-stretch">
        <div className="box-border flex h-[73.1px] flex-col items-start justify-start px-0 pb-0 pt-[25px]">
          <img
            className="relative h-[48.1px] w-[48.1px] shrink-0 cursor-pointer object-contain [debug_commit:f6aba90]"
            loading="lazy"
            alt=""
            src="/polygon-4.svg"
            onClick={onPolygonIconClick}
          />
        </div>
        <section className="text-41xl text-limegreen font-inter mq1225:min-w-full mq450:gap-[17px_70px] mq750:gap-[35px_70px] mq750:pt-[62px] mq750:pb-[31px] mq750:box-border mq1050:pt-[95px] mq1050:pb-[47px] mq1050:box-border relative box-border flex min-w-[844px] flex-1 shrink-0 flex-col items-start justify-start gap-[70px] px-0 pb-[73px] pt-[146px] ut558text-center ">
          <div className="box-border flex  flex-row items-start justify-center self-stretch py-0 pl-5 pr-[21px]">
            <h3 className="font-inherit mq450:text-17xl mq450:leading-[14px] mq750:text-29xl mq750:leading-[18px] relative m-0 flex w-[425px] max-w-full shrink-0 items-center justify-center font-black leading-[23px] text-inherit">
              Leaderboard
            </h3>
          </div>
          <div className="rounded-11xl bg-darkgreen border-limegreen absolute bottom-[-83px] left-[0px] right-[0px] z-[1] !m-[0] box-border h-[1108px] w-full border-[1px] border-solid" />
          <div className="text-21xl mq750:gap-[20px_40px] flex max-w-full flex-col items-start justify-start gap-[40px] self-stretch text-white">
            <div className="border-lime relative z-[2] box-border h-px self-stretch border-t-[1px] border-solid" />
            <div className="box-border flex max-w-full flex-row items-start justify-center self-stretch px-5 py-0">
              <div className="mq750:gap-[17px_68.5px] mq1050:gap-[34px_68.5px] flex w-[1028px] max-w-full flex-col items-end justify-start gap-[68.5px]">
                <div className="mq750:gap-[28px_56px] flex max-w-full flex-col items-start justify-start gap-[56px] self-stretch">
                  <div className="mq1050:flex-wrap flex max-w-full flex-row items-end justify-between gap-[20px] self-stretch">
                    <div className="box-border flex w-[395px] max-w-full flex-col items-start justify-end px-0 pb-3 pt-0">
                      <div className="mq450:flex-wrap flex flex-row items-start justify-start gap-[19px] self-stretch">
                        <div className="relative h-[72px] w-[73px]">
                          <div className="absolute left-[0px] top-[0px] z-[2] h-full w-full rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#b78f00,_rgba(218,_105,_0,_0.65))]" />
                          <div className="mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px] absolute left-[5px] top-[3px] z-[3] flex h-[67px] w-[calc(100%_-_8px)] items-center justify-center font-medium leading-[22.53px]">
                            1
                          </div>
                        </div>
                        <div className="box-border flex min-w-[197px] flex-1 flex-col items-start justify-start px-0 pb-0 pt-[3px]">
                          <div className="mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px] relative z-[2] flex h-[66px] shrink-0 items-center justify-center self-stretch font-medium leading-[22.53px]">
                            JayLove
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px] relative z-[2] flex h-[67px] w-[324px] max-w-full shrink-0 items-center justify-center font-medium leading-[22.53px]">
                      30 points
                    </div>
                  </div>
                  <div className="mq750:gap-[17px_67px] mq1050:gap-[33px_67px] flex max-w-full flex-col items-start justify-start gap-[67px] self-stretch">
                    <div className="mq1050:flex-wrap flex max-w-full flex-row items-end justify-between gap-[20px] self-stretch">
                      <div className="box-border flex w-[395px] max-w-full flex-col items-start justify-end px-0 pb-1.5 pt-0">
                        <div className="mq450:flex-wrap flex flex-row items-start justify-start gap-[19px] self-stretch">
                          <div className="relative h-[73px] w-[73px]">
                            <div className="absolute left-[0px] top-[0px] z-[2] h-full w-full rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#51b700,_rgba(0,_165,_218,_0.65))]" />
                            <div className="mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px] absolute left-[5px] top-[3px] z-[3] flex h-[68px] w-[calc(100%_-_8px)] items-center justify-center font-medium leading-[22.53px]">
                              2
                            </div>
                          </div>
                          <div className="mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px] relative z-[2] flex h-[67px] min-w-[124px] flex-1 items-center justify-center font-medium leading-[22.53px]">
                            JayLove
                          </div>
                        </div>
                      </div>
                      <div className="mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px] relative z-[2] flex h-[68px] w-[324px] max-w-full shrink-0 items-center justify-center font-medium leading-[22.53px]">
                        25 points
                      </div>
                    </div>
                    <div className="mq1050:flex-wrap flex max-w-full flex-row items-end justify-between gap-[20px] self-stretch">
                      <div className="box-border flex w-[395px] max-w-full flex-col items-start justify-end px-0 pb-[7px] pt-0">
                        <div className="mq450:flex-wrap flex flex-row items-start justify-start gap-[19px] self-stretch">
                          <div className="relative h-[74px] w-[73px]">
                            <div className="absolute left-[0px] top-[0px] z-[2] h-full w-full rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#1b8f7a,_#0033b7,_#eb00ff_0.01%,_rgba(148,_0,_218,_0.65))]" />
                            <div className="mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px] absolute left-[0px] top-[2px] z-[3] flex h-[calc(100%_-_6px)] w-[65px] items-center justify-center font-medium leading-[22.53px]">
                              3
                            </div>
                          </div>
                          <div className="box-border flex min-w-[197px] flex-1 flex-col items-start justify-start px-0 pb-0 pt-0.5">
                            <div className="mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px] relative z-[2] flex h-[68px] shrink-0 items-center justify-center self-stretch font-medium leading-[22.53px]">
                              JayLove
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px] relative z-[2] flex h-[67px] w-[324px] max-w-full shrink-0 items-center justify-center font-medium leading-[22.53px]">
                        20 points
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mq1050:flex-wrap flex max-w-full flex-row items-end justify-between gap-[20px] self-stretch">
                  <div className="box-border flex w-[390px] max-w-full flex-col items-start justify-end px-0 pb-[11px] pt-0">
                    <div className="mq450:flex-wrap flex flex-row items-start justify-start gap-[22px] self-stretch">
                      <div className="mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px] relative z-[2] flex h-[67px] w-[65px] shrink-0 items-center justify-center font-medium leading-[22.53px]">
                        4
                      </div>
                      <div className="box-border flex min-w-[197px] flex-1 flex-col items-start justify-start px-0 pb-0 pt-1">
                        <div className="mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px] relative z-[2] flex h-[67px] shrink-0 items-center justify-center self-stretch font-medium leading-[22.53px]">
                          JayLove
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px] relative z-[2] flex h-[67px] w-[324px] max-w-full shrink-0 items-center justify-center font-medium leading-[22.53px]">
                    15 points
                  </div>
                </div>
                <div className="mq1050:flex-wrap flex max-w-full flex-row items-end justify-between gap-[20px] self-stretch">
                  <div className="box-border flex w-[390px] max-w-full flex-col items-start justify-end px-0 pb-3 pt-0">
                    <div className="mq450:flex-wrap flex flex-row items-start justify-start gap-[22px] self-stretch">
                      <div className="mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px] relative z-[2] flex h-[67px] w-[65px] shrink-0 items-center justify-center font-medium leading-[22.53px]">
                        5
                      </div>
                      <div className="box-border flex min-w-[197px] flex-1 flex-col items-start justify-start px-0 pb-0 pt-[7px]">
                        <div className="mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px] relative z-[2] flex h-[67px] shrink-0 items-center justify-center self-stretch font-medium leading-[22.53px]">
                          JayLove
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mq450:text-5xl mq450:leading-[14px] mq750:text-13xl mq750:leading-[18px] relative z-[2] flex h-[67px] w-[324px] max-w-full shrink-0 items-center justify-center font-medium leading-[22.53px]">
                    10 points
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="flex w-[1374px] max-w-full flex-row items-start justify-center">
        <div className="mq1050:flex-wrap flex w-[864px] max-w-full flex-row items-end justify-between gap-[20px]">
          <div className="box-border flex w-[327px] max-w-full flex-col items-start justify-end px-0 pb-3 pt-0">
            <div className="flex flex-row items-end justify-start gap-[15px] self-stretch">
              <div className="box-border flex w-[55px] flex-col items-start justify-end px-0 pb-0.5 pt-0">
                <div className="mq450:text-base mq450:leading-[18px] relative z-[2] flex h-[68px] shrink-0 items-center justify-center self-stretch font-medium leading-[22.53px]">
                  6
                </div>
              </div>
              <div className="mq450:text-base mq450:leading-[18px] relative flex h-[67px] flex-1 items-center justify-center font-medium leading-[22.53px] text-white">
                JayLove
              </div>
            </div>
          </div>
          <div className="mq450:text-base mq450:leading-[18px] relative z-[2] flex h-[67px] w-[275px] shrink-0 items-center justify-center font-medium leading-[22.53px] text-white">
            5 points
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
