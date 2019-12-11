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
  const response = await todo.post("/api/todo", { ...formValues })

  dispatch({ type: CREATE_TODO, payload: response.data })
}

export const fetchTodos = () => async dispatch => {
  const response = await todo.get("/api/todo")

  dispatch({ type: FETCH_TODOS, payload: response.data })
}

export const fetchTodo = id => async dispatch => {
  const response = await todo.get(`/api/todo/${id}`)

  dispatch({ type: FETCH_TODO, payload: response.data })
}

export const editTodo = (id, formValues) => async dispatch => {
  const response = await todo.patch(`/api/todo/${id}`, formValues)

  dispatch({ type: EDIT_TODO, payload: response.data })
}

export const updateTodo = (id, isDone) => async dispatch => {
  const response = await todo.patch(`/api/todo/${id}`, { isDone: isDone })

  dispatch({ type: UPDATE_TODO, payload: response.data })
}

export const deleteTodo = id => async dispatch => {
  await todo.delete(`/api/todo/${id}`)

  dispatch({ type: DELETE_TODO, payload: id })
}
