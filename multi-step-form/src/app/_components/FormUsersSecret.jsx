import { NextButton } from "./NextButton";
import { InputText } from "./InputText";
import { BackButton } from "./BackButton";
import { InputPassword } from "./InputPassword";

export const FormUsersSecret = ({
  forms,
  formsValue,
  error,
  handleError,
  step,
  handleBackStep,
  required,
}) => {
  return (
    <div>
      <div className="mb-40.5">
        <InputText
          formsValue={formsValue}
          value={forms.eMail}
          label="Email"
          formsContainer="eMail"
          placeholder="Your email"
          error={error.eMail}
          required={required}
        />

        <InputText
          formsValue={formsValue}
          value={forms.phoneNumber}
          label="Phone number"
          formsContainer="phoneNumber"
          placeholder="Your phone number"
          error={error.phoneNumber}
          required={required}
        />

        <InputPassword
          formsValue={formsValue}
          value={forms.password}
          label="Password"
          formsContainer="password"
          placeholder="Your password"
          error={error.password}
          required={required}
        />

        <InputPassword
          formsValue={formsValue}
          value={forms.confirmPassword}
          label="Confirm password"
          formsContainer="confirmPassword"
          placeholder="Confirm password"
          error={error.confirmPassword}
          required={required}
        />
      </div>

      <div className="flex justify-between w-full">
        <div className="w-31.25">
          <BackButton handleBackStep={handleBackStep} />
        </div>
        <div className="w-70">
          <NextButton handleError={handleError} step={step} />
        </div>
      </div>
    </div>
  );
};
