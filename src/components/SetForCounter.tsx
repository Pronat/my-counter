import React, {useState} from 'react';
import s from "./Counter.module.css";

type SetForCounterPropsType = {

}





const SetForCounter = (props: SetForCounterPropsType) => {
    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)

    return (
        <div className={s.block}>
            <div className={`${s.block2} ${s.setButtons}`}>
                <div>max value<input className={s.button} onChange={} value={maxValue} type="text"/></div>
                <div>min value<input className={s.button} onChange={} value={minValue} type="text"/></div>
                <button className={s.button}>set</button>
            </div>
        </div>
    );
};

export default SetForCounter;