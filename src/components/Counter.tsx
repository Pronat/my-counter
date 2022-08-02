import React, {useState} from 'react';
import s from './Counter.module.css'
import Buttons from "./Buttons";

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const maxValue = 5
    const reset = () => {
        setCount(0)
    }
    const addNumber = () => {
        if (count < 5) {
            setCount(count + 1)
        }
    }



    return (
        <div>
            <Buttons
            count={count}
            maxValue={maxValue}
            reset={reset}
            addNumber={addNumber}
            />
        </div>
    );
};

export default Counter;