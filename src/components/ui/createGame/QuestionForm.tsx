import { type Question } from "@src/provider/QuizContext";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RiCloseCircleLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import QuestionInput from "./QuestionInput";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IQuestionFormProps {
  handleQuestionChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  handleOptionChange: (
    questionIndex: number,
    optionIndex: number,
    e: React.ChangeEvent<HTMLInputElement>,
    selectedOptionIndex?: number,
  ) => void;
  handleAddOption: (questionIndex: number) => void;
  handleAnswerChange: (questionIndex: number, value: string) => void;
  handleRemoveOption: (questionIndex: number, optionIndex: number) => void;
  handleRemoveQuestion: (index: number) => void;
  question: Question;
  index: number;
}

const QuestionForm: React.FC<IQuestionFormProps> = ({
  handleAddOption,
  handleAnswerChange,
  handleOptionChange,
  handleQuestionChange,
  handleRemoveOption,
  handleRemoveQuestion,
  question,
  index,
}) => {
  const [selectedOptionIndex, setSelectedOptionIndex] =
    React.useState<number>();
  return (
    <div>
      <div className="ml-1 mt-7 text-[#000000] flex w-full max-w-full flex-row  justify-start gap-[29px] self-stretch">
        <div className="flex w-full flex-col ">
          <p className="relative self-stretch text-[1.2rem] leading-[23px]">
            Question text
          </p>
          <QuestionInput
            value={question.question}
            onChange={e => handleQuestionChange(index, e)}
          />
        </div>
        <div className="flex w-fit flex-row items-center justify-start">
          <div
            onClick={() => handleRemoveQuestion(index)}
            className="-mt-3 ml-2"
          >
            <RiCloseCircleLine className="cursor-pointer" size={40} />
          </div>
        </div>
      </div>
      <div className="ml:1 mt-4 text-[#000000]  flex flex-col gap-y-[20px] ">
        <p className="relative self-stretch text-[1rem] leading-[23px]">
          Question options
        </p>
        {question.options.map((option: string, optionIndex: number) => (
          <div key={optionIndex} className="flex items-center gap-4  ">
            <input
              type="text"
              placeholder=""
              value={option}
              onChange={e => handleOptionChange(index, optionIndex, e)}
              className="w-2/3 p-2 border border-gray-300 rounded"
            />
            <div className=" flex flex-row " >
              <input
                type="checkbox"
                checked={selectedOptionIndex === optionIndex}
                onChange={() => {
                  setSelectedOptionIndex(optionIndex);
                  handleAnswerChange(index, option);
                }}
                className="cursor-pointer w-6 h-6"
              />
              <p className="relative self-stretch text-[0.9rem] font-light leading-[23px] ml-2 ">
                Correct
              </p>
            </div>
            <button
              onClick={() => handleRemoveOption(index, optionIndex)}
              className="text-red-500 flex items-center gap-1 border-[1px] rounded-md border-red-500 p-2 "
            >
              <AiOutlineDelete />
              Remove
            </button>
          </div>
        ))}

        <button
          onClick={() => handleAddOption(index)}
          className=" bg-transparent text-green-500 px-4 py-2   flex items-center gap-2"
        >
          Add Option
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};
export default QuestionForm;
