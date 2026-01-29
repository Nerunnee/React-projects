"use client";
import { useState, useRef } from "react";
import { FormUsersName } from "./FormUsersName";
import { FormUsersSecret } from "./FormUsersSecret";
import { FromUsersProfile } from "./FormUsersProfile";
import { useHandleError } from "./HandleError";

export const Form = () => {
  const formsContainer = {
    firstName: "",
    lastName: "",
    userName: "",
    eMail: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    profileImage: "",
  };

  const [forms, setForms] = useState(formsContainer);
  const [errors, setErrors] = useState(formsContainer);
  const [step, setStep] = useState(1);
  const [imgUrl, setImgUrl] = useState(null);
  const { errorValue } = useHandleError(step, forms);
  const fileUploadRef = useRef();

  const formsValue = (event) => {
    setForms({ ...forms, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const handleNextStep = () => {
    setErrors(errorValue);

    const keys = Object.entries(errorValue).map(([_key, value]) => value);

    if (keys.length === 0) {
      setStep(step + 1);
    }
  };

  const handleBackStep = () => {
    setStep(step - 1);
  };

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  };

  const uploadImageDisplay = () => {
    const imgFile = fileUploadRef.current.files[0];
    setImgUrl(URL.createObjectURL(imgFile));

    setForms({ ...forms, profileImage: imgFile });
  };

  return (
    <div className="bg-white p-8 rounded-md">
      <div className="flex flex-col gap-2 mb-7">
        <img className="w-15 h-15" src="/pinecone.svg" alt="Pinecone Logo" />
        <p className="text-2xl font-semibold">
          {step === 4 ? "You're All Set 🔥 " : "Join Us! 😎"}
        </p>
        <p className="text-lg font-normal text-gray-500">
          {step === 4
            ? "We have received your submission. Thank you!"
            : "Please provide all current information accurately."}
        </p>
      </div>

      <div>
        {step === 1 && (
          <FormUsersName
            forms={forms}
            formsValue={formsValue}
            error={errors}
            step={step}
            required={true}
            handleNextStep={handleNextStep}
          />
        )}

        {step === 2 && (
          <FormUsersSecret
            forms={forms}
            formsValue={formsValue}
            error={errors}
            step={step}
            handleBackStep={handleBackStep}
            required={true}
            handleNextStep={handleNextStep}
          />
        )}

        {step === 3 && (
          <FromUsersProfile
            forms={forms}
            formsValue={formsValue}
            error={errors}
            step={step}
            handleBackStep={handleBackStep}
            required={true}
            imgUrl={imgUrl}
            handleImageUpload={handleImageUpload}
            uploadImageDisplay={uploadImageDisplay}
            fileUploadRef={fileUploadRef}
            handleNextStep={handleNextStep}
          />
        )}
      </div>
    </div>
  );
};
