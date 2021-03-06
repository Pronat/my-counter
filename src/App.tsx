import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

type CountType = number

function App() {
//     const [value, setValue] = useState<number>(0)
//
//     const addValue = () => {
//         setValue(value + 1)
//     }
//     const setLocalStorageHandler = () => {
//         localStorage.setItem("addValue", JSON.stringify(value))
//     }
//     const getLocalStorageHandler = () => {
//         let newGet = localStorage.getItem("addValue")
//         if (newGet) {
//         setValue(JSON.parse(newGet))
//     }}
//     const clearLocalStorageHandler = () => {
//         localStorage.clear()
//     }
//     const removeItemLocalStorageHandler = () => {
//         localStorage.removeItem("addValue")
//     }
//
//
//     return (
//         <div>
//             <h1>{value}</h1>
//             <button onClick={addValue}>inc</button>
//             {/*<button onClick={setLocalStorageHandler}>setLocalStorage</button>*/}
//             {/*<button onClick={getLocalStorageHandler}>getLocalStorage</button>*/}
//             {/*<button onClick={clearLocalStorageHandler}>clearLocalStorage</button>*/}
//             {/*<button onClick={removeItemLocalStorageHandler}>removeItemLocalStorage</button>*/}
//         </div>
//     )
//
// }


let [count, setCount] = useState<CountType>(0)
const addCounter = () => {
  if (count < 5) {
    count = Number(count) + 1
    setCount(count)
  }
  console.log(count)
}

const resetCounter = () => {
  setCount(0)
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
