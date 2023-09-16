import React from "react";
import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task" onDoubleClick={() => onToggle(task.id)}>
      <h3 key={task.id} className={task.reminder ? "task-reminder" : ""}>
        {task.text} <FaTimes style={style} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};
let style = { color: "red", cursor: "pointer" };
export default Task;
