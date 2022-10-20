import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todoSlice'

function TodoList() {
  const todos = useSelector(state => state.todos.todos)
  console.log(todos);
  
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')

  const handleChangeTodo = e => {
    setTodo(e.target.value)
  }

  const handleAddTodo = e => {
    if (e.keyCode==13) {
      dispatch(addTodo(todo))
    }
  }
  return (
    <>
      <h1>TodoList</h1>
      <input
        type="text"
        placeholder="Enter todo ..."
        id="todo-input"
        value={todo}
        onChange={handleChangeTodo}
        onKeyDown={handleAddTodo}
      />
      <ul id="todo-list">
      {todos.map(todo => <li key={todo.index}>{todo.title}</li>)}
      </ul>
    </>
  )
}



export default TodoList