import React, {Dispatch, SetStateAction} from 'react';
import s from './Buttons.module.css'

export type ValuesType = {
    minValue: number
    maxValue: number
    setMinValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
}

export const Values: React.FC<ValuesType> = (props) => {
    return (
        <div>
        <div className={s.inputValue}>
            <div className={s.input}>Min value: <input  value={props.minValue}/></div>
            <div className={s.input}>Max value: <input  value={props.maxValue}/></div>
        </div>
            <div className={s.buttonsValues}>
                <button>set</button>
                <button>set LS</button>
                <button>get LS</button>
            </div>
        </div>
    );
};
