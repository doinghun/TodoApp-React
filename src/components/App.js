import React from 'react';
import TaskAdd from './TaskAdd';
import TaskList from './TaskList';

class App extends React.Component {
    state = { task: "" }

    onTaskSubmit = (newTask) => {
        this.setState({ task: newTask})
    }

    render(){
        return(
        <div className = "ui container" style={{marginTop : '10px'}}>
            <h2 align="center">To Do List in React</h2>
            <TaskAdd onSubmit={this.onTaskSubmit}/>
            <TaskList tasks={this.state.task}/>
        </div>
        )
    }
}

export default App