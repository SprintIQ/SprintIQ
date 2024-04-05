import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback } from "react";

const GenerateCode: NextPage = () => {
  const router = useRouter();

  const onButtonPrimaryClick = useCallback(() => {
    // Please sync "get code" to the project
  }, []);

  const onPolygonIconClick = useCallback(() => {
    void router.push("/question-overview");
  }, [router]);

  return (
    <div className="text-41xl font-inter relative h-[1117px] w-full overflow-hidden text-center tracking-[normal] text-white [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)]">
      <div className="rounded-11xl bg-darkgreen border-limegreen absolute left-[401px] top-[227px] z-[1] box-border flex w-[927px] max-w-full flex-col items-center justify-start gap-[66px] border-[1px] border-solid px-5 pb-[197px] pt-[229px]">
        <div className="rounded-11xl bg-darkgreen border-limegreen relative box-border hidden h-[663px] w-[927px] max-w-full border-[1px] border-solid" />
        <h1 className="font-inherit mq450:text-17xl mq450:leading-[30px] mq750:text-29xl mq750:leading-[40px] relative z-[2] m-0 flex w-[635px] max-w-full items-center justify-center font-normal leading-[50px] text-inherit">
          Proceed to generate unique token code
        </h1>
        <div className="flex w-[635px] max-w-full flex-row items-start justify-center">
          <button
            className="bg-limegreen rounded-81xl hover:bg-forestgreen z-[2] box-border flex w-[335px] max-w-full cursor-pointer flex-row items-start justify-center px-5 py-4 [border:none]"
            onClick={onButtonPrimaryClick}
          >
            <div className="text-11xl font-inter mq450:text-lg mq750:text-5xl relative inline-block w-32 min-w-[128px] text-center text-white">
              Continue
            </div>
          </button>
        </div>
      </div>
      <div className="absolute bottom-[0px] left-[109px] top-[0px] h-full w-[1509.4px]">
        <img
          className="absolute left-[0px] top-[-145px] h-[1677px] w-[1509.4px] object-cover"
          alt=""
          src="/group-1143@2x.png"
        />
        <img
          className="absolute left-[7px] top-[117px] z-[1] h-[48.1px] w-[48.1px] cursor-pointer object-contain"
          loading="lazy"
          alt=""
          src="/polygon-4.svg"
          onClick={onPolygonIconClick}
        />
      </div>
    </div>
  );
};

export default GenerateCode;
