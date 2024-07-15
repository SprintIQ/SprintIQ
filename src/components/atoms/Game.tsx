import Spinner from "@src/components/ui/Spinner";
import { api } from "@src/utils/api";
import { Routes } from "@src/utils/constants/constants";
import { useRouter } from "next/router";
import * as React from "react";

import Button from "../ui/Button";
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
  React.useEffect(() => {
    setAnswered(false);
    setCount(-1);
  }, [props.page]);
  React.useEffect(() => {
    void getQuestions({
      game_id: props.gameId,
      page: parseInt(props.page),
    });
  }, [props]);
  const handleAnswered = async () => {
    if (!(data?.current_question?.id && props.gameId)) return;
    const res = await getAnswered({
      game_id: props.gameId,
      question_id: data?.current_question?.id,
    });
    if (res.success && parseInt(props.page) < data?.questions.length) {
      setTimeout(() => {
        void push(
          `/dashboard/game?gameId=${props.gameId}&page=${parseInt(props.page) + 1}`,
        ).then(() => setCount(-1));
      }, 3000);
    }
  };
  React.useEffect(() => {
    if (isLoading) return;
    void handleAnswered();
    const timerId = setInterval(() => {
      const duration = data?.current_question?.duration ?? 0;
      if (duration > 0) {
        setCount(prevCount => {
          return prevCount === -1
            ? duration
            : prevCount > 0
              ? prevCount - 1
              : 0;
        });
      }
    }, 1000);

    return () => clearInterval(timerId); // cleanup on unmount
  }, [data?.current_question, isLoading]);
  React.useEffect(() => {
    if (count === 0) {
      void handleAnswer("", true);
    }
  }, [count]);
  return isLoading ? (
    <section className="grid min-h-screen items-center">
      <Spinner />
    </section>
  ) : (
    <section className="font-inter relative flex flex-col items-start justify-start self-stretch py-4 text-center text-sm text-white">
      {
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        (answers || answered?.success) && (
          <div
            data-wrong={
              answer?.details?.points === 0 || answered?.details?.points === 0
            }
            data-correct={
              (answer?.details?.points ?? 0) > 0 ||
              (answered?.details?.points ?? 0) > 0
            }
            className="data-wrong: fixed inset-0 grid place-content-center bg-black/60 text-7xl font-bold text-red-700 data-correct:text-secondary-700"
          >
            {answered?.success
              ? (answered?.details?.points ?? 0) === 0
                ? `-${answered?.details?.points ?? 0}`
                : `+${answered?.details?.points ?? 0}`
              : (answer?.details?.points ?? 0) === 0
                ? `-${answer?.details?.points ?? 0}`
                : `+${answer?.details?.points ?? 0}`}
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
      <div className="mb-4 flex flex-row items-start justify-center self-stretch px-5 py-0">
        <div className="relative flex flex-row items-start justify-start rounded-full border-[1px] border-solid border-secondary-700 px-9 py-0">
          <div className="relative z-[0] box-border hidden h-[27px] w-[123px] rounded-full border-[1px] border-solid border-secondary-700" />
          <div className="relative z-[1] inline-block rounded-full border-secondary-700 px-8 py-4 leading-[23px]">
            {userDataIsLoading ? "Loading..." : userData?.username}
          </div>
          <div className="absolute bottom-[0px] left-[0px] right-[0px] top-[0px] z-[2] !m-[0] box-border h-full w-full rounded-3xl border-[1px] border-solid border-secondary-700" />
        </div>
      </div>
      <div className="h-full w-full border-y-2 border-secondary-700 px-12 py-4 text-lg">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-2">
            <h1 className="w-20 rounded-full border-2 border-secondary-100 bg-secondary-700 px-3 py-1 text-right">
              {props.page}/{data?.questions.length}
            </h1>
            <span>Score: {data?.score ?? 0}</span>
          </div>
          <span className="flex h-12 w-28 items-center justify-center rounded-full  border border-secondary-100 text-secondary-700">
            {count === -1 ? 0 : count}secs
          </span>
        </div>
      </div>
      <div className="mx-auto w-9/12 py-12">
        <h2 className="text-center text-3xl font-medium">
          {data?.current_question?.question}
        </h2>
        <div className="mx-auto mt-6 flex flex-wrap space-y-4">
          {data?.current_question?.options.map(option => (
            <Option
              data-wrong={
                answer?.details?.option_id === option.id &&
                answer?.details?.points === 0
              }
              data-correct={
                answer?.details?.option_id === option.id &&
                (answer?.details?.points ?? 0) > 0
              }
              key={option.id}
              onClick={() => handleAnswer(option.id)}
              option={option}
              disabled={answers || answered?.success}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Game;
