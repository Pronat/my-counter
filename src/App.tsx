import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

type CountType = number

function App() {
  let [count, setCount] = useState<CountType>(0)
  const addCounter = () => {
    if (count < 5) {
      count = Number(count) + 1
      setCount(count)
    }
    console.log(count)
  }

  const resetCounter = () => {
    count = 0
    setCount(count)
    console.log(count)
  }

  return (
    <div className="App">
    <Counter
        addCounter={addCounter}
        resetCounter={resetCounter}
        count={count}
    />
    </div>
  );
}

export default App;
