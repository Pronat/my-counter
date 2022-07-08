import React, {MouseEventHandler} from 'react';

type CounterType = {
    addCounter: MouseEventHandler<HTMLButtonElement>
    resetCounter: MouseEventHandler<HTMLButtonElement>
    count: number
}


export const Counter = (props: CounterType) => {
    let incTrue = props.count ===  5
    let resetTrue = props.count === 0

    let countClass = incTrue ? "error" : "button"

    return (

        <div className="buttons">
            <button className={countClass}>{props.count}</button>
            <div>
            <button
                className={countClass}
                disabled={incTrue}
                onClick={props.addCounter}
            >inc</button>
            <button
                className="button"
                disabled={resetTrue}
                onClick={props.resetCounter}
            >reset</button>
            </div>
        </div>
    );
};
