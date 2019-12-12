import React from "react";
import TaskList from "./TaskList";

const TASK_STATUSES = ["Unstarted", "In Progress", "Started"];

class TaskPage extends React.Component {
  state = {
    title: "",
    description: "",
    showNewCard: false
  };

  onTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  onDescriptionChange = e => {
    this.setState({
      description: e.target.value
    });
  };
  onResetForm = () => {
    this.setState({
      title: "",
      description: "",
      showNewCard: false
    });
  };
  onCreateTask = e => {
    e.preventDefault();
    this.props.onCreateTask({
      title: this.state.title,
      description: this.state.description
    });
    this.onResetForm();
  };
  toggleForm = () => {
    console.log("click");
    this.setState({ showNewCard: !this.state.showNewCard });
  };
  renderTaskLists() {
    const { tasks } = this.props;
    console.log(tasks);
    return TASK_STATUSES.map(status1 => {
      const statusTasks = tasks
        ? tasks.filter(task => task.status === status1)
        : console.log("no");
      return (
        <TaskList
          key={status1}
          status={status1}
          tasks={statusTasks}
          onStatusChange={this.props.onStatusChange}
        />
      );
    });
  }

  render() {
    return (
      <div className="task">
        <div className="task-header">
          <button onClick={() => this.toggleForm()}>Add Task</button>
        </div>
        {this.state.showNewCard && (
          <form className="task-list-form" onSubmit={this.onCreateTask}>
            <input
              className="full-width-input"
              onChange={this.onTitleChange}
              value={this.state.title}
              type="text"
              placeholder="title"
            />
            <input
              className="full-width-input"
              onChange={this.onDescriptionChange}
              value={this.state.description}
              type="text"
              placeholder="description"
            />
            <button className="button" type="submit">
              Save
            </button>
          </form>
        )}
        <div className="tasklist">{this.renderTaskLists()}</div>
      </div>
    );
  }
}
export default TaskPage;
