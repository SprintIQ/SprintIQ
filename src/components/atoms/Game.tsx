import Spinner from "@src/components/ui/Spinner";
import Timer from "@src/components/ui/Timer";
import {api} from "@src/utils/api";
import Image from "next/image";
import {useRouter} from "next/router";
import * as React from "react";
import {useCallback} from "react";

import Option from "./Option";
import Button from "@src/components/ui/Button";
import {Routes} from "@src/utils/constants/constants";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IGameProps {
    gameId: string;
    page: string;
}

function wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const Game: React.FC<IGameProps> = props => {
    const {
        data,
        isLoading,
        mutateAsync: getQuestions,
    } = api.player.get_questions.useMutation();
    const {mutateAsync, data: answer, isLoading: isAnswering} =
        api.player.answer_question.useMutation();
    const {mutateAsync: getAnswered, data: answered, isLoading: isAnsweredLoading} =
        api.player.get_answered.useMutation();
    const {data: userData, isLoading: userDataIsLoading} =
        api.auth.get_details.useQuery();
    const [selectedOption, setSelectedOption] = React.useState<string>("");
    const {push} = useRouter();

    const totalPoints = data?.score ?? 0;

    React.useEffect(() => {
        void getQuestions({
            game_id: props.gameId,
            page: parseInt(props.page),
        });
    }, [props]);

    const handleAnswer = async (time_elapsed?: boolean) => {
        if (!data) return;
        const res = await mutateAsync({
            game_id: props.gameId,
            question_id: data?.current_question?.id ?? "",
            option_id: selectedOption,
            time_elapsed,
        });
        if (res.success && parseInt(props.page) < data?.questions.length) {
            await wait(5000); // build up suspense for the next question
            void push(
                `/dashboard/game?gameId=${props.gameId}&page=${parseInt(props.page) + 1}`,
            );
            selectedOption && setSelectedOption("");
        }
    };
    const handleAnswered = async () => {
        if (!(data?.current_question?.id && props.gameId)) return;
        const res = await getAnswered({
            game_id: props.gameId,
            question_id: data?.current_question?.id,
        });
        if (res.success && parseInt(props.page) < data?.questions.length) {
            await wait(3000) // wait to display score
            void push(
                `/dashboard/game?gameId=${props.gameId}&page=${parseInt(props.page) + 1}`,
            )
        }
    };
    React.useEffect(() => {
        if (isLoading) return;
        void handleAnswered();
    }, [data?.current_question, isLoading]);

    const answeredPoints = answered?.details?.points ?? 0;
    const answerPoints = answer?.details?.points ?? 0;
    const isAnswerCorrect = useCallback((option_id: string) => answer?.details?.option_id === option_id && answerPoints === 0, [answer?.details?.option_id, answerPoints])
    const isAnswerWrong = useCallback((option_id: string) => answer?.details?.option_id === option_id && answerPoints > 0, [answer?.details?.option_id, answerPoints])

    const alreadyAnsweredDisplay = !answeredPoints
        ? `-${answeredPoints}`
        : `+${answeredPoints}`

    const JustAnsweredScore = answerPoints === 0
        ? `-${answerPoints}`
        : `+${answerPoints}`

    const isAllLoading = isLoading || userDataIsLoading || isAnsweredLoading
    console.log({answered, answer})
    return isAllLoading ? (
        <section className="grid min-h-screen items-center">
            <Spinner/>
        </section>
    ) : (
        <section
            className="font-inter relative flex flex-col items-start justify-start self-stretch px-11 py-4 text-center text-sm">
            {
                (answer?.success || answered?.success) && (
                    <div
                        data-wrong={answerPoints === 0 || answeredPoints === 0}
                        data-correct={answerPoints > 0 || answeredPoints > 0}
                        className="data-wrong: fixed inset-0 grid place-content-center bg-black/60 text-7xl font-bold text-red-700 data-correct:text-secondary-700"
                    >
                        {answered?.success
                            ? alreadyAnsweredDisplay
                            : JustAnsweredScore}
                        {parseInt(props.page) === data?.questions.length && (
                            <Button
                                text="Finish"
                                className="mx-auto mt-4 px-6 py-2 text-lg text-white"
                                onClick={() =>
                                    push(`/dashboard/${Routes.REWARD}?gameId=${props.gameId}`)
                                }
                            />
                        )}
                    </div>
                )
            }
            <nav className="flex w-full items-center justify-between  text-base font-semibold">
                <div className="flex items-center space-x-4">
                    <Image
                        src={userData?.avatar_url!}
                        width={300}
                        height={300}
                        alt={userData?.username ?? "User"}
                        className="h-11 w-11 rounded-full"
                    />
                    <span className={"text-secondary-500"}>{userData?.username}</span>
                </div>
                <span>
          {totalPoints} point{totalPoints > 0 && "s"}
        </span>
            </nav>
            <div className="mt-9 flex w-full items-center justify-between  text-base font-semibold">
        <span>
          Question {props.page}/{data?.questions.length}
        </span>
                <Timer
                    expiryTimeOffset={data?.current_question?.duration ?? 0}
                    onExpire={() => handleAnswer(true)}
                />
            </div>
            <div className="mt-16 w-full px-4 py-3 shadow-md">
                <div className="bg bg-grey-500 flex w-full items-center justify-center px-4 py-8 text-center">
          <span className="text-2xl font-bold">
            {data?.current_question?.question}
          </span>
                </div>
                <div className="mx-auto mt-6 flex flex-wrap space-y-4">
                    {data?.current_question?.options.map(option => (
                        <Option
                            data-wrong={isAnswerWrong(option.id)}
                            data-correct={isAnswerCorrect(option.id)}
                            data-selected={selectedOption === option.id}
                            key={option.id}
                            onClick={() => setSelectedOption(option.id)}
                            option={option}
                            disabled={answered?.success || isAnswering}
                        />
                    ))}
                </div>
            </div>
            <button
                onClick={() => handleAnswer()}
                className="bg-secondary-500 ml-auto mt-4 rounded px-8 py-3 text-white lg:py-4"
            >
                Next
            </button>
        </section>
    );
};
export default Game;
