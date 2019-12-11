import React from "react"
import { connect } from "react-redux"
import { updateTodo } from "../../actions"

function taskUpdate(props) {
  console.log(props)
  const id = props.id
  const isDone = props.isDone
  return (
    <div className='left floated middle aligned content'>
      <div className='ui fitted checkbox'>
        <input
          type='checkbox'
          onClick={() => props.updateTodo(id, !isDone)}
          defaultChecked={isDone === true ? true : false}
        ></input>
        <label></label>
      </div>
    </div>
  )
}

export default connect(null, { updateTodo })(taskUpdate)
