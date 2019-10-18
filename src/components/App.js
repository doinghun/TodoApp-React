import './App.css'
import React from 'react';
import TaskAdd from './TaskAdd';
import TaskList from './TaskList';
import axios from 'axios';

class App extends React.Component {
    state = { 
        tasks: []
     }

    fetchTasks() {
        axios.get('http://localhost:4000/api/tasks')
        .then((res) => {
            this.setState({ tasks: res.data });
            console.log(this.state)
        })
        .catch((err) => {
            console.log(err)
        });
    }

    componentDidMount() {
        this.fetchTasks()
    }
    
    onTaskSubmit = (newTask) => {
        const newTaskTitle = {title: newTask}
        this.createTask(newTaskTitle);
    }

    createTask(newTask){
        axios.post('http://localhost:4000/api/tasks', newTask)
        .then(res => {
            const addedTask = res.data;
            console.log(`POST: task is added`, addedTask);
            this.fetchTasks();
        })
        .catch(error => console.error(error));
    }

    updateTask = (is_done, id) => {
        axios.put(`http://localhost:4000/api/tasks/${id}`,{
            is_done : is_done
        })
        .then(res => {
            console.log(res.data);
        })
        .catch((err) => {console.error(err)})
    }

    render(){
        return(
        <div className = "ui container" style={{marginTop : '10px'}}>
            <h2 align="center">To Do List in React</h2>
            <TaskAdd onSubmit={this.onTaskSubmit}/>
            <TaskList 
                tasks={this.state.tasks}
                updateTask={this.updateTask}
            />
        </div>
        )
    }
}

export default App