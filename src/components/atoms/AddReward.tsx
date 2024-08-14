import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SideBar from "../molecule/SideBar";

const AddReward: NextPage = () => {
  const router = useRouter();

  const onButtonPrimaryClick = useCallback(() => {
    // Please sync "get code" to the project
  }, []);

  const onBackPress = useCallback(() => {
    void router.push("/dashboard/create");
  }, [router]);

  const onContinue = useCallback(() => {
    void router.push("/dashboard/add-reward-token");
  }, [router]);

  return (
    <div className="flex bg-white w-full h-screen ">
      <SideBar />
      <div className="flex-grow py-10 px-12 text-black ">
      <div className="flex justify-between items-center mb-8">
          {/* Back Arrow Icon */}
          <button className="text-black" onClick={onBackPress}>
            <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#116629" />
          </button>
        </div>

        <div className="z-[1] m-auto box-border flex w-[527px] max-w-full flex-col items-center justify-start gap-[50px] rounded-[2.5rem] border-solid px-5 py-[100px] md:border-[1px] md:border-[#175611] md:bg-[#0a2913]">
          <h1 className="font-inherit relative z-[2] m-0 flex w-[635px] max-w-full items-center justify-center font-normal leading-[35px] text-inherit">
            Proceed to add rewards
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
      </div>
      {/* <div className="absolute bottom-[0px] left-[109px] top-[0px] h-full w-[1509.4px]">
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
      </div> */}
    </div>
  );
};

export default AddReward;
