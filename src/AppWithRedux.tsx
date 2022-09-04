import React, {useState} from 'react';
import './App.css';
import {Buttons} from "./Buttons";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {addNumberAC} from "./state/counter-reducer";
import {resetToMinAC} from "./state/minValue-reducer";


export function AppWithRedux() {
    // let [minValue, setMinValue] = useState<number>(1)
    // let [maxValue, setMaxValue] = useState<number>(5)
    // const [count, setCount] = useState<number>(0)
    let count = useSelector<AppRootStateType, number>(state => state.counts)
    let minValue = useSelector<AppRootStateType, number>(state => state.minValue)
    let maxValue = useSelector<AppRootStateType, number>(state => state.maxValue)
    let dispatch = useDispatch()
    let [error, setError] = useState<string | null>(null)

    const addNumber = () => {
        let action = addNumberAC()
        dispatch(action)
        // setCount(count + 1)
    }
    const reset = () => {
        let action = resetToMinAC(minValue)
        dispatch(action)
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

