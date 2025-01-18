import React, { useState } from "react";

const Header = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  // Function to handle the Enter key event to add the task.
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission
      handleAddTask();
    }
  };

  // Function to handle the sending the task data to the parent component.
  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task.trim()); // sending the valid data to the parent. 
      setTask(""); // ready to add new task 
    }
  };

  return (
    <header className="text-center ">
      <h1 className="text-2xl font-bold mb-4 bg-orange-300 ">To-Do List</h1>
      <div className=" ml-3 mr-3 flex gap-4">
        <input
          type="text"
          value={task}
          onKeyDown={handleKeyDown} // Bind the Enter key event
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task.."
          className="flex-grow p-2 border rounded-xl "
        />
        <button
          onClick={handleAddTask} 
          className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600"
        >
          Add
        </button>
      </div>
    </header>
  );
};

export default Header;
