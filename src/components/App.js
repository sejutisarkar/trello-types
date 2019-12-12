import React from "react";
import TaskPage from "./TaskPage";
import { connect } from "react-redux";
import createTask from "../actions/add";
import fetchTask from "../actions/fetchTask";
import editTask from "../actions/editTask";
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTask());
  }
  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }));
  };

  onStatusChange = (id, status) => {
    // console.log(id);
    this.props.dispatch(editTask(id, { status }));
  };
  render() {
    const { tasks } = this.props;
    console.log(this.props.isLoading);
    console.log(tasks);
    return (
      <div className="AppMain">
        {this.props.isLoading ? (
          <h1>loading...</h1>
        ) : (
          <TaskPage
            tasks={tasks}
            onCreateTask={this.onCreateTask}
            onStatusChange={this.onStatusChange}
            isLoading={this.props.isLoading}
          />
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    isLoading: state.isLoading
  };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     onCreateTask: () => {
//       dispatch(addItems);
//     }
//   };
// }
export default connect(
  mapStateToProps,
  null
)(App);
