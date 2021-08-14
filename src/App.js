// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Prayer and Meditation",
      day: "August 14th at 5:00pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Meeting",
      day: "August 13th at 8:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Learning programming",
      day: "August 16th at 7:00am",
      reminder: true,
    },
    {
      id: 4,
      text: "Shopping",
      day: "August 18th at 3:00pm",
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task }; //{id: idvalue} try doing just any number only to understand, task passed is an object too
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));

    //only those that return true will be filtered
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask ? <AddTask onAdd={addTask} /> : ""}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
