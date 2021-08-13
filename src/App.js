// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
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
      day: "August 18th at 3:30pm",
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
