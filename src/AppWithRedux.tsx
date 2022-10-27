import React, {useState} from 'react';
import './App.css';
import {Buttons} from "./Buttons";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {addNumberAC, resetAC} from "./bll/counter-reducer";



export function AppWithRedux() {
    let [minValue, setMinValue] = useState<number>(1)
    let [maxValue, setMaxValue] = useState<number>(5)
    // const [count, setCount] = useState<number>(0)
    let count = useSelector<AppRootStateType, number>(state => state.counts)
    let dispatch = useDispatch()
    let [error, setError] = useState<string | null>(null)

    const addNumber = () => {
        dispatch(addNumberAC())
        // setCount(count + 1)
    }
    const reset = () => {
        dispatch(resetAC(minValue))
        // setCount(Number(minValue))
    }


    return (
        <div>
            <Buttons
                count={count}
                addNumber={addNumber}
                reset={reset}
                minValue={minValue}
                maxValue={maxValue}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                error={error}
                setError={setError}
            />
        </div>
    );
}

