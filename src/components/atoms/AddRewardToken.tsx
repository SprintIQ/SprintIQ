import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { useQuizContext } from "@src/provider/QuizContext";
import { api } from "@src/utils/api";
import {
  generateGameCode,
  sendFunds,
} from "@src/utils/helpers/sol_program_helpers";
import * as crypto from "crypto";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { BeatLoader } from "react-spinners";
import { toast, Toaster } from "sonner";
import * as crypto from 'crypto';

export interface Distribution {
  position: number;
  percentage: number;
}

const defaultQuestions = [
  {
    questionNumber: 1,
    question: "",
    type: "text",
    options: [""],
    answer: "",
    points: 0,
    duration: 0,
  },
];

const AddRewardToken: NextPage = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createGame = api.game.full_game_create.useMutation<any>();
  const {
    setAmountGlobal,
    setDistributionGlobal,
    quizTitleGlobal,
    questionsGlobal,
  } = useQuizContext();
  const [distribution, setDistribution] = useState<Distribution[]>([
    { position: 1, percentage: 0 },
  ]);
  const [amount, setAmount] = useState<string>("");
  const [loading, setIsLoading] = useState<boolean>(false);

  const { connection } = useConnection();
  const anchor_wallet = useAnchorWallet();
  const wallet = useWallet();
  const publickey = wallet.publicKey;
  // console.log("anchor_wallet", anchor_wallet);
  // console.log("quizTitleGlobal", quizTitleGlobal);
  // console.log("questionsGlobal", questionsGlobal);
  // console.log("public key", wallet);

  const handleAddMore = () => {
    setDistribution(prevDistribution => [
      ...prevDistribution,
      { position: prevDistribution.length + 1, percentage: 0 },
    ]);
  };

  const handlePercentageChange = (index: number, value: string) => {
    setDistribution(prevDistribution => {
      const updatedDistribution = [...prevDistribution];
      updatedDistribution[index].percentage = parseInt(value, 10) || 0;
      return updatedDistribution;
    });
  };

  const handleRemovePercentage = (index: number) => {
    setDistribution(prevDistribution => {
      const updatedDistribution = [...prevDistribution];
      updatedDistribution.splice(index, 1); // Remove the percentage at the specified index
      return updatedDistribution;
    });
  };

  const onPolygonIconClick = useCallback(() => {
    void router.push("/dashboard/add-reward");
  }, [router]);

  const checkPercentages = () => {
    const totalPercentage = distribution.reduce(
      (total, item) => total + item.percentage,
      0,
    );
    if (totalPercentage !== 100) {
      toast("Total percentage must add up to 100.");
      return false;
    }
    return true;
  };

  const onDepositForGameButtonPress = useCallback(() => {
    if (
      amount.trim() === "" ||
      distribution.some(d => d.percentage === 0) ||
      JSON.stringify(questionsGlobal) === JSON.stringify(defaultQuestions) ||
      quizTitleGlobal === ""
    ) {
      // Show an alert error if either amount or any distribution is empty
      toast(
        "Please enter an amount and fill in all percentages before continuing.",
      );
    } else {
      if (!checkPercentages()) {
        return;
      }

      if (wallet.publicKey && anchor_wallet) {
        setIsLoading(true);
        const gameCode = generateGameCode(6);

        //Hash the gameCode and user's publickey
        const gameCodeBuffer = Buffer.from(gameCode);
        const pubkeyBuffer = Buffer.from(wallet.publicKey.toString());
        const combinedBuffer = Buffer.concat([gameCodeBuffer, pubkeyBuffer]);
        const hash = crypto
          .createHash("sha256")
          .update(combinedBuffer)
          .digest();
        //we are using  the first six characters as the game_id hash
        const game_id_hash = hash.toString("base64").substring(0, 6);

        console.log(`Game id Hash: ${game_id_hash}`);

        sendFunds(
          wallet.publicKey,
          anchor_wallet,
          connection,
          game_id_hash,
          amount,
        )
          .then(() => {
            toast("You have successfully deposited");
            setIsLoading(false);
            setAmountGlobal(amount);
            setDistributionGlobal(distribution);

            void createGame
              .mutateAsync({
                title: quizTitleGlobal,
                description: quizTitleGlobal,
                game_code: gameCode,
                reward: parseInt(amount, 10),
                percentages: distribution,
                questions: questionsGlobal,
              })
              .then(res => {
                console.log("Game created response", res);
                toast("You game has been sucessfully created");
                void router.push(`/dashboard/get-code?param=${gameCode}`);
              })
              .catch(err => {
                console.error("Error creating game", err);
                toast("Creating the game failed pls try again");
                setIsLoading(false);
              });
          })
          .catch(err => {
            console.error(err);
            toast("Depositing the funds failed pls try again");
            setIsLoading(false);
          });
      }

      // if (publickey && anchor_wallet) {
      //   setIsLoading(true);
      //   const gameCode = generateGameCode(6);
      //   void createGame
      //     .mutateAsync({
      //       title: quizTitleGlobal,
      //       description: quizTitleGlobal,
      //       game_code: gameCode,
      //       reward: parseInt(amount, 10),
      //       percentages: distribution,
      //       questions: questionsGlobal,
      //     })
      //     .then(res => {
      //       console.log("Game created response", res);
      //       const gameId = res.game?.id;
      //       if (!gameId) {
      //         throw new Error("Game Id not provided");
      //       }
      //       sendFunds(publickey, anchor_wallet, connection, gameId, amount)
      //         .then(() => {
      //           toast("You have successfully deposited");
      //           setIsLoading(false);
      //           setAmountGlobal(amount);
      //           setDistributionGlobal(distribution);
      //           toast("You game has been sucessfully created");
      //           void router.push(`/dashboard/get-code?param=${gameCode}`);
      //         })
      //         .catch(err => {
      //           console.error(err);
      //           toast("Depositing the funds failed pls try again");
      //           setIsLoading(false);
      //         });
      //     })
      //     .catch(err => {
      //       console.error("Error creating game", err);
      //       toast("Creating the game failed pls try again");
      //       setIsLoading(false);
      //     });
      // }
    }
  }, [amount, distribution, setAmountGlobal, setDistributionGlobal, router]);

  // console.log("percentages", distribution);
  // console.log("questions global", questionsGlobal);
  // console.log("quiz global", quizTitleGlobal);
  return (
    <div className="font-inter relative flex h-[100vh] w-full items-center justify-center overflow-hidden text-center text-2xl tracking-[normal] text-white [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)] md:text-[35px]">
      <Toaster />
      <div className=" relative z-10 m-auto box-border flex w-[527px] max-w-full flex-col items-center justify-start  rounded-[2.5rem] border-solid px-5 py-[100px] md:border-[1px] md:border-[#175611] md:bg-[#0a2913]">
        {/* <div className="rounded-11xl bg-darkgreen border-limegreen relative box-border hidden h-[663px] w-[927px] max-w-full border-[1px] border-solid" /> */}
        <h1 className="font-inherit relative z-[2] m-0 flex w-[635px] max-w-full items-center justify-center font-normal  leading-[35px] text-white">
          Set up Reward
        </h1>
        <div className=" text-left text-[16px] ">
          <div className="mt-5">
            <label className=" text-sm font-semibold">Add amount</label>
            <input
              type="text"
              placeholder="USDC$"
              className="w-full rounded-md border border-[#175611] bg-transparent p-2 text-white placeholder-gray-600 outline-none"
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
                <label className=" text-sm font-semibold">
                  {item.position}
                </label>
                <div className="flex w-full flex-row items-center justify-start  rounded-md  border border-[#175611] bg-transparent p-2 text-white outline-none ">
                  <input
                    type="text"
                    placeholder="Percentage"
                    value={item.percentage || ""}
                    onChange={e =>
                      handlePercentageChange(index, e.target.value)
                    }
                    className=" bg-transparent outline-none placeholder:text-gray-600 "
                  />
                  <p>%</p>
                  <div onClick={() => handleRemovePercentage(index)}>
                    <AiOutlineDelete className="ml-2 cursor-pointer text-[#175611]" />
                  </div>
                </div>
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
              {loading ? <BeatLoader color="white" /> : "Deposit for Game"}
            </div>
          </button>
        </div>
      </div>
      <div className="absolute bottom-[0px] left-[109px] top-[0px] z-0 h-full w-[1509.4px]">
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

export default AddRewardToken;
