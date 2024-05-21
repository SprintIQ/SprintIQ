import { type Winners } from "@src/server/api/routers/player";
import { api } from "@src/utils/api";
import * as React from "react";

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
  api.player.game_result.useSubscription(
    { game_id: props.gameId ?? "" },
    {
      onData(game) {
        if (game.ended) {
          setEnded(true);
          const isWinner = handleWinnerCheck(game.data);
          setWinner(isWinner);
        }
      },
    },
  );

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
          CongrQatulations
        </h2>
        <p className="w-7/12 text-center text-2xl">
          You are one of the top winners
        </p>
        <Button className="" text="Claim Rewards" />
      </div>
    );
  } else if (gameEnded && !isWinner) {
    content = <div></div>;
  }
  return (
    <section className="relative grid min-h-screen place-content-center">
      <Abstract className="absolute inset-0 w-full " />
      {content}
    </section>
  );
};
export default Reward;
