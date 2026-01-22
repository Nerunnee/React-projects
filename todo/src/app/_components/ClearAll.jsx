export const ClearAll = ({ completedCount, tasks, clearCompleted }) => {
  return (
    <div className="flex justify-between border-t pt-4 border-gray-300">
      <p>
        {completedCount} of {tasks.length} tasks completed
      </p>
      <button onClick={() => clearCompleted()} className="text-red-500">
        Clear completed
      </button>
    </div>
  );
};
