import { NextButton } from "./NextButton";
import { InputText } from "./InputText";

export const FormUsersName = ({
  forms,
  formsValue,
  error,
  step,
  required,
  handleNextStep,
}) => {
  return (
    <div>
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
    </div>
  );
};
