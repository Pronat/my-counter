import React, {Dispatch, SetStateAction} from 'react';
import s from "./Counter.module.css";

type ButtonsPropsType = {
    count: any
    setCount: any
    maxValue: number | string
    minValue: number | string
    reset: () => void
    addNumber: () => void
    setMinValue: Dispatch<SetStateAction<number | string>>
    setMaxValue: Dispatch<SetStateAction<number | string>>
}

const Buttons = (props: ButtonsPropsType) => {
    const setToLocalStorageHandler = () => {
        localStorage.setItem('minValue', JSON.stringify(props.minValue))
        localStorage.setItem('maxValue', JSON.stringify(props.maxValue))
    }
    const getFromLocalStorageHandler = () => {
        let newValueMin = localStorage.getItem('minValue')
        let newValueMax = localStorage.getItem('maxValue')
        if (newValueMin) {
            props.setMinValue(JSON.parse(newValueMin))
        }
        if (newValueMax) {
            props.setMaxValue(JSON.parse(newValueMax))
        }
    }


    return (
        <div className={s.block}>
            <div className={s.block2}>
                <div className={s.scoreboard}>
                    <text className={props.count !== props.maxValue ? s.text : s.textError}>{props.count}</text>
                </div>
                <div className={s.buttons}>
                    <button onClick={props.addNumber} disabled={props.count === props.maxValue}>inc</button>
                    <button onClick={props.reset} disabled={props.count === props.minValue}>reset</button>
                    <button onClick={setToLocalStorageHandler}>set to loc st</button>
                    <button onClick={getFromLocalStorageHandler}>get from loc st</button>
                </div>
            </div>
        </div>
    );
};

export default Buttons;