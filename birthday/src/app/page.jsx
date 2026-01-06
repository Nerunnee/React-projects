"use client";

import { useState } from "react";

const Birthday = () => {
  return (
    <div className="bg-pink-200 h-screen text-black flex flex-col justify-center items-center">
      <BirthdayList />
    </div>
  );
};

export default Birthday;

const birthdayPeople = [
  {
    id: 1,
    img: "/profile img1.jpg",
    name: "Bertie Yates",
    age: "29 years",
  },
  {
    id: 2,
    img: "/profile img2.jpg",
    name: "Hester Hogan",
    age: "32 years",
  },
  {
    id: 3,
    img: "/profile img3.jpg",
    name: "Larry Little",
    age: "36 years",
  },
  {
    id: 4,
    img: "/profile img4.jpg",
    name: "Sean Walsh",
    age: "34 years",
  },
  {
    id: 5,
    img: "/profile img5.jpg",
    name: "Lola Gardner",
    age: "29 years",
  },
];

const BirthdayList = () => {
  const [birthday, setBirthday] = useState(birthdayPeople);

  const clearList = () => {
    setBirthday([]);
  };

  return (
    <div className="p-5 bg-white flex flex-col gap-4">
      <h3 className="font-normal text-3xl tracking-wider mb-4 w-115.5">
        {birthday.length} Birthdays Today
      </h3>

      <div className="flex flex-col gap-4">
        {birthday.map(({ id, name, age, img }) => (
          <BirthdayListItem key={id} name={name} age={age} img={img} />
        ))}
      </div>

      <button
        onClick={clearList}
        className="bg-purple-400 rounded text-white hover:bg-purple-800"
      >
        Clear All
      </button>
    </div>
  );
};

const BirthdayListItem = ({ img, name, age }) => {
  return (
    <div className="flex items-center gap-2">
      <img className="h-20 w-20 rounded-full" src={img} alt="Profile image" />
      <div>
        <h4 className="font-bold tracking-wider">{name}</h4>
        <h6 className="text-gray-500 ">{age}</h6>
      </div>
    </div>
  );
};
