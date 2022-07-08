import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

type CountType = number

function App() {
    const [value, setValue] = useState<number>(0)
    const addNumber = () => {
        setValue(value + 1)
    }
    const SetToLocalStorage = () => {
        localStorage.setItem("counterValue", value.toString())
    }
    const GetFromLocalStorage = () => {
        let getValue = localStorage.getItem("counterValue")
        if (getValue) {
            setValue(JSON.parse(getValue))
        }
    }


    return (
        <div>
            <h1>{value}</h1>
            <button onClick={addNumber}>add NUmber</button>
            <button onClick={SetToLocalStorage}>SetToLocalStorage</button>
            <button onClick={GetFromLocalStorage}>GetFromLocalStorage</button>
        </div>
    )
}


// let [count, setCount] = useState<CountType>(0)
// const addCounter = () => {
//   if (count < 5) {
//     count = Number(count) + 1
//     setCount(count)
//   }
//   console.log(count)
// }
//
// const resetCounter = () => {
//   setCount(0)
//   console.log(count)
// }
//
// return (
//   <div className="App">
//   <Counter
//       addCounter={addCounter}
//       resetCounter={resetCounter}
//       count={count}
//   />
//   </div>
// );
// }

export default App;
