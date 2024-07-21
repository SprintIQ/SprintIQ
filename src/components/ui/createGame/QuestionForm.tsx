import { type Question } from "@src/provider/QuizContext";
import * as React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RiCloseCircleLine } from "react-icons/ri";

import CorrectOptionInput from "./CorrectOptionInput";
import OptionInput from "./OptionInput";
import QuestionInput from "./QuestionInput";
import TimerInput from "./TimerInput";

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
  handleDurationChange: (
    questionIndex: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  handleRemoveOption: (questionIndex: number, optionIndex: number) => void;
  handleRemoveQuestion: (index: number) => void;
  question: Question;
  index: number;
}

const QuestionForm: React.FC<IQuestionFormProps> = ({
  handleAddOption,
  handleAnswerChange,
  handleDurationChange,
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
      <div className="-ml-20 mt-7 flex w-full max-w-full flex-col items-center justify-start gap-[29px] self-stretch lg:ml-0 lg:flex-row">
        <div className="flex w-full flex-row items-center justify-start">
          <p className="relative self-stretch text-[2rem] leading-[23px]">
            {index + 1}
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
      <div className="mt-4 flex flex-col gap-y-[20px] lg:flex-row lg:items-center">
        <div className="mr-6">
          {question.options.map((option: string, optionIndex: number) => (
            <div key={optionIndex} className="flex items-center">
              <OptionInput
                key={optionIndex}
                value={option}
                onChange={e =>
                  handleOptionChange(index, optionIndex, e, selectedOptionIndex)
                }
              />
              <div
                className="-mt-2 cursor-pointer"
                onClick={() => handleRemoveOption(index, optionIndex)}
              >
                <AiOutlineDelete />
              </div>
            </div>
          ))}
        </div>
        <div className="z-[1] box-border flex w-full flex-1 flex-col justify-between gap-[34.8px] rounded-[1.25rem] border-[1px] border-solid border-[#373737] px-[33px] pb-[26px] pt-[23px] text-[20px] text-[#373737] lg:w-fit lg:flex-row lg:items-center">
          <div className="flex flex-row items-center justify-start hover:text-[#1FC04D]">
            <button onClick={() => handleAddOption(index)}>Add Option</button>
          </div>
          <CorrectOptionInput
            questionIndex={index}
            options={question.options}
            selectedOptionIndex={selectedOptionIndex}
            setSelectedOptionIndex={setSelectedOptionIndex}
            onChange={handleAnswerChange}
          />
          <TimerInput
            value={question.duration}
            onChange={e => handleDurationChange(index, e)}
          />
        </div>
      </div>
    </div>
  );
};
export default QuestionForm;
