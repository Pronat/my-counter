import React from 'react';
import s from "./Counter.module.css";

type SetForCounterPropsType = {
    maxValue: number
    minValue: number
}

const setMax = () => {

}
const setMin = () => {

}

const SetForCounter = (props: SetForCounterPropsType) => {
    return (
        <div className={s.block}>
            <div className={`${s.block2} ${s.setButtons}`}>
                <input className={s.button} onChange={setMax} value={props.maxValue} type="text"/>
                <input className={s.button} onChange={setMin} value={props.minValue} type="text"/>
                <button className={s.button}>set</button>
            </div>
        </div>
    );
};

export default SetForCounter;