import { BackButton } from "./BackButton";
import { InputDate } from "./InputDate";
import { InputProfile } from "./InputProfile";
import { NextButton } from "./NextButton";

export const FromUsersProfile = ({
  forms,
  formsValue,
  error,
  handleError,
  step,
  handleBackStep,
}) => {
  return (
    <div>
      <div className="mb-40.5">
        <InputDate
          formsValue={formsValue}
          value={forms.dateOfBirth}
          label="Date of birth"
          formsContainer="dateOfBirth"
          error={error.dateOfBirth}
        />

        <InputProfile
          formsValue={formsValue}
          value={forms.profileImage}
          label="Profile image"
          formsContainer="profileImage"
          error={error.profileImage}
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
