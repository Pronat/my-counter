import React, {useState} from 'react';
import './App.css';
import {Buttons} from "./Buttons";


export function App() {
    // let [minValue, setMinValue] = useState<number>(0)
    // let [maxValue, setMaxValue] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
    const minValue = 0
    const maxValue = 8


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
            />
        </div>
    );
}

