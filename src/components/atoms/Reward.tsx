import { type Winners } from "@src/server/api/routers/player";
import { api } from "@src/utils/api";
import * as React from "react";
import Link from "next/link";


import Abstract from "../icons/Abstract.icon";
import Button from "../ui/Button";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
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
  const { data: winners } = api.player.game_result.useQuery({
    game_id: props.gameId ?? "",
  });
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
      <div className="z-10 m-auto text-5xl font-bold text-secondary-700">
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
        <Button className="" text="Claim Rewards" />
      </div>
    );
  } else if (gameEnded && !isWinner) {
    content =     
<div className="container flex flex-col items-center justify-between px-4 py-6 gap-4  overflow-hidden">
  <h2 className="text-secondary-700 text-xl font-bold">Game Ended!</h2>
   <div className="info text-left text-white text-sm overflow-hidden" >
    View admin screen leaderboard
    </div>
     <button className="bg-secondary-700 text-white py-2 px-4 rounded-full flex items-center justify-center overflow-hidden">
      Finish
     </button>
</div>
;
  }
  return (
    <section className="relative grid min-h-screen place-content-center">
      <Abstract className="absolute inset-0 w-full " />
      {content}
    </section>
  );
};
export default Reward;
