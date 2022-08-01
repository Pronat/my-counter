import React, {useEffect, useState} from 'react';
import './App.css';

type CountType = number

function App() {


    let [count, setCount] = useState<CountType>(0)
    const addCounter = () => {
        if (count < 100) {
           let newCount = Number(count) + 1
            setCount(newCount)
        }
        console.log(count)
    }

    const resetCounter = () => {
        setCount(0)
        console.log(count)
    }

    return (
        <div className="App">
            <button>inc</button>
            <button>reset</button>

        </div>
    );
}

export default App;
