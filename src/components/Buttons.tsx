import React from 'react';
import s from "./Counter.module.css";

type ButtonsPropsType = {
    count: number
    max: number | string
    min: number | string
    reset: () => void
    addNumber: () => void
}

const Buttons = (props: ButtonsPropsType) => {
    return (
        <div className={s.block}>
            <div className={s.block2}>
                <div className={s.scoreboard}>
                    <text className={props.count !== props.max ? s.text : s.textError}>{props.count}</text>
                </div>
                <div className={s.buttons}>
                    <button onClick={props.addNumber} disabled={props.count === props.max || props.max <= props.min}>inc</button>
                    <button onClick={props.reset} disabled={props.count === props.min}>reset</button>
                </div>
            </div>
        </div>
    );
};

export default Buttons;