import { api } from "@src/utils/api";
import { useRouter } from "next/router";
import * as React from "react";

import Option from "./Option";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IGameProps {
  gameId: string;
  page: string;
}

const Game: React.FC<IGameProps> = props => {
  const { data, isLoading } = api.player.get_questions.useQuery({
    game_id: props.gameId,
    page: parseInt(props.page),
  });
  const { mutateAsync } = api.player.answer_question.useMutation();

  const [count, setCount] = React.useState(-1);
  React.useEffect(() => {
    const timerId = setInterval(() => {
      const duration = (data?.current_question?.duration ?? 0) / 1000;
      if (duration > 0) {
        setCount(prevCount =>
          prevCount === -1 ? duration : prevCount > 0 ? prevCount - 1 : 0,
        );
      }
    }, 1000);

    return () => clearInterval(timerId); // cleanup on unmount
  }, [data?.current_question]);
  const handleAnwser = () => {
    mutateAsync({
      game_id: props.gameId,
      question_id: data?.current_question?.id,
    });
  };
  return isLoading ? (
    <section className="grid items-center text-center">
      <span>Loading.....</span>
    </section>
  ) : (
    <section className="py-4">
      <div className="h-full w-full border-y-2 border-secondary-700 px-12 py-4 text-lg">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-2">
            <h1 className="w-36 rounded-full border-2 border-secondary-100 bg-secondary-700 px-3 py-1 text-right">
              {props.page}/{data?.questions.length}
            </h1>
            <span>Score: {data?.score ?? 0}</span>
          </div>
          <span className="flex h-12 w-28 items-center justify-center rounded-full  border border-secondary-100 text-secondary-700">
            {count === -1 ? 0 : count}secs
          </span>
        </div>
      </div>
      <div className="mx-auto w-9/12 px-10 py-16">
        <h2 className="text-center text-3xl font-medium">
          {data?.current_question?.question}
        </h2>
        <div className="mx-auto mt-6 flex w-10/12 flex-col space-y-6">
          {data?.current_question?.options.map(option => (
            <Option data-wrong="true" key={option.id} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Game;
