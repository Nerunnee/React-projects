import { NextButton } from "./NextButton";
import { InputContainer } from "./InputContainer";

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
        <NextButton handleError={handleError} step={step} />
      </div>
    </div>
  );
};
