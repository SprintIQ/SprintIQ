import { api } from "@src/utils/api";
import { useRouter } from "next/router";
import * as React from "react";

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
  const [count, setCount] = React.useState(-1);
  React.useEffect(() => {
    const timerId = setInterval(() => {
      const duration = (data?.current_question?.duration ?? 0) / 1000;
      setCount(prevCount =>
        prevCount === -1 ? duration : prevCount > 0 ? prevCount - 1 : 0,
      );
    }, 1000);

    return () => clearInterval(timerId); // cleanup on unmount
  }, [data?.current_question]);

  return (
    <section className="py-4">
      <div className="h-full w-full border-y-2 border-secondary-700 px-12 py-4 text-lg">
        <div className="flex justify-between">
          <div className="flex flex-col space-y-2">
            <h1 className="border-secondary-100 w-36 rounded-full border-2 bg-secondary-700 px-3 py-1 text-right">
              {props.page}/{data?.questions.length}
            </h1>
            <span>Score: {data?.score ?? 0}</span>
          </div>
          <span className="border-secondary-100 flex h-12 w-28 items-center justify-center  rounded-full border text-secondary-700">
            {count}secs
          </span>
        </div>
      </div>
    </section>
  );
};
export default Game;
