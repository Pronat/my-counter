import React, {useState} from 'react';
import './App.css';
import s from '../src/components/Counter.module.css'
import Counter from "./components/Counter";
import SetForCounter from "./components/SetForCounter";


function App() {
    const [count, setCount] = useState<number>(0)
    const maxValue = 5
    const minValue = 0
    const reset = () => {
        setCount(0)
    }
    const addNumber = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }

    return (
        <div className={s.main}>
            <SetForCounter
                maxValue={maxValue}
                minValue={minValue}
            />
            <Counter
                count={count}
                maxValue={maxValue}
                minValue={minValue}
                reset={reset}
                addNumber={addNumber}
            />
        </div>
    );
}

export default App;
