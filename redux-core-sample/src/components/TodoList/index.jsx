import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux'

function TodoList() {
  const todos = useSelector(state => state.todos)
  const [todo, setTodo] = useState('')
  const handleChangeTodo = e => {
    setTodo(e.target.value)
    console.log(e);
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
      />
      <ul id="todo-list"></ul>
    </>
  )
}

export default TodoList