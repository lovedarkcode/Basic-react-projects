import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = {
  todos: []
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload}
      state.todos.push(todo)
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload
      const todo = state.todos.find((todo) => todo.id === id)
      if (todo) {
        todo.text = text
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }
  }
})

export const { addTodo, removeTodo, updateTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
