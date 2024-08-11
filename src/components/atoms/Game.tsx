import Button from "@src/components/ui/Button";
import Spinner from "@src/components/ui/Spinner";
import Timer from "@src/components/ui/Timer";
import { api } from "@src/utils/api";
import Image from "next/image";
import { useRouter } from "next/router";
import * as React from "react";

import Option from "./Option";
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IGameProps {
  gameId: string;
  page: string;
}

const Game: React.FC<IGameProps> = props => {
  const {
    data,
    isLoading,
    mutateAsync: getQuestions,
  } = api.player.get_questions.useMutation();
  const { mutateAsync, data: answer } =
    api.player.answer_question.useMutation();
  const { mutateAsync: getAnswered, data: answered } =
    api.player.get_answered.useMutation();
  const { data: userData, isLoading: userDataIsLoading } =
    api.auth.get_details.useQuery();
  const [count, setCount] = React.useState(-1);
  const [answers, setAnswered] = React.useState(false);
  const { push } = useRouter();
  const totalPoints = data?.score ?? 0;
  React.useEffect(() => {
    void getQuestions({
      game_id: props.gameId,
      page: parseInt(props.page),
    });
  }, [props]);
  const answeredPoints = answered?.details?.points ?? 0;
  const answerPoints = answer?.details?.points ?? 0;
  const handleAnswer = async (option_id: string, time_elapsed?: boolean) => {
    if (!data) return;
    const res = await mutateAsync({
      game_id: props.gameId,
      question_id: data?.current_question?.id ?? "",
      option_id,
      time_elapsed,
    });
    setTimeout(() => {
      setAnswered(res.success);
      // add a little delay before moving to the next question
    }, 2000);
    if (res.success && parseInt(props.page) < data?.questions.length) {
      setTimeout(() => {
        void push(
          `/dashboard/game?gameId=${props.gameId}&page=${parseInt(props.page) + 1}`,
        );
      }, 5000);
    }
  };
  return isLoading || userDataIsLoading ? (
    <section className="grid min-h-screen items-center">
      <Spinner />
    </section>
  ) : (
    <section className="font-inter relative flex flex-col items-start justify-start self-stretch px-11 py-4 text-center text-sm">
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
          {totalPoints} point {totalPoints > 0 && "s"}
        </span>
      </nav>
      <div className="mt-9 flex w-full items-center justify-between  text-base font-semibold">
        <span>
          Question {props.page}/{data?.questions.length}
        </span>
        <Timer
          expiryTimeOffset={data?.current_question?.duration ?? 0}
          onExpire={() => setAnswered(true)}
        />
      </div>
      <div className="mt-16 w-full px-4 py-3 shadow-md">
        <div className="bg bg-grey-500 flex w-full items-center justify-center px-4 py-8 text-center">
          <span className="text-2xl font-bold">
            Who is the Superteam Nigeria Lead?
          </span>
        </div>
        <div className="mx-auto mt-6 flex flex-wrap space-y-4">
          {data?.current_question?.options.map(option => (
            <Option
              data-wrong={
                answer?.details?.option_id === option.id && answerPoints === 0
              }
              data-correct={
                answer?.details?.option_id === option.id && answerPoints > 0
              }
              key={option.id}
              onClick={() => handleAnswer(option.id)}
              option={option}
              disabled={answers || answered?.success}
            />
          ))}
        </div>
      </div>
      <button className="bg-secondary-500 ml-auto mt-4 rounded px-8 py-3 text-white lg:py-4">
        Next
      </button>
    </section>
  );
};
export default Game;
