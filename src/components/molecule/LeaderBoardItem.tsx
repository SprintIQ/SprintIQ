/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import Image from "next/image";
import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ILeaderBoardItemProps {
  user_id: string;
  _sum: {
    points: number | null;
  };
  id?: string;
  wallet_address?: string;
  username?: string;
  nonce?: number;
  avatar_url?: string | null;
  created_at?: Date;
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
    }
  };
  return (
    <section className="flex w-10/12 items-center justify-between text-center">
      <div className="flex space-x-8">
        <span
          className={`${renderPositionClassName(props.position)} grid h-10 w-10 place-content-center rounded-full`}
        >
          {props.position}
        </span>
        <div className="flex w-max items-center space-x-4 text-center">
          <span>{props.username}</span>
          <span>
            <img
              src={props?.avatar_url!}
              alt={props?.username}
              width={300}
              height={300}
              className="h-12 w-auto"
            />
          </span>
        </div>
      </div>
      <span className="ml-auto w-fit text-lg">{props._sum.points} Points</span>
    </section>
  );
};
export default LeaderBoardItem;
