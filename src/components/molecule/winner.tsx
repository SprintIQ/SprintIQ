import Image from "next/image";
import {positionHelperShort} from "@src/utils/lib";
import * as React from "react";
import {useRouter} from "next/router";
import {Routes} from "@src/utils/constants/constants";

interface IWinnerProps {
    avatar?: string | null;
    position: number;
    points: number;

}

export default function Winner(props: IWinnerProps) {
    const {push} = useRouter()
    const handleClick = (route: Routes) => push(`/dashboard/${route}`)
    return (
        <div className="flex flex-col space-y-10">
            <div>
                <Image src="/game/congratulations.svg" width={320} height={65} alt="Congratulations!!"/>
            </div>
            <div className="relative w-fit mt-4 mx-auto">
                <Image
                    src={props.avatar || "/filler.png"}
                    width={512}
                    height={512}
                    alt="Avatar"
                    className="w-28 h-auto"
                />
                <Image
                    src={"/game/crown.svg"}
                    width={40}
                    height={40}
                    alt="Crown"
                    className="absolute -top-4 -right-2"
                />
            </div>
            <div className="w-fit mx-auto">You
                finished <b>{positionHelperShort(props.position)}</b> with {props.points} point{props.points > 1 && 's'}
            </div>
            <div className="flex flex-col space-y-4">
                <button
                    className="text-right font-medium text-center flex items-center justify-center text-xs md:text-base bg-secondary-500 text-white px-4 md:px-6 lg:px-8 py-3 rounded text-nowrap data-wrong:bg-white data-wrong:text-black"
                    onClick={() => handleClick(Routes.LEADER_BOARD)}
                >
                    View Leaderboard
                </button>
                <button
                    className="text-right font-medium text-center flex items-center justify-center text-xs md:text-base bg-secondary-500 text-white px-4 md:px-6 lg:px-8 py-3 rounded text-nowrap data-wrong:bg-white data-wrong:text-black"
                    onClick={() => handleClick(Routes.HOME)}

                >
                    Homepage
                </button>
            </div>
        </div>
    );
}
