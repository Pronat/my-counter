import React, {useState} from 'react';
import s from './Counter.module.css'

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div className={s.block}>
            <div className={s.block2}>
                <div className={s.scoreboard}>
                    <text className={s.text}>{count}</text>
                </div>
                <div className={s.buttons}>
                    <button>inc</button>
                    <button>reset</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;