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

const Form = () => {
  const formsContainer = [
    { id: 1, firstName: "" },
    { id: 2, lastName: "" },
    { id: 3, userName: "" },
  ];

  const [forms, setForms] = useState(formsContainer);
  const [errors, setErrors] = useState(formsContainer);

  const formsValue = (event) => {
    setForms({ ...forms, [event.target.name]: event.target.value });
  };
  console.log(forms);

  

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
        <FormContainer
          key={forms.id}
          forms={forms}
          formsValue={formsValue}
          value={forms.firstName}
          label="First name"
          formsContainer="firstName"
        />
        <FormContainer
          key={forms.id}
          forms={forms}
          formsValue={formsValue}
          value={forms.lasttName}
          label="Last name"
          formsContainer="lastName"
        />
        <FormContainer
          key={forms.id}
          forms={forms}
          formsValue={formsValue}
          value={forms.userName}
          label="User name"
          formsContainer="userName"
        />
      </div>

      <div>
        <Button forms={forms} />
      </div>
    </div>
  );
};
