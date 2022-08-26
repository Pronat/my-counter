import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import s from './Buttons.module.css'

export type ValuesType = {
    minValue: number
    maxValue: number
    setMinValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
    resetHandler: () => void
    error: string | null
    setError: Dispatch<SetStateAction<string | null>>
}

export const Values: React.FC<ValuesType> = (props) => {
    const onChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(Number(e.currentTarget.value))
    }
    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
    }

    const setResetHandler = () => {
        if (props.minValue === props.maxValue) {
            props.setError("Wrong!!!")
        }
        setToLocalStorageHandler()
        props.resetHandler()
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterMaxValue', JSON.stringify(props.maxValue))
        localStorage.setItem('counterMinValue', JSON.stringify(props.minValue))
    }

    const getFromLocalStorageHandler = () => {
        let valueMax = localStorage.getItem('counterMaxValue')
        let valueMin = localStorage.getItem('counterMinValue')
        if (valueMax && valueMin) {
            props.setMaxValue(JSON.parse(valueMax))
            props.setMinValue(JSON.parse(valueMin))
        }
    }

    const onKeyPressHandler = () => {
        props.setError(null)
    }

    return (
        <div>
            <div className={s.inputValue}>
                <div className={s.input}>Min value:
                    <input onChange={onChangeMinValue}
                           value={props.minValue}
                           onKeyPress={onKeyPressHandler}/></div>
                <div className={s.input}>Max value:
                    <input onChange={onChangeMaxValue}
                           value={props.maxValue}
                           onKeyPress={onKeyPressHandler}/></div>
            </div>
            <div className={s.buttonsValues}>
                <button onClick={setResetHandler}>set</button>
                {/*<button onClick={setToLocalStorageHandler}>set LS</button>*/}
                <button onClick={getFromLocalStorageHandler}>get LS</button>
            </div>
        </div>
    );
};
