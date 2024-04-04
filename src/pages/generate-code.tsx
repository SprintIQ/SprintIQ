import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const GenerateCode: NextPage = () => {
  const router = useRouter();

  const onButtonPrimaryClick = useCallback(() => {
    // Please sync "get code" to the project
  }, []);

  const onPolygonIconClick = useCallback(() => {
    router.push("/question-overview");
  }, [router]);

  return (
    <div className="w-full h-[1117px] relative [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] overflow-hidden tracking-[normal] text-center text-41xl text-white font-inter">
      <div className="absolute top-[227px] left-[401px] rounded-11xl bg-darkgreen box-border w-[927px] flex flex-col items-center justify-start pt-[229px] px-5 pb-[197px] gap-[66px] max-w-full z-[1] border-[1px] border-solid border-limegreen">
        <div className="w-[927px] h-[663px] relative rounded-11xl bg-darkgreen box-border hidden max-w-full border-[1px] border-solid border-limegreen" />
        <h1 className="m-0 w-[635px] relative text-inherit leading-[50px] font-normal font-inherit flex items-center justify-center max-w-full z-[2] mq450:text-17xl mq450:leading-[30px] mq750:text-29xl mq750:leading-[40px]">
          Proceed to generate unique token code
        </h1>
        <div className="w-[635px] flex flex-row items-start justify-center max-w-full">
          <button
            className="cursor-pointer [border:none] py-4 px-5 bg-limegreen w-[335px] rounded-81xl flex flex-row items-start justify-center box-border max-w-full z-[2] hover:bg-forestgreen"
            onClick={onButtonPrimaryClick}
          >
            <div className="w-32 relative text-11xl font-inter text-white text-center inline-block min-w-[128px] mq450:text-lg mq750:text-5xl">
              Continue
            </div>
          </button>
        </div>
      </div>
      <div className="absolute h-full top-[0px] bottom-[0px] left-[109px] w-[1509.4px]">
        <img
          className="absolute top-[-145px] left-[0px] w-[1509.4px] h-[1677px] object-cover"
          alt=""
          src="/group-1143@2x.png"
        />
        <img
          className="absolute top-[117px] left-[7px] w-[48.1px] h-[48.1px] object-contain cursor-pointer z-[1]"
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
