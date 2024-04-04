import type { NextPage } from "next";
import { useCallback } from "react";
import GroupComponent from "../components/group-component";
import { useRouter } from "next/router";

const SubscriptionPlan: NextPage = () => {
  const router = useRouter();

  const onVectorClick = useCallback(() => {
    // Please sync "Connect wallet" to the project
  }, []);

  const onButtonPrimaryClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  return (
    <div className="w-full relative [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] overflow-hidden flex flex-col items-start justify-start pt-[103px] px-[129px] pb-[129px] box-border gap-[61px] tracking-[normal] mq450:gap-[15px_61px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1000:gap-[30px_61px] mq1000:pl-16 mq1000:pr-16 mq1000:box-border">
      <img
        className="w-[62px] h-[59px] relative cursor-pointer"
        loading="lazy"
        alt=""
        src="/vector.svg"
        onClick={onVectorClick}
      />
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full text-center text-45xl text-white font-inter">
        <div className="w-[1072.9px] flex flex-col items-end justify-start gap-[117px] max-w-full mq725:gap-[29px_117px] mq1050:gap-[58px_117px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[57px] max-w-full mq725:gap-[28px_57px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
              <h1 className="m-0 h-[158px] w-[778px] relative text-inherit leading-[90px] font-normal font-inherit flex items-center justify-center shrink-0 mq450:text-19xl mq450:leading-[54px] mq1000:text-32xl mq1000:leading-[72px]">
                Choose Subscription Plan
              </h1>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[57.7px] max-w-full mq725:gap-[29px]">
              <GroupComponent />
              <GroupComponent
                propBackground="linear-gradient(176.97deg, #0034ed, #00827a)"
                propBackground1="linear-gradient(176.97deg, #0034ed, #00827a)"
                propPadding="0px 2px 0px 0px"
                propBackground2="linear-gradient(176.97deg, #0034ed, #00827a)"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <button
              className="cursor-pointer [border:none] py-4 px-5 bg-limegreen w-[461px] rounded-81xl flex flex-row items-start justify-center box-border max-w-full hover:bg-forestgreen"
              onClick={onButtonPrimaryClick}
            >
              <div className="w-32 relative text-11xl font-inter text-white text-center inline-block min-w-[128px] mq450:text-lg mq1000:text-5xl">
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
