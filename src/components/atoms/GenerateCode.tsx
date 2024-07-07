import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

const GenerateCode: NextPage = () => {
  const router = useRouter();

  const onButtonPrimaryClick = useCallback(() => {
    // Please sync "get code" to the project
  }, []);

  const onPolygonIconClick = useCallback(() => {
    void router.push("/dashboard/create");
  }, [router]);

  const onContinue = useCallback(() => {
    void router.push("/dashboard/get-code");
  }, [router]);

  return (
    <div className="font-inter relative flex h-[100vh] w-full items-center justify-center overflow-hidden px-10 text-center text-2xl tracking-[normal] text-white [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] md:text-[35px]">
      <div className=" z-[1] m-auto box-border flex w-[527px] max-w-full flex-col items-center justify-start gap-[50px] rounded-[2.5rem] border-solid px-5 py-[100px] md:border-[1px] md:border-[#175611] md:bg-[#0a2913] ">
        {/* <div className="rounded-11xl bg-darkgreen border-limegreen relative box-border hidden h-[663px] w-[927px] max-w-full border-[1px] border-solid" /> */}
        <h1 className="font-inherit relative z-[2] m-0 flex w-[635px] max-w-full items-center justify-center font-normal  leading-[35px] text-inherit">
          Proceed to generate unique token code
        </h1>
        <div className="flex w-[300px]  flex-row  justify-center">
          <button
            className="z-[2]  flex  w-full flex-row items-center  justify-center rounded-[2.5rem] bg-[#1FC04D] px-3 py-3  [border:none]"
            onClick={onButtonPrimaryClick}
          >
            <div
              className="font-inter w-32  min-w-[128px] text-center text-[22px] text-white"
              onClick={onContinue}
            >
              Continue
            </div>
          </button>
        </div>
      </div>
      <div className="absolute bottom-[0px] left-[109px] top-[0px] h-full w-[1509.4px]">
        <div className="absolute left-[7px] top-[-140px] h-[1100px] w-[1009.4px] object-cover ">
          <Image fill alt="" src="/group-1143@2x.png" />
        </div>
        <div className="absolute left-[7px] top-[117px] z-[1] hidden h-[48.1px] w-[48.1px] cursor-pointer object-contain lg:block">
          <Image
            fill
            loading="lazy"
            alt=""
            src="/polygon-4.svg"
            onClick={onPolygonIconClick}
          />
        </div>
      </div>
    </div>
  );
};

export default GenerateCode;
