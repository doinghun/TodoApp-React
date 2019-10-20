import "./TaskList.css";
import React from "react";
import TaskItems from "./TaskItems";

class TaskList extends React.Component {
  handleCheckboxClick = (is_done, id) => {
    this.props.updateTask(is_done, id);
  };

  handleButtonSubmit = id => {
    this.props.deleteTask(id);
  };

  taskTitle() {
    return this.props.tasks.map(task => {
      return (
        <TaskItems
          key={task.id}
          {...task}
          onClick={() => this.handleCheckboxClick(task.is_done, task.id)}
          onSubmit={() => this.handleButtonSubmit(task.id)}
        />
      );
    });
  }

  render() {
    return (
      <div className="task-list">
        <div className="ui relaxed divided list">{this.taskTitle()}</div>
      </div>
    );
  }
}

export default TaskList;
