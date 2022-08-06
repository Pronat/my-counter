import React, {useState} from 'react';
import './App.css';
import s from '../src/components/Counter.module.css'
import Counter from "./components/Counter";
import SetForCounter from "./components/SetForCounter";


function App() {
    let [minValue, setMinValue] = useState<number | string>(0)
    let [maxValue, setMaxValue] = useState<number | string>(0)
    const [count, setCount] = useState<any>(0)


    const reset = () => {
        setCount(Number(minValue))
    }
    const addNumber = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }
        // if (maxValue <= minValue) {
        //    setCount("Error!!!")
        // }
    }

    return (
        <div className={s.main}>
            <SetForCounter
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                minValue={minValue}
                maxValue={maxValue}
                reset={reset}
            />

            <Counter
                count={count}
                setCount={setCount}
                reset={reset}
                addNumber={addNumber}
                max={maxValue}
                min={minValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
            />
        </div>
    );
}

export default App;
