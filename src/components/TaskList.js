import "./TaskList.css"
import React from "react"
import TaskItems from "./TaskItems"

class TaskList extends React.Component {
  taskTitle() {
    return this.props.tasks.map((task, index) => {
      return (
        <TaskItems
          key={task.id}
          {...task}
          index={index}
          updateTask={this.props.updateTask}
          deleteTask={this.props.deleteTask}
        />
      )
    })
  }

  render() {
    return (
      <div className='task-list'>
        <div className='ui relaxed divided list'>{this.taskTitle()}</div>
      </div>
    )
  }
}

export default TaskList
