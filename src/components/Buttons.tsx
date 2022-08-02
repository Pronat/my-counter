import React from 'react';
import s from "./Counter.module.css";

type ButtonsPropsType = {
    count: number
    maxValue: number
    reset: () => void
    addNumber: () => void
}

const Buttons = (props: ButtonsPropsType) => {
    return (
        <div className={s.block}>
            <div className={s.block2}>
                <div className={s.scoreboard}>
                    <text className={props.count !== props.maxValue ? s.text : s.textError}>{props.count}</text>
                </div>
                <div className={s.buttons}>
                    <button onClick={props.addNumber} disabled={props.count === props.maxValue}>inc</button>
                    <button onClick={props.reset} disabled={props.count === 0}>reset</button>
                </div>
            </div>
        </div>
    );
};

export default Buttons;