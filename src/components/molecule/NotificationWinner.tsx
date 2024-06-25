import type { NextPage } from "next";
import { useCallback } from "react";

export type NotificationWinnerType = {
  className?: string;
};

const NotificationWinner: NextPage<NotificationWinnerType> = ({
  className = "",
}) => {
  const onCongrats = useCallback(() => {
    // Please sync the "Notification"
  }, []);

  return (
    <div className="font-inter flex h-screen flex-col items-start justify-start gap-4 bg-black px-6 pb-0 pt-16 text-center leading-normal text-white">
      <div className="flex w-full flex-row items-start justify-start border-b border-gray-700 px-1.5 py-2">
        <div
          className="relative flex-1 cursor-pointer leading-6"
          onClick={onCongrats}
        >
          Congratulations! You just claimed second position for Game 43700
        </div>
      </div>

      <div className="flex flex-row items-start justify-start pb-2 pl-4 pr-4 pt-4">
        <div className="relative cursor-pointer leading-6" onClick={onCongrats}>
          You have received your reward for Game 43700
        </div>
      </div>

      <div className="flex flex-col items-start justify-start gap-4 pt-4 text-center">
        <div className="flex flex-row items-start justify-start border-b border-gray-700 px-4 py-2">
          <div className="relative leading-6 ">
            Thank you for joining Game 43700
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationWinner;
