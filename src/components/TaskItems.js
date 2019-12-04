import "./TaskItems.css";
import React from "react";

class TaskItems extends React.Component {
  renderCheckbox() {
    const id = this.props.id;
    const isDone = this.props.is_done;
    return (
      <div className="left floated content">
        <div className="ui fitted checkbox">
          <input
            type="checkbox"
            onClick={() => this.handleCheckboxClick(isDone, id)}
            defaultChecked={isDone === true ? true : false}
          ></input>
          <label></label>
        </div>
      </div>
    );
  }

  renderDeleteButton() {
    const id = this.props.id;
    const index = this.props.index;
    return (
      <div className="right floated content">
        <button
          className="circular ui basic icon button"
          onClick={() => this.handleButtonClick(id, index)}
        >
          <i className="times icon"></i>
        </button>
      </div>
    );
  }

  renderTask() {
    const isDone = this.props.is_done;
    if (isDone) {
      return (
        <div className="content">
          <div className="line-through">{this.props.title}</div>
        </div>
      );
    } else {
      return <div className="content">{this.props.title}</div>;
    }
  }

  render() {
    return (
      <div className="item">
        {this.renderCheckbox()}
        {this.renderDeleteButton()}
        {this.renderTask()}
      </div>
    );
  }

  handleCheckboxClick = (is_done, id) => {
    this.props.updateTask(is_done, id);
  };

  handleButtonClick = (id, index) => {
    this.props.deleteTask(id, index);
  };
}

export default TaskItems;
