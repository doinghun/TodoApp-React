import React from "react"
import { connect } from "react-redux"
import { deleteTodo } from "../../actions"

function taskDelete(props) {
  console.log(props)
  return (
    <div className='right floated content'>
      <button
        className='circular ui basic icon button'
        onClick={() => props.deleteTodo(props.id)}
      >
        <i className='times icon'></i>
      </button>
    </div>
  )
}

export default connect(null, { deleteTodo })(taskDelete)
