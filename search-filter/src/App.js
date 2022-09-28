import logo from './logo.svg';
import './App.css';
import { Users } from "./user"
import React, { useState } from 'react'

import Table from './Table';

function App() {
  const [query, setQuery] = useState("")


  const search = (data) => {
    return data.filter(user => user.first_name.toLowerCase().includes(query))
}

  


  return (
    <div className="App">
      <input
        type="text"
        className='search'
        placeholder='Search...'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <Table data={search(Users)}/>
      
    </div>
  );
}

export default App;
