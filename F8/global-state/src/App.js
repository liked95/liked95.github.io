import logo from './logo.svg';
import './App.css';
import { useStore, actions } from './store';
import {useRef} from 'react'

function App() {
  const [state, dispatch] = useStore()
  const { todoInput, todos } = state
  const inputRef = useRef()

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(""))
    inputRef.current.focus()
  }

  const handleDeleteTodo = (payload) => {
    
  }

  console.log("todo", todos)
  return (
    <div className="App">
      <input
      ref={inputRef}
        value={todoInput}
        placeholder="Enter todo"
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />

      <button onClick={handleAdd}>Add</button>
      {todos.map((todo, index) =>
        (<li key={index}>{todo}
        <button onClick={handleDeleteTodo(index)}>Delete</button></li>
        )
      )}
    </div>
  );
}

export default App;
