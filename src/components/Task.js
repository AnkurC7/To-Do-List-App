import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
          //arrow function so that it won't go and fetch
          //value on each reload for every task
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
