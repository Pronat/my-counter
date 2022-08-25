import React, {useState} from "react";

export type ButtonsType = {
    count: number
    addNumber: () => void
    reset: () => void
}
export const Buttons: React.FC<ButtonsType> = (props) => {
    let [error, setError] = useState<string | null>(null)

    const addNumberHandler = () => {
        if (props.count === 10) {
            setError('Wrong input')
        }   else {
            props.addNumber()
            setError(null)
        }
    }
    const resetHandler = () => {props.reset()}
    return (
        <div>
            <button>{props.count}</button>
            <span className>{error}</span>
            <div>
                <button disabled={props.count === 10} onClick={addNumberHandler}>inc</button>
                <button disabled={props.count === 0} onClick={resetHandler}>reset</button>
            </div>
        </div>
    )
}