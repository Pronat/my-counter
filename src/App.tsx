import React, {useState} from 'react';
import './App.css';
import s from '../src/components/Counter.module.css'
import Counter from "./components/Counter";
import SetForCounter from "./components/SetForCounter";


function App() {
    const [count, setCount] = useState<number>(0)
    let [minValue, setMinValue] = useState<number | string>(0)
    let [maxValue, setMaxValue] = useState<number | string>(5)


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
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
            />

            <Counter
                count={count}
                reset={reset}
                addNumber={addNumber}
                max={maxValue}
                min={minValue}
            />
        </div>
    );
}

export default App;
