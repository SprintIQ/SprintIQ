import { type Game, Status } from "@prisma/client";
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import { api } from "@src/utils/api";
import { Routes } from "@src/utils/constants/constants";
import { sendFundsToPlayers } from "@src/utils/helpers/sol_program_helpers";
import moment from "moment";
import { useRouter } from "next/router";
import * as React from "react";
import { toast } from "sonner";

import Spinner from "../ui/Spinner";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICreatedGameProps extends Game {}

const CreatedGame: React.FC<ICreatedGameProps> = props => {
  const { mutateAsync, isLoading, data } =
    api.game.change_game_status.useMutation();
  const getWinners = api.player.get_winners.useQuery({
    game_id: props.id.toString(),
  });
  const getGame = api.game.get_game.useQuery({ id: props.id.toString() });
  const { connection } = useConnection();
  const anchor_wallet = useAnchorWallet();
  const { publicKey, signTransaction } = useWallet();
  const [loading, setIsLoading] = React.useState<boolean>(false);
  // callback not needed here creates more performance overhead than plain functions in this case
  const onDistributeRewards = async () => {
    try {
      await getWinners.refetch();
      setIsLoading(true);
      // get the winners and creator publickey
      const winners = getWinners.data?.winners;
      const creator = getGame.data?.game?.creator_id;
      console.log("winners", winners);
      // Check if winners array exists and has elements
      if (
        winners &&
        winners.length > 0 &&
        publicKey &&
        anchor_wallet &&
        creator
      ) {
        // Map over the winners array to extract wallet_address and percentage
        const walletAddressesAndPercentages = winners.map(winner => {
          const { wallet_address } = winner;
          const { percentage } = winner.position;
          return { wallet_address, percentage };
        });
        console.log(
          "Wallet addresses and percentages:",
          walletAddressesAndPercentages,
        );
        const creatorPubKey = new PublicKey(creator);
        //console.log("creators publickey", creatorPubKey.toString());

        if (signTransaction) {
          console.log("signing transaction");
          // use async await instead of promise.
          const response = await sendFundsToPlayers(
            creatorPubKey,
            anchor_wallet,
            connection,
            props.id,
            walletAddressesAndPercentages,
            signTransaction,
          );
          setIsLoading(false);
          await mutateAsync({
            game_id: props.id,
            status: Status.completed,
          });
          toast("Rewards has been delivered successfully");
          setIsLoading(false);
        } else {
          toast("Failed to sign transaction, Please try again");
          setIsLoading(false);
        }
      } else {
        toast("No winners found");
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
      toast("Something went wrong, pls try again ");
    }
  };
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
  const handleClick = async () => {
    switch (props.status) {
      case Status.created:
        const response = await mutateAsync({
          game_id: props.id,
          status: Status.ongoing,
        });
        if (response.success) {
          void push(
            `/dashboard/${Routes.GET_CODE}?gameId=${props.id}&param=${props.game_code}`,
          );
        } else {
          toast("Failed to start game, Please try again");
        }
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
  return (
    <div className="flex items-center justify-between rounded-xl bg-secondary-200/10 px-2 py-1 lg:px-16 lg:py-5">
      <div>
        <h2 className="text-base font-medium sm:text-2xl">
          {props.title} #{props.game_code}
        </h2>
        <p className="text-2xs font-light sm:text-sm">
          Created {moment(props.created_at).fromNow()}
        </p>
      </div>
      <div className="flex flex-col items-start space-y-2">
        <button
          disabled={isLoading}
          className="text-right text-sm font-medium text-secondary-700"
          onClick={handleClick}
        >
          {isLoading ? <Spinner /> : CTAs[props.status]}
        </button>
        {Status.ongoing === props.status &&
          (loading ? (
            <Spinner />
          ) : (
            <button
              className="w-full text-right text-sm font-medium text-secondary-700"
              onClick={onDistributeRewards}
            >
              End Game
            </button>
          ))}
      </div>
    </div>
  );
};
export default CreatedGame;
