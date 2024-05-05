import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { toast, Toaster } from "sonner";

const GetCode: NextPage = () => {
  const router = useRouter();
  const { param,  } = router.query;
  const onPolygonIconClick = useCallback(() => {
    void router.push("/dashboard/add-reward-token");
  }, [router]);

  const onContinue = useCallback(() => {
    void router.push("/dashboard/home");
  }, [router]);

  return (
    <div className="font-inter relative flex h-[100vh] w-full items-center justify-center overflow-hidden px-10 text-center text-2xl tracking-[normal] text-white [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] md:text-[35px]">
      <div className=" z-[1] m-auto box-border flex w-[200px] max-w-full flex-col items-center justify-start gap-[20px] rounded-[2.5rem] border-solid py-[100px] md:w-[527px] md:border-[1px] md:border-[#175611] md:bg-[#0a2913] md:px-5 ">
        <h1 className="font-inherit relative z-[2] m-0 flex w-[635px] max-w-full items-center justify-center font-normal  leading-[35px] text-inherit">
          Game Token
        </h1>
        <div className=" rounded-[1.25rem] border border-[#175611] px-8 py-1 ">
          <h1 className="font-inherit relative z-[2] m-0 flex max-w-full items-center justify-center text-[1rem] font-normal   text-inherit">
            {param}
          </h1>
        </div>
        <h1 className="font-inherit relative z-[2] m-0 flex max-w-full items-center justify-center px-5 text-[12px] font-normal leading-snug text-inherit md:px-0 md:text-[1rem]">
          Participants can access Game with this code
        </h1>
        <div className="flex flex-row justify-center  md:w-[300px]">
          <button
            className="z-[2]  flex  w-full flex-row items-center  justify-center rounded-[2.5rem] bg-[#1FC04D] px-3 py-3  [border:none]"
            onClick={onContinue}
          >
            <div className="font-inter w-32  min-w-[128px] text-center text-[22px] text-white">
              Continue
            </div>
          </button>
        </div>
      </div>
      <div className="absolute bottom-[0px] left-[109px] top-[0px] h-full w-[1509.4px]">
        <div className="absolute left-[7px] top-[-140px] h-[1100px] w-[1009.4px] object-cover">
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

export default GetCode;
