"use client";

import { Buttons } from "./_components/Buttons";
import { InputText } from "./_components/InputText";
import { TaskLists } from "./_components/TaskLists";
import { ClearAll } from "./_components/ClearAll";

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

    const okTask = confirm("Are you sure you want to delete this task?");

    if (!okTask) return;

    setTasks(remainingTask);
  };

  const onChangeFilter = (filter) => {
    setSelectedButton(filter);
  };

  const completedCount = tasks.filter((task) => task.checked).length;

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.checked));

    const clearAll = confirm(
      "Are you sure you want to clear all completed tasks?",
    );

    if (!clearAll) return;
  };

  return (
    <div className="py-6 px-4 bg-white rounded-md flex flex-col items-center gap-8">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl text-center ">To-Do List</h1>

        <InputText
          value={value}
          AddTask={AddTask}
          HandleChange={HandleChange}
        />

        <div className="flex gap-2">
          {buttons.map((filter, index) => (
            <Buttons
              onChangeFilter={onChangeFilter}
              filter={filter}
              key={index}
              selectedButton={selectedButton}
            />
          ))}
        </div>

        {filteredTasks.length === 0 ? (
          <div className="text-gray-500 text-center">
            No Tasks yet. Add one above!
          </div>
        ) : (
          <div className="flex flex-col">
            {filteredTasks.map((task) => (
              <TaskLists
                task={task}
                deleteTask={deleteTask}
                toggleChecked={toggleChecked}
                key={task.id}
              />
            ))}
          </div>
        )}

        <ClearAll
          clearCompleted={clearCompleted}
          tasks={tasks}
          completedCount={completedCount}
        />
      </div>

      <p className="text-gray-500 text-sm">
        Powered by <span className="text-blue-500">Pinecone academy</span>
      </p>
    </div>
  );
};
