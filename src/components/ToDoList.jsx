import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, onDeleteTask, onToggleCompletion , onEditTask}) => {
  return (
    <>
    <hr className=" bg-gray-600 p-1 mt-5"/>
    
    <ul className="space-y-3">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggle={onToggleCompletion}
          onEdit={onEditTask}
        />
      ))}
    </ul>
    </>
  );
};

export default ToDoList;
