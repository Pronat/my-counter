import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import s from "./Counter.module.css";

type SetForCounterPropsType = {
    setMaxValue: Dispatch<SetStateAction<number | string>>
    setMinValue: Dispatch<SetStateAction<number | string>>
    maxValue: number | string
    minValue: number | string
    reset: () => void
}

const SetForCounter = (props: SetForCounterPropsType) => {

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) =>
    {props.setMaxValue(e.currentTarget.value)}
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) =>
    {props.setMinValue(e.currentTarget.value)}

    return (
        <div className={s.block}>
            <div className={`${s.block2} ${s.setButtons}`}>
                <div>max value: <input className={s.button} onChange={onChangeMaxValue} value={props.maxValue} type="text"/></div>
                <div>min value: <input className={s.button} onChange={onChangeMinValue} value={props.minValue} type="text"/></div>
                <button className={s.button} onClick={props.reset}>set</button>
            </div>
        </div>
    );
};

export default SetForCounter;