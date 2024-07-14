import { type Winners } from "@src/server/api/routers/player";
import { api } from "@src/utils/api";
import { Routes } from "@src/utils/constants/constants";
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
  const handleWinnerCheck = (winners: Array<Winners>) => {
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
      <div className="z-10 flex flex-col items-center space-y-4">
        <h2 className="text-4xl font-bold text-secondary-700">
          Congratulations
        </h2>
        <p className="w-7/12 text-center text-2xl">
          You are one of the top winners
        </p>
        <Link href={`/dashboard/${Routes.HOME}`}>
          <Button className="" text="Finish" />
        </Link>
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
      <div className="z-10">{content}</div>
    </section>
  );
};
export default Reward;
