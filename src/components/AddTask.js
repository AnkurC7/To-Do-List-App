import { useState } from "react";

const AddTask = ({ onAdd, showAddTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    /* Text is an empty string initially. Empty string means false in JS. So !text=not false=true. If there is text then it is true so !text=not true=false so there's no alerts */
    // console.log({ text })
    // console.log(text)

    if (!text) {
      alert("Please add a task");
      return;
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form
      className={`add-form container ${showAddTask ? "" : "containerGlass"}`}
      onSubmit={onSubmit}
    >
      <div className="form-control content">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control content">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder} //t/f and checked accordingly
          onChange={(e) => setReminder(e.currentTarget.checked)}
          className={`${reminder && "check"}`}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
