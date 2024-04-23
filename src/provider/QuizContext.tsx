import React, { createContext, useContext, useState } from "react";

interface Question {
  questionNumber: number;
  question: string;
  imageOrVideo: string;
  options: string[];
  correctOption: string;
  timer: string;
}

interface Distribution {
  label: string;
  percentage: string;
}

interface QuizContextProps {
  quizTitleGlobal: string;
  setQuizTitleGlobal: React.Dispatch<React.SetStateAction<string>>;
  questionsGlobal: Question[];
  setQuestionsGlobal: React.Dispatch<React.SetStateAction<Question[]>>;
  distributionGlobal: Distribution[];
  setDistributionGlobal: React.Dispatch<React.SetStateAction<Distribution[]>>;
  amountGlobal: string;
  setAmountGlobal: React.Dispatch<React.SetStateAction<string>>;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [quizTitleGlobal, setQuizTitleGlobal] = useState<string>("");
  const [questionsGlobal, setQuestionsGlobal] = useState<Question[]>([
    {
      questionNumber: 1,
      question: "",
      imageOrVideo: "",
      options: [""],
      correctOption: "",
      timer: "",
    },
  ]);

  const [distributionGlobal, setDistributionGlobal] = useState<Distribution[]>([
    { label: "First Prize", percentage: "" },
    { label: "Second Prize", percentage: "" },
    { label: "Third Prize", percentage: "" },
  ]);
  const [amountGlobal, setAmountGlobal] = useState<string>("");

  return (
    <QuizContext.Provider
      value={{
        quizTitleGlobal,
        setQuizTitleGlobal,
        questionsGlobal,
        setQuestionsGlobal,
        distributionGlobal,
        setDistributionGlobal,
        amountGlobal,
        setAmountGlobal,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
