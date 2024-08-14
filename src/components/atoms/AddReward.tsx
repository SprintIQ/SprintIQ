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

        <div className="z-[1] font-inter m-auto box-border flex w-[527px] max-w-full flex-col items-center justify-start gap-[20px] rounded-[2.5rem] border-solid px-5 py-[100px] md:border-[1px] ">
          <img className=" w-10 h-10 " />
          <h1 className="font-inherit relative font-semiBold z-[2] m-0 flex  max-w-full items-center justify-center text-md leading-[35px] text-inherit">
            Proceed to add rewards
          </h1>
          <div className="flex flex-row  justify-center">
            <button
              className="z-[2]  flex  w-full flex-row items-center  justify-center rounded-md bg-[#1FC04D] px-3 py-3  [border:none]"
              onClick={onButtonPrimaryClick}
            >
              <div
                className=" w-32  min-w-[128px] font-normal text-center text-[22px] text-white"
                onClick={onContinue}
              >
                Proceed
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReward;
