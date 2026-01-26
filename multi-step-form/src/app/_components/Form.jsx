import { useState } from "react";
import { InputContainer } from "./InputContainer";
import { Button } from "./Button";

export const Form = () => {
  const steps = [FormUsersName, FormUsersSecret];
  const [step, setStep] = useState(1);

  const formsContainer = {
    firstName: "",
    lastName: "",
    userName: "",
    eMail: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const [forms, setForms] = useState(formsContainer);
  const [errors, setErrors] = useState(formsContainer);

  const formsValue = (event) => {
    setForms({ ...forms, [event.target.name]: event.target.value });
  };
  console.log(forms);

  const handleError = () => {
    const errorValue = {};
    if (forms.firstName === "") {
      errorValue.firstName = "Neree oruulna uu";
    }
    if (forms.lastName === "") {
      errorValue.lastName = "Neree oruulna uu";
    }
    if (forms.userName === "") {
      errorValue.userName = "Neree oruulna uu";
    }
    if (forms.eMail === "") {
      errorValue.eMail = "eMail oruulna uu";
    }
    if (forms.phoneNumber === "") {
      errorValue.phoneNumber = "utas oruulna uu";
    }
    if (forms.password === "") {
      errorValue.password = "eMail oruulna uu";
    }
    if (forms.confirmPassword === "") {
      errorValue.confirmPassword = "eMail oruulna uu";
    }

    setErrors(errorValue);
    handleNextStep();
  };

  const handleNextStep = () => {
    setStep(step + 1);
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

      <div>
        {step === 1 && (
          <FormUsersName
            forms={forms}
            formsValue={formsValue}
            error={errors}
            handleError={handleError}
          />
        )}

        {step === 1 && (
          <FormUsersSecret
            forms={forms}
            formsValue={formsValue}
            error={errors}
            handleError={handleError}
          />
        )}
      </div>
    </div>
  );
};

const FormUsersName = ({ forms, formsValue, error, handleError }) => {
  return (
    <div>
      <div className="mb-40.5">
        <InputContainer
          forms={forms}
          formsValue={formsValue}
          value={forms.firstName}
          label="First name"
          formsContainer="firstName"
          error={error.firstName}
        />

        <InputContainer
          forms={forms}
          formsValue={formsValue}
          value={forms.lastName}
          label="Last name"
          formsContainer="lastName"
          error={error.lastName}
        />

        <InputContainer
          forms={forms}
          formsValue={formsValue}
          value={forms.userName}
          label="User name"
          formsContainer="userName"
          error={error.userName}
        />
      </div>

      <div>
        <Button handleError={handleError} />
      </div>
    </div>
  );
};

const FormUsersSecret = ({ forms, formsValue, error, handleError }) => {
  return (
    <div>
      <div className="mb-40.5">
        <InputContainer
          forms={forms}
          formsValue={formsValue}
          value={forms.eMail}
          label="Email"
          formsContainer="eMail"
          error={error.eMail}
        />

        <InputContainer
          forms={forms}
          formsValue={formsValue}
          value={forms.phoneNumber}
          label="Phone number"
          formsContainer="phoneNumber"
          error={error.phoneNumber}
        />

        <InputContainer
          forms={forms}
          formsValue={formsValue}
          value={forms.password}
          label="Password"
          formsContainer="password"
          error={error.password}
        />

        <InputContainer
          forms={forms}
          formsValue={formsValue}
          value={forms.confirmPassword}
          label="Confirm password"
          formsContainer="confirmPassword"
          error={error.confirmPassword}
        />
      </div>

      <div>
        <Button handleError={handleError} />
      </div>
    </div>
  );
};
