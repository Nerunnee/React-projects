export const InputProfile = ({
  value,
  label,
  formsContainer,
  error,
  formsValue,
  required,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1.5">
        <p className="text-sm mt-2">{label}</p>
        {required && <p className="text-red-500 mt-1 font-extrabold">*</p>}
      </div>
      <input
        type="file"
        className={`border border-gray-300 rounded-md w-104 h-45 bg-gray-100 ${error ? "border-red-500" : ""}`}
        onChange={formsValue}
        value={value}
        name={formsContainer}
      />
      <p className="text-red-500 text-xs">{error}</p>
    </div>
  );
};
