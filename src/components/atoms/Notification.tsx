import { api } from "@src/utils/api";
import { Routes } from "@src/utils/constants/constants";
import Link from "next/link";
import * as React from "react";
import { TfiReload } from "react-icons/tfi";

import LeaderBoardItem from "../molecule/LeaderBoardItem";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILeaderboardProps {
  gameId: string;
}
interface ILeaderBoard {
  user_id: string;
  message: string;
  ref_id: string;
}
const Leaderboard: React.FC<ILeaderboardProps> = props => {
  const { mutateAsync, data, isLoading } =
    api.player.get_notifications.useMutation();
  const [players, setPlayers] = React.useState<Array<ILeaderBoard>>([]);
  const [noMoreFetch, setNoMoreFetch] = React.useState(false);
  const [firstFetch, setFirstFetch] = React.useState(true);
  const fetchLeaderboard = async (reset?: boolean) => {
    const PAGE_SIZE = 20;
    const newPlayers = (
      await mutateAsync({
        limit: PAGE_SIZE,
        skip: players.length,
      })
    )?.notifications as Array<ILeaderBoard>;
    if (newPlayers.length < PAGE_SIZE) {
      setNoMoreFetch(true);
    }
    setPlayers(prev => (reset ? [] : [...prev]).concat(newPlayers));
    setFirstFetch(false);
  };
  const resetState = async () => {
    setFirstFetch(true);
    setNoMoreFetch(false);
    void fetchLeaderboard(true);
  };

  React.useEffect(() => {
    void resetState();
  }, []);
  let content: React.ReactNode;
  if (firstFetch) {
    content = (
      <div className="my-8 flex flex-col items-center">
        <Spinner />
        <h2>Checking for your players scores...</h2>
      </div>
    );
  } else if (players.length === 0) {
    content = (
      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-medium">Nothing in Leaderboard</h2>
        <p className="text-grey-200">
          Created games and ongoing games will be listed here
        </p>
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col space-y-6">
        {data?.notifications?.map((val, index) => (
          <div key={val.id}>{val.message}</div>
        ))}

        {!noMoreFetch && !firstFetch && (
          <Button
            onClick={() => fetchLeaderboard()}
            text="Load more"
            className="mt-12"
          />
        )}
      </div>
    );
  }
  return (
    <main>
      <section className="px-6 py-24">
        <Link href={`/dashboard/${Routes.HOME}`} className="cursor-pointer">
          <div className="hidden h-0 w-0 border-b-[25px] border-r-[50px] border-t-[25px] border-b-transparent border-r-white border-t-transparent lg:block" />
        </Link>
        <div className="mx-auto w-10/12 rounded-xl border border-secondary-700 bg-secondary-300/10">
          <div className="flex items-center justify-center space-x-2 border-b border-b-secondary-700 py-16 text-center text-3xl font-bold text-secondary-700">
            <h1>Notification</h1>
            <TfiReload
              className="h-6 w-auto cursor-pointer"
              onClick={() => {
                setFirstFetch(true);
                void fetchLeaderboard(true);
              }}
            />
          </div>
          <div className="px-16 py-8">{content}</div>
        </div>
      </section>
    </main>
  );
};
export default Leaderboard;
