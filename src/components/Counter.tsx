import React, {useState} from 'react';
import s from './Counter.module.css'
import Buttons from "./Buttons";
import SetForCounter from "./SetForCounter";

type CounterPropsType = {
    count: number
    maxValue: number
    minValue: number
    reset: () => void
    addNumber: () => void
}

const Counter = (props: CounterPropsType) => {
    return (
        <div className={s.main}>
            <Buttons
                count={props.count}
                maxValue={props.maxValue}
                minValue={props.minValue}
                reset={props.reset}
                addNumber={props.addNumber}
            />
        </div>
    );
};

export default Counter;