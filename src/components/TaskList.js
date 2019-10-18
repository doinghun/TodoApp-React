import './TaskList.css' 
import React from 'react';
import TaskDeleteButton from './TaskDeleteButton'

class TaskList extends React.Component{
    
    taskTitle() {
        return(
            this.props.tasks.map((task) => {
                return(
                <div className="item"  key={task.id}>
                     <div className="left floated content">
                        <div className="ui fitted checkbox">
                            <input type="checkbox" onChange = {() => this.props.updateTask(task.is_done,task.id)}></input>
                            <label></label>
                        </div>
                    </div>
                    <TaskDeleteButton/>
                    <div className="content">{task.title}</div>
                </div>
                )
            })
        )
    }

    render(){
        return(
            <div className="task-list">
                <div className="ui relaxed divided list">
                {this.taskTitle()}
                </div>
            </div>
        )
    }
}

export default TaskList;