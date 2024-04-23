import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { useQuizContext } from "@src/provider/QuizContext";
import { sendFunds } from "@src/utils/helpers/sol_program_helpers";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { BeatLoader } from "react-spinners";
import { toast, Toaster } from "sonner";

export interface Distribution {
  label: string;
  percentage: string;
}

const AddRewardToken: NextPage = () => {
  const router = useRouter();
  const { setAmountGlobal, setDistributionGlobal } = useQuizContext();
  const [distribution, setDistribution] = useState<Distribution[]>([
    { label: "First Prize", percentage: "" },
    { label: "Second Prize", percentage: "" },
    { label: "Third Prize", percentage: "" },
  ]);
  const [amount, setAmount] = useState<string>("");
  const [loading, setIsLoading] = useState<boolean>(false);

  const { connection } = useConnection();
  const anchor_wallet = useAnchorWallet();
  const wallet = useWallet();
  //console.log("anchor_wallet", anchor_wallet);
  // console.log("quizTitleGlobal", quizTitleGlobal);
  // console.log("questionsGlobal", questionsGlobal);
  //console.log("public key", wallet);

  const handleAddMore = () => {
    setDistribution(prevDistribution => [
      ...prevDistribution,
      { label: `${prevDistribution.length + 1}th Prize`, percentage: "" },
    ]);
  };

  const handlePercentageChange = (index: number, value: string) => {
    setDistribution(prevDistribution => {
      const updatedDistribution = [...prevDistribution];
      updatedDistribution[index].percentage = value;
      return updatedDistribution;
    });
  };

  const onPolygonIconClick = useCallback(() => {
    void router.push("/dashboard/add-reward");
  }, [router]);

  const onDepositForGameButtonPress = useCallback(() => {
    if (
      amount.trim() === "" ||
      distribution.some(d => d.percentage.trim() === "")
    ) {
      // Show an alert error if either amount or any distribution is empty
      toast(
        "Please enter an amount and fill in all percentages before continuing.",
      );
    } else {
      if (wallet.publicKey && anchor_wallet) {
        setIsLoading(true);
        sendFunds(wallet.publicKey, anchor_wallet, connection, amount)
          .then(() => {
            toast("You have successfully deposited");
            setIsLoading(false);
            setAmountGlobal(amount);
            setDistributionGlobal(distribution);
            void router.push("/dashboard/get-code");
          })
          .catch(err => {
            console.error(err);
          });
      }
    }
  }, [amount, distribution, setAmountGlobal, setDistributionGlobal, router]);

  console.log("percentages", distribution);

  return (
    <div className="font-inter relative h-[1000px] w-full overflow-hidden text-center text-[2.1875rem] tracking-[normal] text-white [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)]">
      <Toaster />
      <div className=" relative z-10 m-auto  mt-5 box-border flex w-[527px] max-w-full flex-col items-center justify-start  rounded-[2.5rem] border-[1px] border-solid border-[#175611] bg-[#0a2913] px-5 py-[40px] ">
        {/* <div className="rounded-11xl bg-darkgreen border-limegreen relative box-border hidden h-[663px] w-[927px] max-w-full border-[1px] border-solid" /> */}
        <h1 className="font-inherit relative z-[2] m-0 flex w-[635px] max-w-full items-center justify-center font-normal  leading-[35px] text-inherit">
          Set up Reward
        </h1>
        <div className=" text-left text-[16px] ">
          <div className="mt-5">
            <label className=" text-sm font-semibold">Add amount</label>
            <input
              type="text"
              placeholder="USDC$"
              className="w-full rounded-md border border-[#175611] bg-transparent p-2 text-gray-600 outline-none "
              value={amount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setAmount(e.target.value);
              }}
            />
          </div>
          <div className="mt-4">
            <p className="text-lg font-semibold">Distribution Percentage</p>
            {distribution.map((item, index) => (
              <div key={index} className="mt-2">
                <label className=" text-sm font-semibold">{item.label}</label>
                <input
                  type="text"
                  placeholder="Percentage"
                  value={item.percentage}
                  onChange={e => handlePercentageChange(index, e.target.value)}
                  className="w-full rounded-md border  border-[#175611]  bg-transparent p-2 text-gray-600 outline-none "
                />
              </div>
            ))}
            <button
              className="my-4 flex items-center text-sm text-gray-600 hover:text-gray-900"
              onClick={handleAddMore}
            >
              <IoMdAdd className="mr-1" />
              Add More
            </button>
          </div>
        </div>
        <div className="flex w-[300px]  flex-row  justify-center">
          <button
            className="z-[2]  flex  w-full flex-row items-center  justify-center rounded-[2.5rem] bg-[#1FC04D] px-3 py-3  [border:none]"
            onClick={onDepositForGameButtonPress}
          >
            <div className="font-inter   min-w-[128px] text-center text-[16px] text-white">
              {loading ? <BeatLoader color="#36d7b7" /> : "Deposit for Game"}
            </div>
          </button>
        </div>
      </div>
      <div className="absolute bottom-[0px] left-[109px] top-[0px] z-0 h-full w-[1509.4px]">
        <div className="absolute left-[7px] top-[-140px] h-[1100px] w-[1009.4px] object-cover">
          <Image fill alt="" src="/group-1143@2x.png" />
        </div>
        <div className="absolute left-[7px] top-[117px] z-[1] h-[48.1px] w-[48.1px] cursor-pointer object-contain">
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

export default AddRewardToken;
