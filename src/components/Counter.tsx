import React, {useState} from 'react';
import s from './Counter.module.css'

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div className={s.block}>
            <button>{count}</button>
            <button>inc</button>
            <button>reset</button>
        </div>
    );
};

export default Counter;