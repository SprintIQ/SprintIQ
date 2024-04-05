import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

import GroupComponent from "../components/group-component";

const SubscriptionPlan: NextPage = () => {
  const router = useRouter();

  const onVectorClick = useCallback(() => {
    // Please sync "Connect wallet" to the project
  }, []);

  const onButtonPrimaryClick = useCallback(() => {
    void router.push("/landing-page");
  }, [router]);

  return (
    <div className="mq450:gap-[15px_61px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1000:gap-[30px_61px] mq1000:pl-16 mq1000:pr-16 mq1000:box-border relative box-border flex w-full flex-col items-start justify-start gap-[61px] overflow-hidden px-[129px] pb-[129px] pt-[103px] tracking-[normal] [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)]">
      <img
        className="relative h-[59px] w-[62px] cursor-pointer"
        loading="lazy"
        alt=""
        src="/vector.svg"
        onClick={onVectorClick}
      />
      <section className="text-45xl font-inter box-border flex max-w-full flex-row items-start justify-center self-stretch py-0 pl-px pr-0 text-center text-white">
        <div className="mq725:gap-[29px_117px] mq1050:gap-[58px_117px] flex w-[1072.9px] max-w-full flex-col items-end justify-start gap-[117px]">
          <div className="mq725:gap-[28px_57px] flex max-w-full flex-col items-start justify-start gap-[57px] self-stretch">
            <div className="flex flex-row items-start justify-center self-stretch py-0 pl-5 pr-[21px]">
              <h1 className="font-inherit mq450:text-19xl mq450:leading-[54px] mq1000:text-32xl mq1000:leading-[72px] relative m-0 flex h-[158px] w-[778px] shrink-0 items-center justify-center font-normal leading-[90px] text-inherit">
                Choose Subscription Plan
              </h1>
            </div>
            <div className="mq725:gap-[29px] flex max-w-full flex-row flex-wrap items-start justify-center gap-[57.7px] self-stretch">
              <GroupComponent />
              <GroupComponent
                propBackground="linear-gradient(176.97deg, #0034ed, #00827a)"
                propBackground1="linear-gradient(176.97deg, #0034ed, #00827a)"
                propPadding="0px 2px 0px 0px"
                propBackground2="linear-gradient(176.97deg, #0034ed, #00827a)"
              />
            </div>
          </div>
          <div className="box-border flex max-w-full flex-row items-start justify-center self-stretch px-5 py-0">
            <button
              className="bg-limegreen rounded-81xl hover:bg-forestgreen box-border flex w-[461px] max-w-full cursor-pointer flex-row items-start justify-center px-5 py-4 [border:none]"
              onClick={onButtonPrimaryClick}
            >
              <div className="text-11xl font-inter mq450:text-lg mq1000:text-5xl relative inline-block w-32 min-w-[128px] text-center text-white">
                Continue
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionPlan;
