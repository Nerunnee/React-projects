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
    answer:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 2,
    question: "How Do I Change My Page Password?",
    answer:
      "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    question: "What Is BankID?",
    answer:
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    question: "Whose Birth Number Can I Use?",
    answer:
      "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    id: 5,
    question: "When Do I Recieve a Password Ordered by Letter?",
    answer:
      "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan.",
  },
];

const Questions = () => {
  const [questions, setQuestions] = useState(questionsInfos);
  const [showMore, setShowMore] = useState([]);

  const addAnswer = (id) => {
    if (showMore.includes(id)) {
      setShowMore(showMore.filter((itemId) => itemId !== id));
    } else {
      setShowMore([...showMore, id]);
    }
  };

  return (
    <div className="bg-white w-190 p-10">
      <h1 className="text-center text-4xl mb-14 text-cyan-950">Questions</h1>
      <div className="flex flex-col gap-8">
        {questions.map(({ id, question, answer }) => (
          <Question
            key={id}
            id={id}
            question={question}
            answer={answer}
            addAnswer={addAnswer}
            isOpen={showMore.includes(id)}
          />
        ))}
      </div>
    </div>
  );
};

const Question = ({ question, addAnswer, id, answer, isOpen }) => {
  return (
    <div className="w-167 flex flex-col bg-white py-6 px-4 shadow-2xl">
      <div className="flex justify-between items-center">
        <h5>{question}</h5>

        <button
          className="w-8 h-8 rounded-full border bg-cyan-950 text-white"
          onClick={() => addAnswer(id)}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>

      {isOpen && (
        <div className="px-4 pb-6 pt-2 border-t border-gray-200">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};
