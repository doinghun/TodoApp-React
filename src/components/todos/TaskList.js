import React from "react"
import { connect } from "react-redux"
import { fetchTodos } from "../../actions"
import TaskDelete from "./TaskDelete"
import TaskUpdate from "./TaskUpdate"

class TaskList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos()
  }
  renderAdmin(task) {
    return (
      <>
        <TaskUpdate id={task.id} isDone={task.isDone} />
        <TaskDelete id={task.id} />
      </>
    )
  }

  renderList() {
    return this.props.tasks.map(task => {
      return task.isDone ? (
        <div
          className='item'
          key={task.id}
          style={{ textDecorationLine: "line-through" }}
        >
          {this.renderAdmin(task)}
          {task.title}
        </div>
      ) : (
        <div className='item' key={task.id}>
          {this.renderAdmin(task)}
          {task.title}
        </div>
      )
    })
  }

  render() {
    return (
      <div className='task-list'>
        <div className='ui relaxed divided list'>{this.renderList()}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { tasks: Object.values(state.tasks) }
}
export default connect(mapStateToProps, { fetchTodos })(TaskList)
