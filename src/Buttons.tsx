import React from "react";

export type ButtonsType = {
    count: number
    addNumber: () => void
    reset: () => void
}
export const Buttons: React.FC<ButtonsType> = (props) => {
    const addNumberHandler = () => {props.addNumber()}
    const resetHandler = () => {props.reset()}
    return (
        <div>
            <button>{props.count}</button>
            <div>
                <button onClick={addNumberHandler}>inc</button>
                <button onClick={resetHandler}>reset</button>
            </div>
        </div>
    )
}