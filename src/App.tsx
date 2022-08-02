import React, {useEffect, useState} from 'react';
import './App.css';
import s from '../src/components/Counter.module.css'
import Counter from "./components/Counter";

type CountType = number

function App() {


    return (
        <div className={s.main}>
            <Counter/>
        </div>
    );
}

export default App;
