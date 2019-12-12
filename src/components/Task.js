import React from "react";

const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];
const Task = props => {
  console.log(props);
  function onStatuschange(e) {
    console.log("hi");
    props.onStatusChange(props.task.id, e.target.value);
  }
  return (
    <div className="task" style={{ backgroundColor: "gray" }}>
      <div className="task-header">
        <div>
          <h1>{props.task.title}</h1>
        </div>
        <div className="task-body">{props.task.description}</div>
        <select value={props.task.status} onChange={onStatuschange}>
          {TASK_STATUSES.map(status => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
        <div style={{ width: "50px", height: "50px" }}></div>
      </div>
    </div>
  );
};

export default Task;
