import { api } from "@src/utils/api";
import { Routes } from "@src/utils/constants/constants";
// import { sendFundsToPlayers } from "@src/utils/helpers/sol_program_helpers";
import Link from "next/link";
import * as React from "react";
import { Toaster } from "sonner";

import LeaderBoardItem from "../molecule/LeaderBoardItem";
import Spinner from "../ui/Spinner";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILeaderboardProps {
  gameId: string;
}
const Leaderboard: React.FC<ILeaderboardProps> = props => {
  const { data, isLoading } = api.player.query_leader_board.useQuery(
    {
      game_id: props.gameId,
      limit: 100,
      skip: 0,
    },
    {
      refetchInterval: 2000,
    },
  );
  let content: React.ReactNode;
  if (isLoading) {
    content = (
      <div className="my-8 flex flex-col items-center">
        <Spinner />
        <h2>Checking for scores...</h2>
      </div>
    );
  } else if ((data?.history ?? []).length === 0) {
    content = (
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-medium">No Scores Yet</h2>
        <p className="text-grey-200">Players score will show up here</p>
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col space-y-6">
        {(data?.history ?? [])?.map((val, index) => (
          <LeaderBoardItem key={val.id} {...val} position={index + 1} />
        ))}
      </div>
    );
  }
  return (
    <main>
      <section className="px-6 py-24">
        <Toaster />
        <Link href={`/dashboard/${Routes.HOME}`} className="cursor-pointer">
          <div className="hidden h-0 w-0 border-b-[25px] border-r-[50px] border-t-[25px] border-b-transparent border-r-white border-t-transparent lg:block" />
        </Link>
        <div className="mx-auto w-10/12 rounded-xl border border-secondary-700 bg-secondary-300/10">
          <div className="flex items-center justify-center space-x-2 border-b border-b-secondary-700 py-16 text-center text-3xl font-bold text-secondary-700">
            <h1>Leaderboard</h1>
          </div>
          <div className="px-16 py-8">{content}</div>
        </div>
      </section>
    </main>
  );
};
export default Leaderboard;
