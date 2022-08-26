import React, {useState} from "react";
import s from './Buttons.module.css'

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
            setError('Wrong input')
        }   else {
            setError(null)
            props.addNumber()
        }
    }
    const resetHandler = () => {props.reset()}
    return (
        <div className={s.buttonsMain}>
            <span className={error ? s.red : s.message}>{error}</span>
            <button className={s.result}>
                <div className={error || props.count === 0 ? s.red : ""}>{props.count}</div>
            </button>
            <div className={s.buttons}>
                <button disabled={props.count === (props.maxValue + 1)} onClick={addNumberHandler}>inc</button>
                <button disabled={props.count === props.minValue} onClick={resetHandler}>reset</button>
            </div>
        </div>
    )
}