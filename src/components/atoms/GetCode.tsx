import { Routes } from "@src/utils/constants/constants";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { toast, Toaster } from "sonner";
import SideBar from "../molecule/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const GetCode: NextPage = () => {
  const router = useRouter();
  const { param, gameId } = router.query;
  const onBackPress = useCallback(() => {
    void router.push("/dashboard/add-reward-token");
  }, [router]);

  const onContinue = useCallback(() => {
    if (gameId) {
      void router.push(
        `/dashboard/${Routes.LEADER_BOARD}?gameId=${gameId as string}`,
      );
    } else {
      void router.push("/dashboard/home");
    }
  }, [router]);

  return (
    <div className="flex bg-white w-full  ">
      <SideBar />
      <div className="flex-grow py-10 px-12 text-black ">
        <div className="flex justify-between items-center mb-8">
          {/* Back Arrow Icon */}
          <button className="text-black" onClick={onBackPress}>
            <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#116629" />
          </button>
        </div>
        <div className=" z-[1] m-auto box-border flex w-[500px] max-w-full flex-col items-center justify-start gap-[20px] rounded-md border-solid py-5  md:border-[1px]  md:px-5 ">
          <h1 className="font-inherit relative z-[2] m-0 flex  max-w-full items-center justify-center font-normal  leading-[35px] text-inherit">
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
              className="z-[2]  flex  w-full flex-row items-center  justify-center rounded-md bg-[#1FC04D] p-3  [border:none]"
              onClick={onContinue}
            >
              <div className="font-inter  text-center text-[16px] text-white">
                Return to Homepage
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCode;
