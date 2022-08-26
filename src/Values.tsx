import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import s from './Buttons.module.css'

export type ValuesType = {
    minValue: number
    maxValue: number
    setMinValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
    resetHandler: () => void
}

export const Values: React.FC<ValuesType> = (props) => {
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    props.setMinValue(Number(e.currentTarget.value))
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    props.setMaxValue(Number(e.currentTarget.value))
    }

    const setResetHandler = () => {
        setToLocalStorageHandler()
        props.resetHandler()}

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterMaxValue', JSON.stringify(props.maxValue))
        localStorage.setItem('counterMinValue', JSON.stringify(props.minValue))
    }

    const getFromLocalStorageHandler = () => {
        let valueMax = localStorage.get('counterMaxValue')
        let valueMin = localStorage.get('counterMinValue')
        if (valueMax && valueMin) {
            props.setMaxValue(JSON.parse(valueMax))
            props.setMinValue(JSON.parse(valueMin))
        }
    }

    return (
        <div>
        <div className={s.inputValue}>
            <div className={s.input} >Min value: <input onChange={onChangeMinValue}  value={props.minValue}/></div>
            <div className={s.input}>Max value: <input  onChange={onChangeMaxValue} value={props.maxValue}/></div>
        </div>
            <div className={s.buttonsValues}>
                <button onClick={setResetHandler}>set</button>
                {/*<button onClick={setToLocalStorageHandler}>set LS</button>*/}
                <button onClick={getFromLocalStorageHandler}>get LS</button>
            </div>
        </div>
    );
};
