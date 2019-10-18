import './TaskItems.css'
import React from 'react';

class TaskItems extends React.Component {

    renderCheckbox() {
        const isDone = this.props.is_done;
        if(isDone){
            return (
                <div className="left floated content">
                    <div className="ui fitted checkbox">
                        <input type="checkbox" onClick = {()=> this.props.onClick()} defaultChecked></input>
                        <label></label>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="left floated content">
                    <div className="ui fitted checkbox">
                        <input type="checkbox" onClick = {()=> this.props.onClick()}></input>
                        <label></label>
                    </div>
                </div>
            )
        }
    };

    renderDeleteButton() {
        return (
            <div className="right floated content">
                <div className="circular ui basic icon button">
                    <i className="times icon"></i>
                </div>
            </div>
        )
    };
    
    renderTask() {
        const isDone = this.props.is_done;
        if(isDone){
            return(
                <div className="content">
                    <div className="line-through">
                        {this.props.title}
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="content">{this.props.title}</div>
            );    
        }
    };

    render() {
        return(
            <div className="item">
                {this.renderCheckbox()}
                {this.renderDeleteButton()}
                {this.renderTask()}
            </div>
        );
    }    
}

export default TaskItems