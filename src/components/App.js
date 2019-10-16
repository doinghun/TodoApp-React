import './App.css'
import React from 'react';
import TaskAdd from './TaskAdd';
import TaskList from './TaskList';
import axios from 'axios';

class App extends React.Component {
    state = { tasks: [] }

    // onTaskSubmit = (newTask) => {
    //     this.setState({ task: newTask})
    // }

    fetchTasks() {
        axios.get('http://localhost:4000/api/tasks')
        .then((res) => {
            this.setState({ tasks: res.data });
            console.log(this.state.tasks)
        })
        .catch((err) => {
            console.log(err)
        });
    }

    componentDidMount() {
        this.fetchTasks()
    }

    render(){
        return(
        <div className = "ui container" style={{marginTop : '10px'}}>
            <h2 align="center">To Do List in React</h2>
            <TaskAdd onSubmit={this.onTaskSubmit}/>
            <TaskList tasks={this.state.tasks}/>
        </div>
        )
    }
}

export default App