import React, { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/TodoList";


const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };


  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md\">
      <Header onAddTask={addTask} />
      <ToDoList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleCompletion={toggleTaskCompletion}
        onEditTask={editTask}
      />
    </div>
  );
};

export default App;