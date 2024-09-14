import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTimes } from '@fortawesome/free-solid-svg-icons';

interface TimerInputProps {
  value: number; // Duration in seconds
  onChange: (seconds: number) => void;
}

const TimerInput: React.FC<TimerInputProps> = ({ value, onChange }) => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [minutes, setMinutes] = useState<number>(Math.floor(value / 60));
  const [seconds, setSeconds] = useState<number>(value % 60);

  // Convert minutes and seconds to total seconds
  const handleOverlayDoneClick = () => {
    const totalSeconds = minutes * 60 + seconds;
    onChange(totalSeconds); // Pass totalSeconds directly
    setShowOverlay(false); // Hide the timer overlay
  };

  // Format time for display
  const formatTime = (min: number, sec: number): string => {
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <button
        className="bg-secondary-500 text-white px-4 py-2 rounded-md flex items-center space-x-2"
        onClick={() => setShowOverlay(true)}
      >
        <FontAwesomeIcon icon={faClock} />
        <span>{formatTime(minutes, seconds)}</span>
      </button>
      {showOverlay &&
        createPortal(
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-[#E7E4E4] py-10 px-12 rounded-md shadow-lg w-full max-w-sm relative">
              <h2 className="text-s font-normal mb-4 text-center">
                Set timer duration for each question
              </h2>
              <button
                onClick={() => setShowOverlay(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>
              <div className="bg-white p-6 rounded-md shadow-inner">
                <div className="flex justify-center mb-6">
                  <input
                    type="text"
                    min="0"
                    value={minutes}
                    onChange={(e) => setMinutes(Number(e.target.value))}
                    className="bg-white text-green-600 text-6xl font-bold text-center w-24 border-0 outline-none"
                    placeholder="MM"
                  />
                  <span className="text-6xl font-bold mx-2 text-green-600">:</span>
                  <input
                    type="text"
                    min="0"
                    max="59"
                    value={seconds}
                    onChange={(e) => setSeconds(Number(e.target.value))}
                    className="bg-white text-green-600 text-6xl font-bold text-center w-24 border-0 outline-none"
                    placeholder="SS"
                  />
                </div>
                <div className="border-t border-gray-300 pt-4 flex justify-center">
                  <button
                    onClick={handleOverlayDoneClick}
                    className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default TimerInput;


