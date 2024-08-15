import * as React from "react";
import { useTimer } from "react-timer-hook";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITimerProps {
  expiryTimeOffset: number;
  onExpire?: () => void;
}

const Timer: React.FC<ITimerProps> = ({ expiryTimeOffset, onExpire }) => {
  const { seconds, minutes, hours, totalSeconds } = useTimer({
    expiryTimestamp: new Date(Date.now() + expiryTimeOffset),
    onExpire,
  });
  return (
    <span className="text-secondary-500 text-xl font-bold">
      {hours && (hours < 10 ? `0${hours}` : hours) + ":"}
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds} sec
      {totalSeconds > 1 && "s"}
    </span>
  );
};
export default Timer;
