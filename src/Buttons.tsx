import React, {useState} from "react";
import s from './Buttons.module.css'
import {Values} from "./Values";

export type ButtonsType = {
    count: number
    addNumber: () => void
    reset: () => void
    minValue: number
    maxValue: number
}
export const Buttons: React.FC<ButtonsType> = (props) => {
    let [error, setError] = useState<string | null>(null)

    const addNumberHandler = () => {
        if (props.count === props.maxValue) {
            setError('Wrong input!!!')
            alert(error)
        }   else {
            setError("")
            props.addNumber()
        }
    }
    const resetHandler = () => {props.reset()}
    return (
        <div className={s.main}>
        <div className={s.buttonsMain}>
            <div className={s.red}>{error}</div>
            <button className={s.result}>
                <div className={props.count === props.maxValue || props.count === 0 ? s.red : ""}>{props.count}</div>
            </button>
            <div className={s.buttons}>
                <button disabled={props.count === props.maxValue} onClick={addNumberHandler}>inc</button>
                <button disabled={props.count === props.minValue} onClick={resetHandler}>reset</button>
            </div>
        </div>
            <div className={s.buttonsMain}>
                <Values />
            </div>
        </div>
    )
}