export const InputText = ({ value, HandleChange, AddTask }) => {
  return (
    <div className="flex gap-1.5">
      <input
        type="text"
        placeholder="Add a new task..."
        className="border rounded-md py-2 px-4 w-70"
        value={value}
        onChange={() => HandleChange(event)}
      />

      <button
        className="py-2 px-4 rounded-md bg-blue-500 text-white"
        onClick={AddTask}
      >
        Add
      </button>
    </div>
  );
};
