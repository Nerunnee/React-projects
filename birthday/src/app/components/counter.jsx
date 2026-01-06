"use client";

import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);

  const add = () => {
    setNumber(number + 1);
  };

  const less = () => {
    setNumber(number - 1);
  };

  return (
    <div className="flex flex-col gap-2 items-center mt-10">
      <h1 className="text-4xl">{number}</h1>
      <div className="flex gap-3">
        <button className="bg-green-400 p-2 rounded-2xl w-20" onClick={add}>
          Add
        </button>
        <button className="bg-red-400 p-2 rounded-2xl w-20" onClick={less}>
          Less
        </button>
      </div>
    </div>
  );
}
