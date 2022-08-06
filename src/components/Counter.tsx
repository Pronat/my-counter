import React, {Dispatch, SetStateAction, useState} from 'react';
import s from './Counter.module.css'
import Buttons from "./Buttons";
import SetForCounter from "./SetForCounter";

type CounterPropsType = {
    count: number
    maxValue: number | string
    minValue: number | string
    reset: () => void
    addNumber: () => void
    setCount: any
    setMinValue: Dispatch<SetStateAction<number | string>>
    setMaxValue: Dispatch<SetStateAction<number | string>>
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
                setCount={props.setCount}
                setMinValue={props.setMinValue}
                setMaxValue={props.setMaxValue}
            />
        </div>
    );
};

export default Counter;