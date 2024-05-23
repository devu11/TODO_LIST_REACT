// TaskItems.js
import React from "react";
import { MdDeleteSweep } from "react-icons/md";

function TaskItems({ task, deleteTask, toggleCheck }) {
  return (
    <li className="items">
      <div className="items-text">
        <input
          type="checkbox"
          checked={task.checked}
          onChange={() => toggleCheck(task.taskName)}
        />
        <p className={task.checked ? "isChecked" : ""}>{task.taskName}</p>
      </div>
      <MdDeleteSweep
        className="delete-icon"
        onClick={() => deleteTask(task.taskName)}
      />
    </li>
  );
}

export default TaskItems;
