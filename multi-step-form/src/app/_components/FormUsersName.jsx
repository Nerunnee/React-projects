import { NextButton } from "./NextButton";
import { InputText } from "./InputText";

export const FormUsersName = ({
  forms,
  formsValue,
  error,
  handleError,
  step,
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
        />

        <InputText
          value={forms.lastName}
          formsValue={formsValue}
          label="Last name"
          formsContainer="lastName"
          placeholder="Your last name"
          error={error.lastName}
        />

        <InputText
          formsValue={formsValue}
          value={forms.userName}
          label="User name"
          formsContainer="userName"
          placeholder="Your username"
          error={error.userName}
        />
      </div>

      <div>
        <NextButton handleError={handleError} step={step} />
      </div>
    </div>
  );
};
