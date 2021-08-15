import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle, showAddTask }) => {
  return (
    <div
      className={`container qq ${showAddTask && "containerGlass container2"}`}
    >
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
