import Image from "next/image";
import {positionHelperShort} from "@src/utils/lib";
import * as React from "react";
import {useRouter} from "next/router";
import {Routes} from "@src/utils/constants/constants";

interface IWinnerProps {
  avatar?: string | null;
  gameId?: string;

}

export default function Loser(props: IWinnerProps) {
  const {push} = useRouter()
  const handleClick = (route: Routes) => push(`/dashboard/${route}?gameId=${props.gameId}`)
  return (
      <div className="flex flex-col space-y-10 text-center w-10/12 mx-auto">
        <div>
          <p>No one is a looser, better chances of wining next time</p>
          <h2 className="font-bold text-3xl">It was an awesome Sprint.
            Don’t you agree?</h2>
        </div>
        <div className="relative w-fit mt-4 mx-auto">
          <Image
              src={props.avatar || "/filler.png"}
              width={512}
              height={512}
              alt="Avatar"
              className="w-28 h-auto"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <button
              className="font-medium text-center flex items-center justify-center text-xs md:text-base bg-secondary-500 text-white px-4 md:px-6 lg:px-8 py-3 rounded text-nowrap data-wrong:bg-white data-wrong:text-black"
              onClick={() => handleClick(Routes.LEADER_BOARD)}
          >
            View Leaderboard
          </button>
          <button
              className="font-medium text-center flex items-center justify-center text-xs md:text-base bg-secondary-500 text-white px-4 md:px-6 lg:px-8 py-3 rounded text-nowrap data-wrong:bg-white data-wrong:text-black"
              onClick={() => handleClick(Routes.HOME)}

          >
            Homepage
          </button>
        </div>
      </div>
  );
}
