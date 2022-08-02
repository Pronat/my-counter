import React, {useState} from 'react';
import s from './Counter.module.css'

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div className={s.block}>
            <div className={s.block2}>
                <div className={s.scoreboard}>
                    <button>{count}</button>
                </div>
                <button>inc</button>
                <button>reset</button>
            </div>
        </div>
    );
};

export default Counter;