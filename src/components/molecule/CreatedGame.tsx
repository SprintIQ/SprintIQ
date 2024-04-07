import { type Game, Status } from "@prisma/client";
import { api } from "@src/utils/api";
import { Routes } from "@src/utils/constants/constants";
import moment from "moment";
import { useRouter } from "next/router";
import * as React from "react";

import Spinner from "../ui/Spinner";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICreatedGameProps extends Game {}

const CreatedGame: React.FC<ICreatedGameProps> = props => {
  const { mutate, isLoading, data } = api.game.start_game.useMutation();
  const { push } = useRouter();
  const CTAs = {
    [Status.cancelled]: "Cancelled",
    [Status.completed]: "View LeaderBoard",
    [Status.created]: "Start",
    [Status.ongoing]: "View LeaderBoard",
    [Status.drafted]: "Finish",
  };
  const goToLeaderBoard = () =>
    void push(`/dashboard/${Routes.LEADER_BOARD}?gameId=${props.id}`);
  const handleClick = () => {
    switch (props.status) {
      case Status.created:
        mutate({
          game_id: props.id,
        });
        break;
      case Status.completed:
        goToLeaderBoard();
        break;
      case Status.ongoing:
        goToLeaderBoard();
        break;
      case Status.cancelled:
        // Delete Game Popup
        break;
      case Status.drafted:
        // Redirect to edit game
        break;
      default:
        // error validating game popup
        break;
    }
  };
  React.useEffect(() => {
    if (data?.success) {
      goToLeaderBoard();
    }
  }, [data]);
  return (
    <div className="bg-secondary-200/10 flex items-center justify-between px-16 py-5">
      <div>
        <h2 className="text-xl font-medium">{props.title}</h2>
        <p className="text-2xs font-light">
          {moment(props.created_at).fromNow()}
        </p>
      </div>
      <button
        disabled={isLoading}
        className="text-lg font-medium text-secondary-700"
        onClick={handleClick}
      >
        {isLoading ? <Spinner /> : CTAs[props.status]}
      </button>
    </div>
  );
};
export default CreatedGame;
