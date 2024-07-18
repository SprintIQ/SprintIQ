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


const QuizForm: React.FC = () => {
    const router = useRouter();
    const { quizTitleGlobal, setQuizTitleGlobal, questionsGlobal, setQuestionsGlobal } = useQuizContext();
  
    const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | undefined>();

    const handleQuizTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuizTitleGlobal(e.target.value);
    };
  
    const handleQuestionChange = (
      index: number,
      e: React.ChangeEvent<HTMLInputElement>,
    ) => {
      const newQuestions = [...questionsGlobal];
      newQuestions[index].question = e.target.value;
      setQuestionsGlobal(newQuestions);
    };
  
    const handleOptionChange = (
      questionIndex: number,
      optionIndex: number,
      e: React.ChangeEvent<HTMLInputElement>,
    ) => {
      const newQuestions = [...questionsGlobal];
      newQuestions[questionIndex].options[optionIndex] = e.target.value;
      setQuestionsGlobal(newQuestions);
      if (optionIndex === selectedOptionIndex) {
        handleAnswerChange(questionIndex, newQuestions[questionIndex].options[selectedOptionIndex] );
      }
    };
  
    const handleAddOption = (questionIndex: number) => {
      const newQuestions = [...questionsGlobal];
      newQuestions[questionIndex].options.push("");
      setQuestionsGlobal(newQuestions);
    };
  
    const handleAnswerChange = (questionIndex: number, value: string) => {
      const newQuestions = [...questionsGlobal];
      newQuestions[questionIndex].answer = value;
      setQuestionsGlobal(newQuestions);
    };
  
    const handleDurationChange = (
      questionIndex: number,
      e: React.ChangeEvent<HTMLInputElement>,
    ) => {
      const newQuestions = [...questionsGlobal];
      newQuestions[questionIndex].duration = Number(e.target.value);
      setQuestionsGlobal(newQuestions);
    };
  
    const addQuestion = () => {
      setQuestionsGlobal([
        ...questionsGlobal,
        {
          question: "",
          type: "text",
          options: [""],
          answer: "",
          points: 0,
          duration: 0,
        },
      ]);
    };

    const handleRemoveOption = (questionIndex: number, optionIndex: number) => {
        setQuestionsGlobal(prevQuestions => {
          const updatedQuestions = [...prevQuestions];
          updatedQuestions[questionIndex].options.splice(optionIndex, 1); // Remove the option at the specified index
          return updatedQuestions;
        });
      };

    const handleRemoveQuestion = (index: number) => {
        setQuestionsGlobal(prevQuestions => {
          const updatedQuestions = [...prevQuestions];
          updatedQuestions.splice(index, 1); // Remove the question at the specified index
          return updatedQuestions;
        });
      };

    const onContinue = useCallback(() => {
        if (
          quizTitleGlobal.trim() === "" ||
          questionsGlobal.some(q => q.question.trim() === "")
        ) {
          // Show an alert error if either quizTitle or any question is empty
          toast(
            "Please enter a quiz title and fill in all questions before continuing.",
          );
        } else {
          // Proceed to the next page if quizTitle and questions are not empty
          setQuizTitleGlobal(quizTitleGlobal);
          setQuestionsGlobal(questionsGlobal);
          void router.push("/dashboard/add-reward");
        }
      }, [quizTitleGlobal, questionsGlobal, setQuizTitleGlobal, setQuestionsGlobal, router]);

       //console.log("This are the questions:", questionsGlobal);
  
    return (
      <div>
            <div className=" flex w-full max-w-full flex-col items-start justify-start  lg:w-[1089px]">
                <div className="mb-4 box-border flex max-w-full flex-row items-start justify-center self-stretch py-0 pl-5 lg:pr-[21px] ">
                    <QuizTitleInput value={quizTitleGlobal} onChange={handleQuizTitleChange} />
                </div>
                <div className="relative box-border h-px self-stretch border-t-[1px] border-solid border-[#373737]" />
            </div>
        <div className="font-inter box-border flex w-full max-w-full flex-row items-start  px-0  pt-0 text-center text-white" >
        <div className="flex w-full max-w-full flex-col justify-start">
        {questionsGlobal.map((question, index) => (
          <div key={index}>
                <div className="-ml-20 mt-7 flex w-full max-w-full flex-col  items-center justify-start gap-[29px] self-stretch lg:ml-0 lg:flex-row">
                    <div className=" flex w-full flex-row items-center justify-start ">
                        <p className="relative self-stretch text-[2rem] leading-[23px]">
                         {index + 1} 
                        </p>
                        <QuestionInput
                            value={question.question}
                            onChange={(e) => handleQuestionChange(index, e)}
                            />
                    </div>
                        <div className=" flex w-1/2 flex-row items-center justify-start ">
                        <div
                         onClick={() => handleRemoveQuestion(index)}
                        className=" -mt-3 ml-2 "
                         >
                             <RiCloseCircleLine className="cursor-pointer" size={40} />
                         </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-y-[20px] lg:flex-row lg:items-center">
                    <div className="mr-6">
                         {question.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-center  ">
                            <OptionInput
                                key={optionIndex}
                                value={option}
                                onChange={(e) => handleOptionChange(index, optionIndex, e)}
                            />
                             <div
                                className=" -mt-2 cursor-pointer "
                                     onClick={() =>
                                     handleRemoveOption(index, optionIndex)
                                         }
                                              >
                             <AiOutlineDelete />
                        </div>
                    </div>
                         ))}
                    </div>
                      <div className="z-[1] box-border flex w-full flex-1 flex-col justify-between  gap-[34.8px] rounded-[1.25rem] border-[1px] border-solid border-[#373737] px-[33px] pb-[26px] pt-[23px] text-[20px] text-[#373737] lg:w-fit lg:flex-row lg:items-center">
                         <div className="flex flex-row items-center justify-start hover:text-[#1FC04D] ">
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
                                onChange={(e) => handleDurationChange(index, e)}
                             />
                      </div>
                </div>
          </div>
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