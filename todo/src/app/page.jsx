"use client";

const { useState } = require("react");

const Home = () => {
  return (
    <div>
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
    <div className="w-94.25 py-6 px-4">
      <h1>To-Do List</h1>

      <input
        type="text"
        placeholder="text"
        className="border"
        value={value}
        onChange={() => HandleChange(event)}
      />

      <button className="border" onClick={AddTask}>
        Add
      </button>

      <div className="flex gap-2">
        {buttons.map((filter, index) => (
          <button
            key={index}
            className="border"
            onClick={() => onChangeFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div>
        {filteredTasks.map((task, id) => {
          return (
            <div key={id} className="flex gap-4">
              <div className="flex">
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={task.checked}
                  onChange={() => toggleChecked(task.id)}
                />
                <p className={`${task.checked && "line-through"}`}>
                  {task.text}
                </p>
              </div>

              <button
                className="text-red-600"
                onClick={() => deleteTask(task.id)}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <p>
          {" "}
          {completedCount} of {tasks.length} tasks completed
        </p>
        <button onClick={() => clearCompleted()} className="text-red-600">
          Clear completed
        </button>
      </div>
    </div>
  );
};
