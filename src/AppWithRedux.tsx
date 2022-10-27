import React, {useState} from 'react';
import './App.css';
import {Buttons} from "./Buttons";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./bll/store";
import {addNumberAC, addNumberTC, InitialStateType, resetAC} from "./bll/counter-reducer";



export function AppWithRedux() {
    let [minValue, setMinValue] = useState<number>(1)
    let [maxValue, setMaxValue] = useState<number>(5)
    let count = useSelector<AppRootStateType, InitialStateType>(state => state.counts)
    let dispatch = useDispatch()
    let [error, setError] = useState<string | null>(null)

    const addNumber = () => {
        dispatch(addNumberTC())
    }
    const reset = () => {
        debugger
        let action = resetAC(minValue)
        dispatch(action)
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

