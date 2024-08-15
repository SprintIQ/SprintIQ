import {type Game, Status} from "@prisma/client";
import {useAnchorWallet, useConnection, useWallet,} from "@solana/wallet-adapter-react";
import {PublicKey} from "@solana/web3.js";
import {api} from "@src/utils/api";
import {Routes} from "@src/utils/constants/constants";
import {sendFundsToPlayers} from "@src/utils/helpers/sol_program_helpers";
import * as crypto from "crypto";
import {useRouter} from "next/router";
import * as React from "react";
import {toast} from "sonner";

import Spinner from "../ui/Spinner";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ICreatedGameProps extends Game {
}

const CreatedGame: React.FC<ICreatedGameProps> = props => {
    const {mutateAsync, isLoading, data} =
        api.game.change_game_status.useMutation();
    const getWinners = api.player.get_winners.useQuery({
        game_id: props.id.toString(),
    });
    const getGame = api.game.get_game.useQuery({id: props.id.toString()});
    const {connection} = useConnection();
    const anchor_wallet = useAnchorWallet();
    const {publicKey, signTransaction} = useWallet();
    const [loading, setIsLoading] = React.useState<boolean>(false);
    const [isGameEnded, setIsGameEnded] = React.useState<boolean>(false);
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
                    const {wallet_address} = winner;
                    const {percentage} = winner.position;
                    return {wallet_address, percentage};
                });
                console.log(
                    "Wallet addresses and percentages:",
                    walletAddressesAndPercentages,
                );
                const creatorPubKey = new PublicKey(creator);
                if (!props.game_code) {
                    return Error("No game code found");
                }
                const game_code = props.game_code;
                //Hash the gameCode and user's publickey
                const gameCodeBuffer = Buffer.from(game_code);
                const pubkeyBuffer = Buffer.from(creatorPubKey.toString());
                const combinedBuffer = Buffer.concat([gameCodeBuffer, pubkeyBuffer]);
                const hash = crypto
                    .createHash("sha256")
                    .update(combinedBuffer)
                    .digest();
                //we are using  the first six characters as the game_id hash
                const game_id_hash = hash.toString("base64").substring(0, 6);

                if (signTransaction) {
                    console.log("signing transaction");
                    // use async await instead of promise.
                    const response = await sendFundsToPlayers(
                        creatorPubKey,
                        anchor_wallet,
                        connection,
                        game_id_hash,
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
                    setIsGameEnded(true);
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
    const {push} = useRouter();
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
    let content;
    switch (props.status) {
        case Status.created:
            content = <span className="font-medium text-lg md:text-2xl text-nowrap text-ellipsis overflow-hidden">Successfully created <span
                className="text-secondary-600">{props.title}{props.game_code}</span></span>
            break;
        case Status.ongoing:
        case Status.completed:
            content = <span className="font-medium text-lg md:text-2xl text-nowrap text-ellipsis overflow-hidden"><span
                className="text-secondary-600">{props.title}{props.game_code}</span> is in session</span>;
            break
    }
    return (
        <div className="flex items-center justify-between bg-grey-150 md:px-10 px-5 py-6 lg:px-12 lg:py-5">
            {content}
            <div className="flex items-start space-x-3 md:space-x-5 lg:space-x-7 items-center w-auto">
                <button
                    disabled={isLoading}
                    className="text-right font-medium text-xs md:text-base bg-secondary-500 text-white px-4 md:px-6 lg:px-8 py-3 rounded text-nowrap data-wrong:bg-white data-wrong:text-black"
                    onClick={handleClick}
                    data-correct={isGameEnded}
                >
                    {isLoading ? <Spinner/> : CTAs[props.status]}
                </button>
                {Status.ongoing === props.status &&
                    (loading ? (
                        <Spinner/>
                    ) : (
                        <>
                            {isGameEnded ? (
                                <button
                                    className="text-right text-xs md:text-base font-medium bg-secondary-500 text-white px-4 md:px-6 lg:px-8 py-3 rounded text-nowrap"
                                >
                                    Game ended
                                </button>
                            ) : (
                                <button
                                    className="text-right text-xs md:text-base font-medium bg-white text-black px-4 md:px-6 lg:px-8 py-3 rounded text-nowrap"
                                    onClick={onDistributeRewards}
                                >
                                    End Game
                                </button>
                            )}
                        </>
                    ))}
            </div>
        </div>
    );
};
export default CreatedGame;
