"use client";

import { useState } from "react";
import { FormContainer } from "./_components/FormContainer";
import { Button } from "./_components/Button";

export default function Home() {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <Form />
    </div>
  );
}

const formsContainer = [
  { id: 1, name: "First name" },
  { id: 2, name: "Last name" },
  { id: 3, name: "Username" },
];

const Form = () => {
  const [forms, setForms] = useState(formsContainer);

  const formsValue = (event) => {
    setForms(event.target.value);
    console.log("hi");
  };

  return (
    <div className="bg-white p-8 rounded-md">
      <div className="flex flex-col gap-2 mb-7">
        <img className="w-15 h-15" src="/pinecone.svg" alt="Pinecone Logo" />

        <p className="text-2xl font-semibold">Join Us! 😎</p>

        <p className="text-lg font-normal text-gray-500">
          Please provide all current information accurately.
        </p>
      </div>

      <div className="mb-40.5">
        {forms.map((form) => (
          <FormContainer key={form.id} form={form} />
        ))}
      </div>

      <div>
        <Button formsValue={formsValue} />
      </div>
    </div>
  );
};
