"use client";

import { useState } from "react";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-blue-200 flex flex-col justify-center items-center">
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
    <div className="">
      <h1>Questions</h1>
      <div className="flex flex-col gap-8">
        {questions.map(({ id, question }) => (
          <Question key={id} question={question} />
        ))}
      </div>
    </div>
  );
};

const Question = ({ question }) => {
  return (
    <div className="w-167 flex justify-between bg-white py-6 px-4 shadow-2xl">
      <h5>{question}</h5>
      <button>+</button>
    </div>
  );
};
