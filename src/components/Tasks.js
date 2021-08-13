const tasks = [
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
];
const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text} </h3>
      ))}
    </>
  );
};

export default Tasks;
