import ButtonPrimary from "@src/components/button-primary";
import React, { useId } from "react";

import { type Question } from "../../../provider/QuizContext";
import QuestionForm from "./QuestionForm";
import QuizTitleInput from "./QuizTitleInput";

interface QuizFormProps {
  quizTitleGlobal: string;
  questionsGlobal: Array<Question>;
  handleQuizTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  addQuestion: () => void;
  handleRemoveOption: (questionIndex: number, optionIndex: number) => void;
  handleRemoveQuestion: (index: number) => void;
  onContinue: () => void;
}

const QuizForm: React.FC<QuizFormProps> = ({
  quizTitleGlobal,
  questionsGlobal,
  handleQuizTitleChange,
  handleQuestionChange,
  handleOptionChange,
  handleAddOption,
  handleAnswerChange,
  handleDurationChange,
  addQuestion,
  handleRemoveOption,
  handleRemoveQuestion,
  onContinue,
}) => {
  const id = useId();
  return (
    <div className="w-full">
      <div className="flex w-full max-w-full flex-col items-start justify-start">
        <div className="mb-4 box-border flex w-full max-w-full flex-row items-start justify-center self-stretch py-0 pl-5 lg:pr-[21px]">
          <QuizTitleInput
            value={quizTitleGlobal}
            onChange={handleQuizTitleChange}
          />
        </div>
        <div className="relative box-border h-px self-stretch border-t-[1px] border-solid border-[#373737]" />
      </div>
      <div className="font-inter box-border flex w-full max-w-full flex-row items-start px-0 pt-0 text-center text-white">
        <div className="flex w-full max-w-full flex-col justify-start">
          {questionsGlobal.map((question, index) => (
            <QuestionForm
              question={question}
              handleAddOption={handleAddOption}
              handleAnswerChange={handleAnswerChange}
              handleDurationChange={handleDurationChange}
              handleOptionChange={handleOptionChange}
              handleQuestionChange={handleQuestionChange}
              handleRemoveOption={handleRemoveOption}
              handleRemoveQuestion={handleRemoveQuestion}
              index={index}
              key={`${index}-${id}`}
            />
          ))}
        </div>
      </div>
      <ButtonPrimary
        addQuestion="Add Question"
        onButtonPrimaryClick={addQuestion}
        onButtonPrimary1Click={onContinue}
      />
    </div>
  );
};

export default QuizForm;
