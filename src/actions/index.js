import {
  CREATE_TODO,
  FETCH_TODO,
  FETCH_TODOS,
  EDIT_TODO,
  DELETE_TODO,
  UPDATE_TODO
} from "./types"
import todo from "../api/todo"

export const createTodo = formValues => async dispatch => {
  const response = await todo.post("/todo", { ...formValues })

  dispatch({ type: CREATE_TODO, payload: response.data })
}

export const fetchTodos = () => async dispatch => {
  const response = await todo.get("/todo")

  dispatch({ type: FETCH_TODOS, payload: response.data })
}

export const fetchTodo = id => async dispatch => {
  const response = await todo.get(`/todo/${id}`)

  dispatch({ type: FETCH_TODO, payload: response.data })
}

export const editTodo = (id, formValues) => async dispatch => {
  const response = await todo.patch(`/todo/${id}`, formValues)

  dispatch({ type: EDIT_TODO, payload: response.data })
}

export const updateTodo = (id, isDone) => async dispatch => {
  const response = await todo.patch(`/todo/${id}`, { isDone: isDone })

  dispatch({ type: UPDATE_TODO, payload: response.data })
}

export const deleteTodo = id => async dispatch => {
  await todo.delete(`/todo/${id}`)

  dispatch({ type: DELETE_TODO, payload: id })
}
