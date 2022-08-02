import React, {useEffect, useState} from 'react';
import './App.css';
import s from '../src/components/Counter.module.css'
import Counter from "./components/Counter";
import SetForCounter from "./components/SetForCounter";

type CountType = number

function App() {


    return (
        <div className={s.main}>
            <SetForCounter/>
            <Counter/>
        </div>
    );
}

export default App;
