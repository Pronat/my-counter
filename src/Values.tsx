import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import s from './Buttons.module.css'

export type ValuesType = {
    minValue: number
    maxValue: number
    setMinValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
    resetHandler: () => void
}

export const Values: React.FC<ValuesType> = (props) => {
    debugger
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    props.setMinValue(Number(e.currentTarget.value))
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    props.setMaxValue(Number(e.currentTarget.value))
    }

    const setResetHandler = () => {props.resetHandler()}

    return (
        <div>
        <div className={s.inputValue}>
            <div className={s.input} >Min value: <input onChange={onChangeMinValue}  value={props.minValue}/></div>
            <div className={s.input}>Max value: <input  onChange={onChangeMaxValue} value={props.maxValue}/></div>
        </div>
            <div className={s.buttonsValues}>
                <button onClick={setResetHandler}>set</button>
                <button>set LS</button>
                <button>get LS</button>
            </div>
        </div>
    );
};
