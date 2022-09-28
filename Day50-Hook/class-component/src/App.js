import logo from './logo.svg';
import { useState } from "react"
import './App.css';
import Counter from './component/Counter';

function App() {
  const [isShow, setIsShow] = useState(true)

  function handleToggle() {
    setIsShow(!isShow)
  }

  return (
    <div className="App">
      {console.log(isShow)}
      <button onClick={() => handleToggle()}>Toggle Show</button>
      {isShow ?? <Counter color={"red"} bg={"black"} />}
    </div>
  );
}

export default App;
