import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast, Toaster } from "sonner";

import { useQuizContext } from "../../provider/QuizContext";
import SideBar from "../molecule/SideBar";
import TimerInput from "../molecule/TimerInput";
import QuizForm from "../ui/createGame/QuizForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CreateGame: NextPage = () => {
  const router = useRouter();
  const [selectedTime, setSelectedTime] = useState<number>(10);
  const {
    quizTitleGlobal,
    setQuizTitleGlobal,
    questionsGlobal,
    setQuestionsGlobal,
  } = useQuizContext();

  const onBackPress = () => {
    void router.push("/dashboard/home");
  }



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
    selectedOptionIndex?: number,
  ) => {
    const newQuestions = [...questionsGlobal];
    newQuestions[questionIndex].options[optionIndex] = e.target.value;
    setQuestionsGlobal(newQuestions);
    if (optionIndex === selectedOptionIndex) {
      handleAnswerChange(questionIndex, e.target.value);
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

  const handleSelectedTimeChange = (newTime: number) => {
    setSelectedTime(newTime);
  
    // Optionally, update all existing questions' durations if you want them to sync
    const newQuestions = questionsGlobal.map(question => ({
      ...question,
      duration: newTime * 1000,
    }));
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
        points: 1,
        duration: selectedTime * 1000,
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

  const onContinue = () => {
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
  };

  console.log("timer value", selectedTime)
  //console.log("This are the questions:", questions);
  return (
    <div className="flex  bg-white min-h-screen " >
      <SideBar />
      <Toaster />
      <div className="flex-grow py-10 px-12 text-black ">
        <div className="flex justify-between items-center mb-5">
          {/* Back Arrow Icon */}
          <button className="text-black" onClick={onBackPress}>
            <FontAwesomeIcon icon={faArrowLeft} size="lg" color="#116629" />
          </button>
          <TimerInput
            value={selectedTime}
            onChange={handleSelectedTimeChange}
          />
        </div>
        <div className=" px-[100px] " >
          <QuizForm
            quizTitleGlobal={quizTitleGlobal}
            questionsGlobal={questionsGlobal}
            handleQuizTitleChange={handleQuizTitleChange}
            handleQuestionChange={handleQuestionChange}
            handleOptionChange={handleOptionChange}
            handleAddOption={handleAddOption}
            handleAnswerChange={handleAnswerChange}
            addQuestion={addQuestion}
            handleRemoveOption={handleRemoveOption}
            handleRemoveQuestion={handleRemoveQuestion}
            onContinue={onContinue}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateGame;

