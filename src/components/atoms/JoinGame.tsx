import {api} from "@src/utils/api";
import {useRouter} from "next/router";
import * as React from "react";
import {toast} from "sonner";

import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import Image from "next/image";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@src/components/ui/input-otp";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IJoinGameProps {
}

const JoinGame: React.FC<IJoinGameProps> = props => {
    const [token, setToken] = React.useState<string>("");
    const {mutateAsync, isLoading} = api.player.join_game.useMutation();
    const createGame = api.game.full_game_create.useMutation();
    const {push} = useRouter();
    const handleContinue = async () => {
        if (!token) return;
        const res = await mutateAsync({
            game_code: token,
        })
        if (res.success) {
            void push(`/dashboard/game?gameId=${res.game?.id}&page=1`);
        } else {
            toast(res.error);
        }
    };
    return (
        <section className="grid h-full min-h-screen w-full place-content-center text-lg">
            <div className="mx-auto flex w-full flex-col items-center space-y-8">
                <div className="bg-black py-4 px-8 rounded-full text-white flex space-x-3 items-center">
                    <Image
                        src="/game/indicator.svg"
                        alt="Inicator"
                        width={50}
                        height={50}
                        className="h-6 w-auto"
                    />
                    <h2 className="font-bold">Game Token</h2>
                </div>
                <InputOTP
                    maxLength={6}
                    value={token}
                    onChange={(value) => setToken(value)}
                >
                    <InputOTPGroup>
                        <InputOTPSlot index={0}/>
                        <InputOTPSlot index={1}/>
                        <InputOTPSlot index={2}/>
                        <InputOTPSlot index={3}/>
                        <InputOTPSlot index={4}/>
                        <InputOTPSlot index={5}/>
                    </InputOTPGroup>
                </InputOTP>
                <p>Input 6 digit game code</p>
                {isLoading ? (
                    <Spinner/>
                ) : (
                    <Button data-true={token?.length < 6} className="data-true:bg-grey-800 rounded" text={"Continue"}
                            onClick={handleContinue}/>
                )}
            </div>
        </section>
    );
};
export default JoinGame;
