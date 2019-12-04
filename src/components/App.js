import "./App.css"
import React from "react"
import TaskAdd from "./TaskAdd"
import TaskList from "./TaskList"

class App extends React.Component {
  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <h2 align='center'>To Do List in React</h2>
        <TaskAdd onSubmit={this.onTaskSubmit} />
        <TaskList
          tasks={this.state.tasks}
          updateTask={this.updateTask}
          deleteTask={this.deleteTask}
        />
      </div>
    )
  }
}

export default App
