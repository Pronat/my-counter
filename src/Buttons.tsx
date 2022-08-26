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
            props.addNumber()
            setError(null)
        }
    }
    const resetHandler = () => {props.reset()}
    return (
        <div className={s.buttonsMain}>
            <span className={error ? s.red : s.message}>Error</span>
            <button className={s.result}>{props.count}</button>
            <div className={s.buttons}>
                <button disabled={props.count === props.maxValue} onClick={addNumberHandler}>inc</button>
                <button disabled={props.count === props.minValue} onClick={resetHandler}>reset</button>
            </div>
        </div>
    )
}