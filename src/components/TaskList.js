import React from 'react';

const TaskList = (props) => {
    const task = props.tasks;
    return <div>{task}</div>
}

export default TaskList;