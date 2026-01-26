import { useState } from "react";
import { InputContainer } from "./InputContainer";
import { Button } from "./Button";

export const Form = () => {
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
  const [step, setStep] = useState(1);

  const formsValue = (event) => {
    setForms({ ...forms, [event.target.name]: event.target.value });
  };
  console.log(forms);

  const handleError = () => {
    const errorValue = {};

    if (step === 1) {
      if (forms.firstName === "") {
        errorValue.firstName =
          "First name cannot contain special characters or numbers.";
      }
      if (forms.lastName === "") {
        errorValue.lastName =
          "Last name cannot contain special characters or numbers.";
      }
      if (forms.userName === "") {
        errorValue.userName =
          "This username is already taken. Please choose another one.";
      }
    }

    if (step === 2) {
      if (forms.eMail === "") {
        errorValue.eMail = "Please provise a viled email address.";
      }
      if (forms.phoneNumber === "") {
        errorValue.phoneNumber = "Please enter a valid phone number.";
      }
      if (forms.password === "") {
        errorValue.password = "Password must include letters and numbers.";
      }
      if (forms.confirmPassword === "") {
        errorValue.confirmPassword =
          "Passwords do not match. Please try again.";
      }
    }

    setErrors(errorValue);
    if (Object.keys(errorValue).length === 0) {
      handleNextStep();
    }
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

        {step === 2 && (
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
