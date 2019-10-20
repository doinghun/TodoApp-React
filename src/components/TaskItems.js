import "./TaskItems.css";
import React from "react";

class TaskItems extends React.Component {
  renderCheckbox() {
    const isDone = this.props.is_done;
    return (
      <div className="left floated content">
        <div className="ui fitted checkbox">
          <input
            type="checkbox"
            onClick={() => this.props.onClick()}
            defaultChecked={isDone === true ? true : false}
          ></input>
          <label></label>
        </div>
      </div>
    );
  }

  renderDeleteButton() {
    return (
      <form
        className="right floated content"
        onSubmit={() => this.props.onSubmit()}
      >
        <button className="circular ui basic icon button">
          <i className="times icon"></i>
        </button>
      </form>
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
}

export default TaskItems;
