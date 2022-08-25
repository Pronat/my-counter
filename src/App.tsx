import React, {useState} from 'react';
import './App.css';


export function App() {
    let [minValue, setMinValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(0)
    const [count, setCount] = useState<number>(0)


    const reset = () => {
        setCount(Number(minValue))
    }
    const addNumber = () => {
        if (count < maxValue) {
            setCount(count + 1)
        }

    }

    return (
        <div >
            <Buttons/>


        </div>
    );
}

export type ButtonsType = {

}

export const Buttons: React.FC<ButtonsType> = () => {
    return (
        <div>
        <button>inc</button>
        <button>reset</button>
        </div>
        )
    }
