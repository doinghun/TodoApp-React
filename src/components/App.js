import React from "react"
import TaskAdd from "./todos/TaskAdd"
import TaskList from "./todos/TaskList"
import { Container } from "./styledcomponents"

class App extends React.Component {
  render() {
    return (
      <Container>
        <h2 align='center'>To Do List in React</h2>
        <TaskAdd />
        <TaskList />
      </Container>
    )
  }
}
export default App
