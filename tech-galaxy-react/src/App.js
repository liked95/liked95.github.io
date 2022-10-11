import Layout from './components/Layout';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Home from 'pages/Home/index';
import SmartPhone from 'pages/SmartPhone/index';
import Detail from 'pages/Detail/index';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Home />} />
          <Route path="/smartphone"  element={<SmartPhone />} />
          <Route path="/detail"  element={<Detail />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
