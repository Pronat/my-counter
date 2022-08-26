import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import s from './Buttons.module.css'

export type ValuesType = {
    minValue: number
    maxValue: number
    setMinValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
}

export const Values: React.FC<ValuesType> = (props) => {
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    props.setMinValue(Number(e.currentTarget.value))
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    props.setMaxValue(Number(e.currentTarget.value))
    }

    return (
        <div>
        <div className={s.inputValue}>
            <div className={s.input} onChange={onChangeMinValue}>Min value: <input  value={props.minValue}/></div>
            <div className={s.input} onChange={onChangeMaxValue}>Max value: <input  value={props.maxValue}/></div>
        </div>
            <div className={s.buttonsValues}>
                <button>set</button>
                <button>set LS</button>
                <button>get LS</button>
            </div>
        </div>
    );
};
