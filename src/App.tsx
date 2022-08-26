import React, {useState} from 'react';
import './App.css';
import {Buttons} from "./Buttons";


export function App() {
    let [minValue, setMinValue] = useState<number>(1)
    let [maxValue, setMaxValue] = useState<number>(8)
    const [count, setCount] = useState<number>(0)

    const addNumber = () => {
        setCount(count + 1)
    }
    const reset = () => {
        setCount(Number(minValue))
    }


    return (
        <div>
            <Buttons
                count={count}
                addNumber={addNumber}
                reset={reset}
                minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
            />
        </div>
    );
}

