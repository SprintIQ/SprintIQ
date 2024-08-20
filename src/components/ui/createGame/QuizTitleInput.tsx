import React from "react";

// Component for the Quiz Title input field
const QuizTitleInput: React.FC<{
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Input Game Title"
    value={value}
    onChange={onChange}
    className="font-inherit relative m-0 flex h-[76px] w-full  max-w-full shrink-0 items-center justify-center bg-transparent text-center text-2xl font-normal leading-[22.53px] text-[#FFFFFF] text-inherit placeholder-[#000000] outline-none placeholder:opacity-50 md:text-[2.5rem]"
  />
);

export default QuizTitleInput;
