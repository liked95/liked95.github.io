import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewTodo, updateTodo, fetchTodos, deleteTodo } from './todoSlice'

function TodoList() {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todoList.todos)
  const [title, setTitle] = useState('')

  useEffect(() => {
    dispatch(fetchTodos())
  }, []);


  const handleAdd = () => {
    const newTodo = {
      title,
      status: false,
    }
    dispatch(addNewTodo(newTodo))
    setTitle('')
  }

  const handleEdit = (id) => {
    const updatedTodo = {
      id,
      title: Math.random() + ' title',
      status: Math.random() > 0.5
    }
    dispatch(updateTodo(updatedTodo))
  }

  const handleDelete = id => {
    dispatch(deleteTodo(id))
  }


  return (
    <>
      <h1>TodoList</h1>
      <input
        type="text"
        placeholder="Enter todo ..."
        id="todo-input"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul id="todo-list">
        {todos.map((todo, index) => <li key={index}>
          <span>{todo.title}</span>
          <button onClick={() => handleEdit(todo.id)}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>)}
      </ul>
    </>
  )
}



export default TodoList