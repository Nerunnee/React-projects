import { useState, useRef } from "react";
import { FormUsersName } from "./FormUsersName";
import { FormUsersSecret } from "./FormUsersSecret";
import { FromUsersProfile } from "./FormUsersProfile";

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

  const fileUploadRef = useRef();

  const formsValue = (event) => {
    setForms({ ...forms, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  };

  const handleError = () => {
    const errorValue = {};

    if (step === 1) {
      if (forms.firstName === "") {
        errorValue.firstName = "Нэрээ оруулна уу";
      }
      if (forms.lastName === "") {
        errorValue.lastName = "Овгоо оруулна уу";
      }
      if (forms.userName === "") {
        errorValue.userName = "Хэрэглэгчийн нэрээ оруулна уу";
      }
    }

    if (step === 2) {
      if (forms.eMail === "") {
        errorValue.eMail = "Мэйл хаяг оруулна уу";
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(forms.eMail)
      ) {
        errorValue.eMail = "Зөв мэйл хаяг оруулна уу";
      }

      if (forms.phoneNumber === "") {
        errorValue.phoneNumber = "Утасны дугаараа оруулна уу";
      } else if (!/^[89]\d{7}$/.test(forms.phoneNumber)) {
        errorValue.phoneNumber = "8 оронтой дугаар оруулна уу";
      }

      if (forms.password === "") {
        errorValue.password = "Нууц үгээ оруулна уу";
      } else if (!/^[0-9]{6}$/.test(forms.password)) {
        errorValue.password = "6 оронтой тоо оруулна уу";
      }

      if (forms.confirmPassword === "") {
        errorValue.confirmPassword = "Нууц үгээ давтаж оруулна уу";
      } else if (forms.password !== forms.confirmPassword) {
        errorValue.confirmPassword = "Таны оруулсан нууц үг таарахгүй байна";
      }
    }

    if (step === 3) {
      if (forms.dateOfBirth === "") {
        errorValue.dateOfBirth = "Төрсөн өдрөө оруулна уу";
      } else {
        const today = new Date();
        const birthDate = new Date(forms.dateOfBirth);

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < birthDate.getDate())
        ) {
          age--;
        }

        if (age < 18) {
          errorValue.dateOfBirth = "Та 18 ба түүнээс дээш настай байх ёстой";
        }
      }

      if (forms.profileImage === "") {
        errorValue.profileImage = "Профайл зурагаа оруулна уу";
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
            handleError={handleError}
            step={step}
            required={true}
          />
        )}

        {step === 2 && (
          <FormUsersSecret
            forms={forms}
            formsValue={formsValue}
            error={errors}
            handleError={handleError}
            step={step}
            handleBackStep={handleBackStep}
            required={true}
          />
        )}

        {step === 3 && (
          <FromUsersProfile
            forms={forms}
            formsValue={formsValue}
            error={errors}
            handleError={handleError}
            step={step}
            handleBackStep={handleBackStep}
            required={true}
            imgUrl={imgUrl}
            handleImageUpload={handleImageUpload}
            uploadImageDisplay={uploadImageDisplay}
            fileUploadRef={fileUploadRef}
          />
        )}
      </div>
    </div>
  );
};
