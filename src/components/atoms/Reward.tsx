import {type Winners} from "@src/server/api/routers/player";
import {api} from "@src/utils/api";
import * as React from "react";
import Winner from "@src/components/molecule/winner";
import Loser from "@src/components/molecule/Loser";
import ResultIncoming from "@src/components/molecule/ResultIncoming";

export interface IRewardProps {
    gameId?: string;
}

const Reward: React.FC<IRewardProps> = props => {
    const [gameEnded, setEnded] = React.useState<boolean>(false);
    const [isWinner, setWinner] = React.useState<boolean>(false);
    const {data, isLoading} = api.auth.get_details.useQuery();
    const [position, setPosition] = React.useState<number>(0);
    const [points, setPoints] = React.useState<number>(0);
    const {data: userData, isLoading: userDataIsLoading} =
        api.auth.get_details.useQuery();
    const getGame = api.game.get_game.useQuery({id: props.gameId ?? ""});
    const handleWinnerCheck = (winners: Array<Winners>) => {
        const index = winners.findIndex(
            winner => winner.wallet_address === data?.wallet_address,
        );
        if (index !== -1) {
            setPosition(index + 1);
            setPoints(winners[index]._sum.points || 0);
        }
        return winners.some(
            winner => winner.wallet_address === data?.wallet_address,
        );
    };
    const {data: winners} = api.player.game_result.useQuery(
        {
            game_id: props.gameId ?? "",
        },
        {refetchInterval: 5000},
    );
    React.useEffect(() => {
        if (winners?.ended) {
            setEnded(true);
            if (winners.data) {
                setWinner(handleWinnerCheck(winners.data));
            }
        }
    }, [winners]);

    let content;
    if ((!gameEnded || isLoading)) {
        content = (
            <ResultIncoming/>
        );
    } else if (gameEnded && isWinner) {
        content = (
            <Winner gameId={props?.gameId} avatar={userData?.avatar_url} position={position} points={points}/>
        );
    } else if (gameEnded && !isWinner) {
        content = (
            <Loser gameId={props?.gameId} avatar={userData?.avatar_url}/>
        );
    }
    return (
        <section className="relative grid min-h-screen place-content-center overflow-hidden w-full">
            {content}
        </section>
    );
};
export default Reward;
