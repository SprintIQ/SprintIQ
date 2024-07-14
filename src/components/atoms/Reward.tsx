import { type Winners } from "@src/server/api/routers/player";
import { api } from "@src/utils/api";
import { Routes } from "@src/utils/constants/constants";
import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import Abstract from "../icons/Abstract.icon";
import Button from "../ui/Button";
export interface IRewardProps {
  gameId?: string;
}

const Reward: React.FC<IRewardProps> = props => {
  const [gameEnded, setEnded] = React.useState<boolean>(false);
  const [isWinner, setWinner] = React.useState<boolean>(false);
  const { data, isLoading } = api.auth.get_details.useQuery();
  const [position, setPosition] = React.useState<number>(0);
  const { data: userData, isLoading: userDataIsLoading } =
    api.auth.get_details.useQuery();
  const getGame = api.game.get_game.useQuery({ id: props.gameId ?? "" });
  const handleWinnerCheck = (winners: Array<Winners>) => {
    const index = winners.findIndex(
      winner => winner.wallet_address === data?.wallet_address,
    );
    if (index !== -1) {
      setPosition(index + 1);
    }
    return winners.some(
      winner => winner.wallet_address === data?.wallet_address,
    );
  };
  const { data: winners } = api.player.game_result.useQuery(
    {
      game_id: props.gameId ?? "",
    },
    { refetchInterval: 5000 },
  );
  React.useEffect(() => {
    if (winners?.ended) {
      setEnded(true);
      if (winners.data) {
        setWinner(handleWinnerCheck(winners.data));
      }
    }
  }, [winners]);

  let content;
  if (!gameEnded || isLoading) {
    content = (
      <div className="z-10 m-auto items-center text-center text-5xl font-bold text-secondary-700">
        Getting your Results...
      </div>
    );
  } else if (gameEnded && isWinner) {
    content = (
      <div className="font-inter relative flex h-screen w-full flex-col items-center justify-start gap-[58px] overflow-hidden pb-[234px] pl-[75px] pr-[77px] pt-[190px] text-center text-[48px] leading-[normal] tracking-[normal] text-green-600">
        <div className="flex flex-row items-start justify-end pl-20 pr-[78px]">
          <div className="flex flex-1 flex-col items-start justify-start gap-[13px]">
            <div className="relative h-[82px] self-stretch">
              <div className="absolute left-[0px] top-[0px] z-[3] box-border h-full w-full rounded-[50%] border-[0px] border-solid border-green-600" />
              <m.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 5 }}
                className="absolute left-[5px] top-[8px] z-[4] flex h-[70px] w-[calc(100%_-_5px)] items-center justify-center font-extrabold leading-[22.53px]"
              >
                <m.img
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="w-100 h-100 absolute rotate-2 transform"
                  src="/y.png"
                  alt=""
                  width={"100"}
                  height={"100"}
                />

                {position}
              </m.div>
            </div>
            <div className="flex flex-row items-start justify-start self-stretch px-3.5 text-[14px] text-white">
              <div className="relative flex-1 leading-[23px]">
                {userData?.username}
              </div>
            </div>
          </div>
        </div>
        <section className="absolute bottom-[0px] left-[0px] right-[0px] top-[0px] !m-[0] h-full w-full">
          <div className="absolute left-[-176px] top-[-335px] h-[1273px] w-[745px] rounded-[50%] [background:linear-gradient(180deg,_rgba(245,_161,_0,_0.24),_rgba(0,_0,_0,_0))] [filter:blur(70px)]" />
          <div className="absolute left-[77px] top-[142px] z-[2] h-[238px] w-[238px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(245,_161,_0,_0.66),_rgba(0,_0,_0,_0))] [filter:blur(70px)]" />
        </section>
        <section className="font-inter flex flex-col items-start justify-start gap-[30px] text-center text-3xl text-green-600">
          <div className="relative mb-2 font-bold leading-[23px] ">
            Congratulations
          </div>
          <div className="absolute left-[50%] z-[1] mt-8 translate-x-[-50%] text-center text-xl leading-[36px] text-white md:text-2xl">
            You are one of the <br /> TOP{" "}
            {getGame.data?.game?.percentages?.length ?? 0} WINNERS
          </div>
        </section>
        <div className="mt-8 flex flex-row items-center justify-end py-8 pl-[67px] pr-[65px]">
          <button className="z-[1] flex cursor-pointer flex-row items-center justify-start rounded-[100px] bg-green-500 px-8 py-4 [border:none]">
            <div className="font-inter relative inline-block min-w-[45px] items-center text-center text-[16px] text-white">
              Finish
            </div>
          </button>
        </div>
      </div>
    );
  } else if (gameEnded && !isWinner) {
    content = (
      <div className="bg-gray font-inter mt-20 h-full overflow-hidden text-center text-white">
        <div className="flex w-full items-center justify-center md:w-auto">
          <div className="rounded-lg px-4 py-2 text-2xl font-black text-secondary-700 md:text-2xl">
            Game Ended!
          </div>
        </div>

        <div className="mb-4 mt-4 px-4 text-sm leading-tight md:text-base">
          View admin screen leaderboard
        </div>

        <Link href={`/dashboard/${Routes.HOME}`}>
          <div className="mb-16 mt-auto flex items-center justify-center">
            <button className="rounded-full bg-secondary-700 px-8 py-4 text-lg font-medium text-white">
              Finish
            </button>
          </div>
        </Link>
      </div>
    );
  }
  return (
    <section className="relative grid min-h-screen place-content-center overflow-hidden">
      <Abstract className="absolute inset-0 w-full" />
      <div className="z-10 w-full">{content}</div>
    </section>
  );
};
export default Reward;
