"use client";

const { useState } = require("react");

const Home = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex flex-col items-center pt-20">
      <TodoList />
    </div>
  );
};

export default Home;

const buttons = ["All", "Active", "Completed"];

const TodoList = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [selectedButton, setSelectedButton] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    if (selectedButton === buttons[0]) return true;
    if (selectedButton === buttons[1]) return !task.checked;
    if (selectedButton === buttons[2]) return task.checked;
  });

  const HandleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(tasks);
  const AddTask = () => {
    const task = {
      id: tasks.length,
      text: value,
      checked: false,
    };

    setTasks((prev) => [...prev, task]);
    setValue("");
  };

  const toggleChecked = (taskId) => {
    const newTask = tasks.map((task) => {
      if (taskId !== task.id) {
        return task;
      }

      return { ...task, checked: !task.checked };
    });

    setTasks(newTask);
  };

  const deleteTask = (taskId) => {
    const remainingTask = tasks.filter((task) => {
      if (task.id === taskId) {
        return false;
      } else {
        return true;
      }
    });

    setTasks(remainingTask);
  };

  const onChangeFilter = (filter) => {
    setSelectedButton(filter);
  };

  const completedCount = tasks.filter((task) => task.checked).length;

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.checked));
  };

  return (
    <div className="w-94.25 py-6 px-4 bg-white rounded-md flex flex-col items-center gap-8">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl text-center ">To-Do List</h1>

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

        <div className="flex gap-2">
          {buttons.map((filter, index) => (
            <button
              key={index}
              className="rounded-md bg-gray-200 py-1 px-3 hover:bg-blue-500"
              onClick={() => onChangeFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div>
          {filteredTasks.map((task, id) => {
            return (
              <div
                key={id}
                className="flex justify-between items-center w-86.25 h-15.5 bg-gray-200 rounded-md p-4 mb-5"
              >
                <div className="flex gap-2.5 items-center">
                  <input
                    type="checkbox"
                    name="checkbox"
                    checked={task.checked}
                    onChange={() => toggleChecked(task.id)}
                    className={`w-5 h-5 ${task.checked && "bg-blue-500"}`}
                  />
                  <p className={`${task.checked && "line-through"}`}>
                    {task.text}
                  </p>
                </div>

                <button
                  className="text-red-600 bg-red-200 py-1.5 px-3 rounded-md"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>

        <div>
          <p>
            {completedCount} of {tasks.length} tasks completed
          </p>
          <button onClick={() => clearCompleted()} className="text-red-600">
            Clear completed
          </button>
        </div>
      </div>

      <p>Powered by Pinecone academy</p>
    </div>
  );
};
