"use client";

import { useState } from "react";

export default function Home() {
  return (
    <div className="flex justify-center mt-70">
      <PeopleReviews />
    </div>
  );
}

const peopleInfo = [
  {
    id: 1,
    image: "/person3.jpeg",
    name: "Bill Anderson",
    job: "The boss",
    desc: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
  {
    id: 2,
    image: "/person1.jpeg",
    name: "Susan Smith",
    job: "web developer",
    desc: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
  },
  {
    id: 3,
    image: "/person2.jpeg",
    name: "Anna Johnson",
    job: "web designer",
    desc: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 4,
    image: "/person4.jpeg",
    name: "Peter Jones",
    job: "inter",
    desc: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
];

const PeopleReviews = () => {
  const [person, setPerson] = useState(peopleInfo);
  const [personIndex, setPersonIndex] = useState(0);

  const changeButton = () => {
    if (personIndex === person.length - 1) {
      setPersonIndex(0);
    } else {
      setPersonIndex((prev) => prev + 1);
    }
  };

  const surpriseMe = () => {
    setPersonIndex(Math.floor(Math.random() * person.length));
  };

  return (
    <div className="border-2 w-119 px-6 py-8 flex flex-col items-center inset-shadow-sm inset-shadow-indigo-500">
      <PersonRiview person={person[personIndex]} />

      <div className="mt-3 mb-4 flex gap-4">
        <button onClick={changeButton} className="border p-1">
          prev
        </button>
        <button onClick={changeButton} className="border p-1">
          next
        </button>
      </div>
      <button
        onClick={surpriseMe}
        className="py-1 px-3 bg-cyan-700 text-white rounded-md"
      >
        Surprise Me
      </button>
    </div>
  );
};

const PersonRiview = ({ person }) => {
  const { image, name, job, desc } = person;

  return (
    <div className="flex flex-col items-center text-center">
      <img
        className="rounded-full w-38.5 h-38.5 object-cover mb-5 shadow-[10px_-5px] shadow-cyan-700"
        src={image}
        alt="Profile image"
      />
      <h4 className="font-bold text-xl">{name}</h4>
      <p className="mb-3 text-cyan-700 font-bold uppercase">{job}</p>
      <p>{desc}</p>
    </div>
  );
};
