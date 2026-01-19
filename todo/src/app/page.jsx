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
      if (task.id === taskId) {
        return { ...task, checked: !task.checked };
      } else {
        return task;
      }
    });

    setTasks(newTask);
  };

  return (
    <div>
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
        {buttons.map((item, index) => (
          <button key={index} className="border">
            {item}
          </button>
        ))}
      </div>

      <div>
        {tasks.map((task, id) => {
          return (
            <div key={id} className="flex">
              <input
                type="checkbox"
                name="checkbox"
                onClick={() => toggleChecked(task.id)}
              />
              <p>{task.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
