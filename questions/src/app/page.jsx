"use client";

import { useState } from "react";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-blue-200">
      <Questions />
    </div>
  );
}

const questionsInfos = [
  {
    id: 1,
    question: "Do I Have To Allow The Use Of Cookies?",
  },
  {
    id: 2,
    question: "How Do I Change My Page Password?",
  },
  {
    id: 3,
    question: "What Is BankID?",
  },
  {
    id: 4,
    question: "Whose Birth Number Can I Use?",
  },
  {
    id: 5,
    question: "When Do I Recieve a Password Ordered by Letter?",
  },
];

const Questions = () => {
  const [questions, setQuestions] = useState(questionsInfos);
  return (
    <div>
      <h1>Questions</h1>
      <Question />
    </div>
  );
};

const Question = () => {
  return (
    <div>
      <h5></h5>
    </div>
  );
};
