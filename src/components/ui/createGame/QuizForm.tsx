import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { toast, Toaster } from "sonner";
import { useQuizContext } from "../../../provider/QuizContext";
import QuizTitleInput from "./QuizTitleInput";
import QuestionInput from "./QuestionInput";
import OptionInput from "./OptionInput";
import CorrectOptionInput from "./CorrectOptionInput";
import TimerInput from "./TimerInput";
import { RiCloseCircleLine } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import ButtonPrimary from "@src/components/button-primary";


interface QuizFormProps {
  quizTitleGlobal: string;
  questionsGlobal: any[];
  handleQuizTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleQuestionChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOptionChange: (questionIndex: number, optionIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddOption: (questionIndex: number) => void;
  handleAnswerChange: (questionIndex: number, value: string) => void;
  handleDurationChange: (questionIndex: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  addQuestion: () => void;
  handleRemoveOption: (questionIndex: number, optionIndex: number) => void;
  handleRemoveQuestion: (index: number) => void;
  selectedOptionIndex: number | undefined;
  setSelectedOptionIndex: (index: number | undefined) => void;
  onContinue: () => void;
}

const QuizForm:  React.FC<QuizFormProps> = ({
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
  selectedOptionIndex,
  setSelectedOptionIndex,
  onContinue,
}) => {  
    return (
      <div>
      <div className="flex w-full max-w-full flex-col items-start justify-start lg:w-[1089px]">
        <div className="mb-4 box-border flex max-w-full flex-row items-start justify-center self-stretch py-0 pl-5 lg:pr-[21px]">
          <QuizTitleInput value={quizTitleGlobal} onChange={handleQuizTitleChange} />
        </div>
        <div className="relative box-border h-px self-stretch border-t-[1px] border-solid border-[#373737]" />
      </div>
      <div className="font-inter box-border flex w-full max-w-full flex-row items-start px-0 pt-0 text-center text-white">
        <div className="flex w-full max-w-full flex-col justify-start">
          {questionsGlobal.map((question, index) => (
            <div key={index}>
              <div className="-ml-20 mt-7 flex w-full max-w-full flex-col items-center justify-start gap-[29px] self-stretch lg:ml-0 lg:flex-row">
                <div className="flex w-full flex-row items-center justify-start">
                  <p className="relative self-stretch text-[2rem] leading-[23px]">{index + 1}</p>
                  <QuestionInput value={question.question} onChange={(e) => handleQuestionChange(index, e)} />
                </div>
                <div className="flex w-1/2 flex-row items-center justify-start">
                  <div onClick={() => handleRemoveQuestion(index)} className="-mt-3 ml-2">
                    <RiCloseCircleLine className="cursor-pointer" size={40} />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-y-[20px] lg:flex-row lg:items-center">
                <div className="mr-6">
                  {question.options.map((option:any, optionIndex:any) => (
                    <div key={optionIndex} className="flex items-center">
                      <OptionInput
                        key={optionIndex}
                        value={option}
                        onChange={(e) => handleOptionChange(index, optionIndex, e)}
                      />
                      <div className="-mt-2 cursor-pointer" onClick={() => handleRemoveOption(index, optionIndex)}>
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
                  <TimerInput value={question.duration} onChange={(e) => handleDurationChange(index, e)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ButtonPrimary addQuestion="Add Question" onButtonPrimaryClick={addQuestion} onButtonPrimary1Click={onContinue} />
    </div>
  );
  };
  
  export default QuizForm;