import React, { useState, useEffect } from 'react'
// import logo from './logo.svg';
// import Counter from "./UseState/Counter"
// // import Content from "./UseEffect/Content"
// import Clock from "./UseEffect/Clock"
// import API from "./UseEffect/API"
// import RefContent from './UseRef/RefContent'
// import Post from './React-Memo/Post'
// import Content from './CustomHook/Content'
// import ColorBox from './CustomHook/Content/ColorBox';
// import Counter from './UseReducer/Counter';
// import TodoList from './UseReducer/TodoList';
import Blog from './UseContext/Blog';
import './App.css';

function App() {
  // const [isShowClock, setIsShowClock] = useState(true)

  return (
    <div className="App" >
      <Blog />
    </div>
  );
}

export default App;
