import { api } from "@src/utils/api";
import { Routes } from "@src/utils/constants/constants";
import Link from "next/link";
import * as React from "react";

import LeaderBoardItem from "../molecule/LeaderBoardItem";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILeaderboardProps {
  gameId: string;
}

const Leaderboard: React.FC<ILeaderboardProps> = props => {
  const { mutateAsync, data } = api.player.leader_board.useMutation();
  React.useEffect(() => {
    // update every 2 seconds
    setInterval(() => {
      void mutateAsync({ game_id: props.gameId });
    }, 10000);
  }, [props]);
  return (
    <main>
      <section className="px-6 py-24">
        <Link href={`/dashboard/${Routes.HOME}`} className="cursor-pointer">
          <div className="h-0 w-0 border-b-[25px] border-r-[50px] border-t-[25px] border-b-transparent border-r-white border-t-transparent hidden lg:block" />
        </Link>
        <div className="mx-auto w-10/12 rounded-xl border border-secondary-700 bg-secondary-300/10">
          <div className="border-b border-b-secondary-700 py-16 text-center text-3xl font-bold text-secondary-700">
            Leaderboard
          </div>
          <div className="px-16 py-8">
            {data?.history?.map((val, index) => (
              <LeaderBoardItem key={val.id} {...val} position={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Leaderboard;
