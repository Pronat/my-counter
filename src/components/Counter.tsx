import React, {useState} from 'react';
import s from './Counter.module.css'

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const reset = () => {
        setCount(0)
    }
    const addNumber = () => {
        if (count < 5) {
        setCount(count +1)
    }}
    return (
        <div className={s.block}>
            <div className={s.block2}>
                <div className={s.scoreboard}>
                    <text className={s.text}>{count}</text>
                </div>
                <div className={s.buttons}>
                    <button onClick={addNumber}>inc</button>
                    <button onClick={reset}>reset</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;