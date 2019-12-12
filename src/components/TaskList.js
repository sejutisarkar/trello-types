import React from "react";
import Task from "./Task";
import { connect } from "react-redux";
const TaskList = props => {
  // const { error } = this.props;
  // console.log(error);
  return (
    <div>
      {/* <div className="task-list-title">{props.status}</div> */}
      {/* {this.props.error ? (
        "No data"
      ) : ( */}
      <div>
        {console.log(props.tasks)}
        {props.tasks.map(tasks => (
          <Task
            key={tasks.id}
            task={tasks}
            onStatusChange={props.onStatusChange}
          />
        ))}
      </div>
      )
    </div>
  );
};
const mapStateToProps = state => {
  return {
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  null
)(TaskList);
