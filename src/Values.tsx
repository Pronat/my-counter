import React from 'react';
import s from './Buttons.module.css'

export type ValuesType = {}

export const Values: React.FC<ValuesType> = (props) => {
    return (
        <div>
            <div className={s.input}>Max value: <input  value={"Value1"}/></div>
            <div className={s.input}>Min value: <input  value={"Vae2"}/></div>
        </div>
    );
};
