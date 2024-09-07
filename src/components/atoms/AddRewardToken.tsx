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
import SideBar from "../molecule/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
    points: 1,
    duration: 10,
  },
];

const AddRewardToken: NextPage = () => {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createGame = api.game.full_game_create.useMutation<any>();
  const loadingGame = createGame.isLoading;
  const {
    setAmountGlobal,
    setDistributionGlobal,
    setQuestionsGlobal,
    setQuizTitleGlobal,
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

  const onBackPress = useCallback(() => {
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
                setQuizTitleGlobal("");
                setQuestionsGlobal([]);
                setAmountGlobal("0");
                setDistributionGlobal([]);
                setIsLoading(false);
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
    }
  }, [amount, distribution, setAmountGlobal, setDistributionGlobal, router]);

  // console.log("percentages", distribution);
  // console.log("questions global", questionsGlobal);
  // console.log("quiz global", quizTitleGlobal);
  return (
    <div className="flex bg-white w-full min-h-screen ">
      <Toaster />
      <SideBar />
      <div className="flex-grow py-10 px-12 text-black ">
        <div className="flex justify-between items-center mb-8">
          {/* Back Arrow Icon */}
          <button className="text-black" onClick={onBackPress}>
            <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#116629" />
          </button>
        </div>
        <div className=" relative z-10 m-auto box-border flex w-[400px]  flex-col items-center justify-start  rounded-md border-solid px-2 py-5 md:border-[1px] ">

          <h1 className="font-inherit relative z-[2] m-0 flex   items-center justify-center font-normal  leading-[35px]">
            Set up Reward
          </h1>
          <div className=" text-left text-[16px] ">
            <div className="mt-5">
              <label className=" text-sm font-semibold">Add amount</label>
              <input
                type="text"
                placeholder="USDC$"
                className="w-full rounded-md border border-[#E7E4E4] bg-transparent p-2 text-black placeholder-gray-600 outline-none"
                value={amount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
            <div className="mt-4">
              <p className="text-sm font-semibold">Distribution Percentage</p>
              {distribution.map((item, index) => (
                <div key={index} className="mt-2">
                  <label className=" text-sm font-semibold">
                    {item.position}
                  </label>
                  <div className="flex w-full flex-row items-center justify-start  rounded-md  border border-[#E7E4E4] bg-transparent p-2 text-black outline-none ">
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
                      <AiOutlineDelete className="ml-2 w-5 h-5 cursor-pointer text-[#D74040]" />
                    </div>
                  </div>
                </div>
              ))}
              <button
                className="my-4 flex items-center text-sm text-green-500 hover:text-gray-900"
                onClick={handleAddMore}
              >
                Add More
                <IoMdAdd className="ml-1" />
              </button>
            </div>
          </div>
          <div className="flex  flex-row  justify-center">
            <button
              className="z-[2]  flex  w-full flex-row items-center  justify-center rounded-md bg-[#1FC04D] p-3  [border:none]"
              onClick={onDepositForGameButtonPress}
            >
              <div className="font-inter  min-w-[128px] text-center text-[16px] text-white">
                {loading ? <BeatLoader color="white" /> : "Make deposit"}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRewardToken;
