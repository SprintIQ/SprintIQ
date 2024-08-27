import { api } from "@src/utils/api";
import { Routes } from "@src/utils/constants/constants";
import Link from "next/link";
import Image from "next/image";
import * as React from "react";
import { Toaster } from "sonner";
import TopNav from "@src/components/TopNav";
import Spinner from "../ui/Spinner";

export interface ILeaderboardProps {
  gameId: string;
}

interface LeaderboardEntry {
  user_id: string;
  _sum: {
    points: number | null;
  };
  _max: {
    created_at: Date | null;
  };
  id?: string;
  wallet_address?: string;
  username?: string;
  nonce?: number;
  avatar_url?: string | null;
  created_at?: Date;
}

interface LeaderboardApiResponse {
  success: boolean;
  history: LeaderboardEntry[];
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
  } else if (!data || !data.success || data.history.length === 0) {
    content = (
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-medium">No Scores Yet</h2>
        <p className="text-grey-200">Players score will show up here</p>
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col items-center space-y-8 w-full">
        {data.history.map((val: LeaderboardEntry, index: number) => (
          <LeaderBoardItem
            key={val.id || val.user_id}
            user_id={val.user_id}
            _sum={val._sum}
            username={val.username}
            avatar_url={val.avatar_url}
            position={index + 1}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="sm:hidden p-4">
        <Link href={`/dashboard/${Routes.HOME}`} className="cursor-pointer">
          <button className="text-2xl">&larr;</button>
        </Link>
      </div>

      <div className="hidden sm:block">
        <TopNav />
      </div>

      <div className="w-full px-10">
        <div className="relative border border-neutral-200 p-4 sm:p-10 mt-8 sm:mt-20 pt-16 w-full sm:w-[500px] mx-auto">
          <div className="flex items-center absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="w-0 h-0 border-t-[50px] border-t-transparent border-r-[86.6px] border-r-primary-green border-b-[50px] border-b-transparent scale-[0.45] md:scale-[0.58] -mr-7 md:-mr-6"></div>
            <div className="bg-radial-green px-4 sm:px-8 py-2 sm:py-3 text-white font-bold rounded-md z-10 text-sm sm:text-base">
              Leaderboard
            </div>
            <div className="w-0 h-0 border-t-[50px] border-t-transparent border-l-[86.6px] border-l-primary-green border-b-[50px] border-b-transparent scale-[0.45] md:scale-[0.58] -ml-7 md:-ml-6"></div>
          </div>

          <Toaster />
          {content}
        </div>
      </div>
    </div>
  );
};

interface ILeaderBoardItemProps {
  user_id: string;
  _sum: {
    points: number | null;
  };
  username?: string;
  avatar_url?: string | null;
  position: number;
}

const LeaderBoardItem: React.FC<ILeaderBoardItemProps> = props => {
  const renderPositionClassName = (position: number) => {
    switch (position) {
      case 1:
        return "bg-gradient-first";
      case 2:
        return "bg-gradient-second";
      case 3:
        return "bg-gradient-third";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <section className="flex w-full items-center justify-between text-center py-2">
      <div className="flex space-x-4 items-center">
        <span
          className={`${renderPositionClassName(props.position)} grid h-8 w-8 place-content-center rounded-full text-white font-bold`}
        >
          {props.position}
        </span>
        <div className="flex items-center space-x-4 text-center">
          <Image
            src={props.avatar_url || "/Zuko.png"}
            alt={props.username || "User avatar"}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-semibold">{props.username || "Anonymous"}</span>
        </div>
      </div>
      <span className="ml-auto w-fit text-lg font-bold">{props._sum.points || 0} Points</span>
    </section>
  );
};

export default Leaderboard;