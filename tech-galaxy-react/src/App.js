import Layout from './components/Layout';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from 'pages/Home/index';
import SmartPhone from 'pages/SmartPhone/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
          <Route path="/smartphone"  element={<SmartPhone />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
