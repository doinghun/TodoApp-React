import React from 'react';

class TaskAdd extends React.Component{
    state = { task: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.task)
    }

    render(){
        return(<div className = "ui segment">
            <form className = "ui form" onSubmit={this.onFormSubmit}>
                <div className = "field">
                    <input type="text" value={this.state.task} onChange={(e)=> this.setState({task: e.target.value})} placeholder="What Needs To Be Done?"/>   
                </div>
            </form>            
        </div>
        )
    }
}

export default TaskAdd;