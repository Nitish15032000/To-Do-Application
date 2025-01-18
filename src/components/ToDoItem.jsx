import React, { useState } from "react";

const ToDoItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleEditSubmit = () => {
    if (editText.trim()) {
      onEdit(task.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission
      handleEditSubmit();
    }
  };

  return (
    <li
      className={`flex justify-between items-center p-3 mt-5 border rounded-md ${
        task.completed ? "bg-green-100" : "bg-gray-300"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="cursor-pointer"
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown} // Bind the Enter key event
            className="p-1 border rounded-md flex-grow"
          />
        ) : (
          <span
            className={`${
              task.completed ? "line-through text-gray-500" : "text-gray-900"
            }`}
          >
            {task.text}
          </span>
        )}
      </div>
      <div className="flex gap-2 ml-5">
        {isEditing ? (
          <>
            <button
              onClick={handleEditSubmit} // Save button calls the edit submit function
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default ToDoItem;
