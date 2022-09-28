
import '../index.css';

import { useReducer, useRef } from 'react'
import reducer, { initState } from './reducer';
import { setJob, addJob, deleteJob } from './actions'


function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const { job, jobs } = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(""))
    inputRef.current.focus()
  }

  // console.log(state);
  return (
    <div style={{ padding: '0 20px' }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo"
        onChange={e => dispatch(setJob(e.target.value))}

      />
      <button onClick={handleSubmit} >Add todo</button>
      <ul>
        {jobs.map((job, index) =>
          <li key={index}>
            {job}
            <button onClick={() => dispatch(deleteJob(index))}>X</button>
          </li>)}
      </ul>
    </div>
  );
}

export default App;
