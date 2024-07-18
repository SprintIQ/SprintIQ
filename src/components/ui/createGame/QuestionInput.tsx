import React from "react";

// Component for an individual question
const QuestionInput: React.FC<{
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }> = ({ value, onChange }) => (
    <input
      type="text"
      placeholder="Question"
      value={value}
      onChange={onChange}
      className="relative box-border w-full border-b-[1px] border-solid border-[#373737] bg-transparent text-center text-[25px] outline-none"
    />
  );

  export default QuestionInput;