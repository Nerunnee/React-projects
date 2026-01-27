import { NextButton } from "./NextButton";
import { InputContainer } from "./InputContainer";

export const FormUsersSecret = ({
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
        <NextButton handleError={handleError} step={step} />
      </div>
    </div>
  );
};
