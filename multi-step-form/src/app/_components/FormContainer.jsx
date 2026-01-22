export const FormContainer = ({ form }) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm mt-2">{form.name}</p>
      <input
        type="text"
        placeholder="text"
        className="border rounded-md w-104 p-3"
      />
    </div>
  );
};
