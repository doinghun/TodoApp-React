import React from "react"
import Navbar from "./Navbar"
import TaskAdd from "./todos/TaskAdd"
import TaskList from "./todos/TaskList"
import { Container } from "./styledComponents"

class App extends React.Component {
  render() {
    return (
      <Container>
        <Navbar />
        <h2 align='center'>To Do List in React</h2>
        <div className='ui segment'>
          <TaskAdd />
          <TaskList />
        </div>
      </Container>
    )
  }
}
export default App
