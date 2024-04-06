import { api } from "@src/utils/api";
import { useRouter } from "next/router";
import * as React from "react";
import { toast } from "sonner";

import Button from "../ui/Button";
import Input from "../ui/Input";
import Spinner from "../ui/Spinner";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IJoinGameProps {}

const JoinGame: React.FC<IJoinGameProps> = props => {
  const [token, setToken] = React.useState<string>("");
  const { mutateAsync, isLoading } = api.player.join_game.useMutation();
  const createGame = api.game.full_game_create.useMutation();
  const { push } = useRouter();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      (!!parseInt(e.target.value) && e.target.value.length <= 6) ||
      e.target.value.length == 0
    ) {
      setToken(e.target.value);
    }
  };
  const handleContinue = () => {
    void mutateAsync({
      game_code: token,
    }).then(res => {
      console.log(res);
      if (res.success) {
        void push(`/dashboard/game?gameId=${res.game?.id}&page=1`);
      } else {
        toast(res.error);
      }
    });
  };
  // React.useEffect(() => {
  //   void createGame
  //     .mutateAsync({
  //       title: "Test Game",
  //       description: "Test Game",
  //       game_code: "404044",
  //       reward: 100,
  //       percentages: [
  //         {
  //           position: 1,
  //           percentage: 45,
  //         },
  //         {
  //           position: 2,
  //           percentage: 30,
  //         },
  //         {
  //           position: 3,
  //           percentage: 25,
  //         },
  //       ],
  //       questions: [
  //         {
  //           type: "text",
  //           question: "What is teh point of this?",
  //           description: "This is a test",
  //           answer: "No",
  //           points: 20,
  //           duration: 300000,
  //           options: ["Yes", "No", "Maybe"],
  //         },
  //         {
  //           type: "text",
  //           question: "What is teh point of this1?",
  //           description: "This is a test",
  //           answer: "No",
  //           points: 20,
  //           duration: 300000,
  //           options: ["Yes", "No", "Maybe"],
  //         },
  //         {
  //           type: "text",
  //           question: "What is teh point of this2?",
  //           description: "This is a test",
  //           answer: "No",
  //           points: 20,
  //           duration: 300000,
  //           options: ["Yes", "No", "Maybe"],
  //         },
  //         {
  //           type: "text",
  //           question: "What is teh point of this3?",
  //           description: "This is a test",
  //           answer: "No",
  //           points: 20,
  //           duration: 300000,
  //           options: ["Yes", "No", "Maybe"],
  //         },
  //         {
  //           type: "text",
  //           question: "What is teh point of this4?",
  //           description: "This is a test",
  //           answer: "No",
  //           points: 20,
  //           duration: 300000,
  //           options: ["Yes", "No", "Maybe"],
  //         },
  //         {
  //           type: "text",
  //           question: "What is teh point of this5?",
  //           description: "This is a test",
  //           answer: "No",
  //           points: 20,
  //           duration: 300000,
  //           options: ["Yes", "No", "Maybe"],
  //         },
  //         {
  //           type: "text",
  //           question: "What is teh point of this6?",
  //           description: "This is a test",
  //           answer: "No",
  //           points: 20,
  //           duration: 300000,
  //           options: ["Yes", "No", "Maybe"],
  //         },
  //         {
  //           type: "text",
  //           question: "What is teh point of this7?",
  //           description: "This is a test",
  //           answer: "No",
  //           points: 20,
  //           duration: 300000,
  //           options: ["Yes", "No", "Maybe"],
  //         },
  //         {
  //           type: "text",
  //           question: "What is teh point of this8?",
  //           description: "This is a test",
  //           answer: "No",
  //           points: 20,
  //           duration: 300000,
  //           options: ["Yes", "No", "Maybe"],
  //         },
  //       ],
  //     })
  //     .then(console.log);
  // }, []);
  return (
    <section className="grid h-full min-h-screen w-full place-content-center text-lg">
      <div className="mx-auto flex w-full flex-col items-center space-y-4">
        <h2 className="text-2xl">Game Token</h2>
        <Input value={token} onChange={handleInput} className="text-center" />
        <p>Input 6 digit game code</p>
        {isLoading ? (
          <Spinner />
        ) : (
          <Button text="Continue" onClick={handleContinue} />
        )}
      </div>
    </section>
  );
};
export default JoinGame;
