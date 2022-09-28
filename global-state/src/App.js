
import './App.css';


import TodoList from './components/Todos';


// Global state cần có Context, Reducer

function App() {
  
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
