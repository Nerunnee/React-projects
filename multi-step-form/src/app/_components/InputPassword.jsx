export const InputPassword = ({
  value,
  label,
  formsContainer,
  error,
  formsValue,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm mt-2">{label}</p>
      <input
        type="password"
        placeholder={placeholder}
        className={`border border-gray-400 rounded-md w-104 p-3 ${error ? "border-red-500" : ""}`}
        onChange={formsValue}
        value={value}
        name={formsContainer}
      />
      <p className="text-red-500 text-xs">{error}</p>
    </div>
  );
};
