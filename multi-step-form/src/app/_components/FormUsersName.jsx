import { NextButton } from "./NextButton";
import { InputText } from "./InputText";
import { motion } from "motion/react";

export const FormUsersName = ({
  forms,
  formsValue,
  error,
  handleError,
  step,
  required,
  handleNextStep,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, right: 0 }}
      animate={{ opacity: 10, right: 10 }}
      transition={{ duration: 3 }}
    >
      <div className="mb-40.5">
        <InputText
          formsValue={formsValue}
          value={forms.firstName}
          label="First name"
          formsContainer="firstName"
          placeholder="Your first name"
          error={error.firstName}
          required={required}
        />

        <InputText
          value={forms.lastName}
          formsValue={formsValue}
          label="Last name"
          formsContainer="lastName"
          placeholder="Your last name"
          error={error.lastName}
          required={required}
        />

        <InputText
          formsValue={formsValue}
          value={forms.userName}
          label="User name"
          formsContainer="userName"
          placeholder="Your username"
          error={error.userName}
          required={required}
        />
      </div>

      <div>
        <NextButton handleError={handleNextStep} step={step} />
      </div>
    </motion.div>
  );
};
