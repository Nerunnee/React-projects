export const TaskLists = ({ toggleChecked, task, deleteTask }) => {
  return (
    <div className="flex justify-between items-center w-86.25 h-15.5 bg-gray-200 rounded-md p-4 mb-5">
      <div className="flex gap-2.5 items-center">
        <input
          type="checkbox"
          name="checkbox"
          checked={task.checked}
          onChange={() => toggleChecked(task.id)}
          className={`w-5 h-5 ${task.checked && "bg-blue-500"}`}
        />
        <p className={`${task.checked && "line-through"}`}>{task.text}</p>
      </div>

      <button
        className="text-red-600 bg-red-200 py-1.5 px-3 rounded-md"
        onClick={() => deleteTask(task.id)}
      >
        Delete
      </button>
    </div>
  );
};
