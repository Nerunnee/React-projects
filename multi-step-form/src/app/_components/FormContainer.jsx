export const FormContainer = ({ forms, formsValue, label , formsContainer}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm mt-2">{label}</p>
      <input
        type="text"
        placeholder="text"
        className="border rounded-md w-104 p-3"
        onChange={formsValue}
        value={forms.value}
        name={formsContainer}
      />
    </div>
  );
};
