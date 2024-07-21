import { Inter } from "next/font/google";
import React, { useState } from "react";
import { createPortal } from "react-dom";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Component for setting the timer
const TimerInput: React.FC<{
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, onChange }) => {
  const [showTimerOverlay, setShowTimerOverlay] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<string>("00:00:00");

  // Function to convert time string (HH:MM:SS) to seconds
  const timeStringToSeconds = (timeString: string): number => {
    const [hours, minutes, seconds] = timeString.split(":").map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  };

  // Function to handle overlay done click
  const handleOverlayDoneClick = () => {
    const syntheticEvent = {
      target: { value: timeStringToSeconds(selectedTime) },
    };

    onChange(syntheticEvent as unknown as React.ChangeEvent<HTMLInputElement>); // Update the timer value in the parent component
    setShowTimerOverlay(false); // Hide the timer overlay
  };

  return (
    <div className="w-fit">
      <input
        type="text"
        placeholder="Set Timer"
        value={value.toString() + "secs"} // Convert number to string for input value
        onChange={onChange}
        onFocus={() => setShowTimerOverlay(true)} // Show the timer overlay when input is focused
        className="relative flex w-auto items-center justify-center bg-transparent text-[1.25rem] leading-[22.53px] text-secondary-700 placeholder-[#373737] outline-none hover:text-[#1FC04D] hover:placeholder-[#1FC04D]"
      />
      {showTimerOverlay &&
        createPortal(
          <div
            className={`fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-500 bg-opacity-50 ${inter.className}`}
          >
            <div className="w-full max-w-md rounded p-8 shadow-lg [background:linear-gradient(180deg,_#0e2615,_#0f0f0f)]">
              <div className="flex justify-end">
                <button
                  onClick={() => setShowTimerOverlay(false)}
                  className="text-gray-500 hover:text-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <p className="mb-4 text-center text-[16px] text-[#D9D9D9] ">
                Set up a timer duration for each question
              </p>
              <div className="box-border flex flex-col items-center justify-center rounded-[1.25rem] border-[1px] border-solid border-[#373737] px-[33px] pb-[26px] pt-[23px] ">
                <div className="flex justify-center">
                  <input
                    type="text"
                    value={selectedTime}
                    onChange={e => setSelectedTime(e.target.value)}
                    className="mr-2 bg-transparent px-2 py-1 text-center text-[70px] font-bold text-[#1FC04D] outline-none "
                  />
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={handleOverlayDoneClick}
                    className="rounded-[12px] bg-green-500 px-6 py-2 text-white hover:bg-green-600"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default TimerInput;
