export const InputContainer = ({
  forms,
  label,
  formsContainer,
  error,
  formsValue,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm mt-2">{label}</p>
      <input
        type="text"
        placeholder="text"
        className={`border rounded-md w-104 p-3 ${error ? "border-red-500" : ""}`}
        onChange={formsValue}
        value={forms.value}
        name={formsContainer}
      />
      <p className="text-red-500">{error}</p>
    </div>
  );
};
