import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle, showAddTask }) => {
  return (
    <div className={`container ${showAddTask ? "containerGlass" : ""}`}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default Tasks;
