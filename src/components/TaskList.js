import './TaskList.css' 
import React from 'react';

const TaskList = (props) => {
    const taskTitle = props.tasks.map((task) => {
        return(<div className="item">
            <div className="right floated content">
                <div className="circular ui basic icon button">
                    <i class="times icon"></i>
                </div>
            </div>
            <div className="content" key={task.id}>{task.title}</div>
        </div>
        )
    });
    return (
    <div className="task-list">
        <div className="ui relaxed divided list">
            {taskTitle}
        </div>
    </div>
    )
}

export default TaskList;