import React from "react"
import { connect } from "react-redux"
import { createTodo } from "../../actions"

class TaskAdd extends React.Component {
  state = { title: "", isDone: false }

  onFormSubmit = event => {
    event.preventDefault()
    this.props.createTodo(this.state)
    this.setState({ title: "" })
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <input
              type='text'
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
              placeholder='What Needs To Be Done?'
            />
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, { createTodo })(TaskAdd)
