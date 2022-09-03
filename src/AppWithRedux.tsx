import React, {useState} from 'react';
import './App.css';
import {Buttons} from "./Buttons";


export function AppWithRedux() {
    let [minValue, setMinValue] = useState<number>(1)
    let [maxValue, setMaxValue] = useState<number>(5)
    const [count, setCount] = useState<number>(0)
    let [error, setError] = useState<string | null>(null)

    const addNumber = () => {
        setCount(count + 1)
    }
    const reset = () => {
        setCount(Number(minValue))
    }

    const setMaxValueFunction = () => {
        setMaxValue()
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
                error={error}
                setError={setError}
            />
        </div>
    );
}

