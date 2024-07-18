import React, { useState } from "react";
import { createPortal } from "react-dom";
import { toast } from "sonner";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
  });

// Component for setting the correct option
const CorrectOptionInput: React.FC<{
    questionIndex: number;
    options: string[];
   selectedOptionIndex: number | undefined,
   setSelectedOptionIndex: (index: number) => void;
    onChange: (questionIndex: number, value: string) => void;
  }> = ({ questionIndex, options, selectedOptionIndex, setSelectedOptionIndex, onChange }) => {
    const [showOptionsOverlay, setShowOptionsOverlay] = useState<boolean>(false);
    
    //console.log("options", options);
  
    const onClick = () => {
      if (options.length === 1 && options[0] === "") {
        toast("No Option has been added");
      } else {
        setShowOptionsOverlay(true);
      }
    };
  
    const handleOptionSelect = (selectedIndex: number) => {
      setSelectedOptionIndex(selectedIndex);
      onChange(questionIndex, options[selectedIndex]);
      setShowOptionsOverlay(false); // Hide the options overlay after selection
    };
  
    return (
      <div>
        <button
          onClick={onClick}
          className="relative flex w-[180px] items-center justify-center bg-transparent text-[1.25rem] leading-[22.53px] text-secondary-700 outline-none hover:text-[#1FC04D]"
        >
          {/* {value ? value : "Set Correct Option"} */}
          {selectedOptionIndex !== undefined ? (options[selectedOptionIndex] ? options[selectedOptionIndex] : 'select option') : 'select option'}
        </button>
        {showOptionsOverlay &&
          createPortal(
            <div
              className={`fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-gray-500 bg-opacity-50 ${inter.className}`}
            >
              <div className="w-full max-w-md rounded bg-gray-800 p-8 shadow-lg">
                <div className="flex justify-end">
                  <button
                    onClick={() => setShowOptionsOverlay(false)}
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
                  Select the correct option
                </p>
                <div className="flex flex-col items-center">
                  {options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(index)}
                      className="mb-2 w-full rounded-[12px] bg-green-500 px-6 py-2 text-white hover:bg-green-600"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>,
            document.body,
          )}
      </div>
    );
  };

  export default CorrectOptionInput;