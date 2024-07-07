import React, { createContext, useContext, useEffect, useState } from "react";

interface Distribution {
  position: number;
  percentage: number;
}

interface Question {
  questionNumber?: number;
  question: string;
  type: "text" | "image" | "video";
  options: string[];
  answer: string;
  points: number;
  duration: number;
  description?: string;
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

export const useQuizContext = (): QuizContextProps => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Function to get initial state from localStorage
  const getInitialState = <T,>(key: string, defaultValue: T): T => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(key);
      if (saved !== null) {
        return JSON.parse(saved) as T;
      }
    }
    return defaultValue;
  };

  const [quizTitleGlobal, setQuizTitleGlobal] = useState<string>(
    getInitialState<string>("quizTitleGlobal", ""),
  );

  const [questionsGlobal, setQuestionsGlobal] = useState<Question[]>(
    getInitialState<Question[]>("questionsGlobal", [
      {
        questionNumber: 1,
        question: "",
        type: "text",
        options: [""],
        answer: "",
        points: 0,
        duration: 0,
      },
    ]),
  );

  const [distributionGlobal, setDistributionGlobal] = useState<Distribution[]>(
    getInitialState<Distribution[]>("distributionGlobal", [
      { position: 1, percentage: 0 },
    ]),
  );

  const [amountGlobal, setAmountGlobal] = useState<string>(
    getInitialState<string>("amountGlobal", ""),
  );

  // Use useEffect to update localStorage when the state changes
  useEffect(() => {
    localStorage.setItem("quizTitleGlobal", JSON.stringify(quizTitleGlobal));
  }, [quizTitleGlobal]);

  useEffect(() => {
    localStorage.setItem("questionsGlobal", JSON.stringify(questionsGlobal));
  }, [questionsGlobal]);

  useEffect(() => {
    localStorage.setItem(
      "distributionGlobal",
      JSON.stringify(distributionGlobal),
    );
  }, [distributionGlobal]);

  useEffect(() => {
    localStorage.setItem("amountGlobal", JSON.stringify(amountGlobal));
  }, [amountGlobal]);

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
