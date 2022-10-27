import React from 'react';
import {Dispatch} from "redux";
type InitialStateType = typeof initialState
const initialState = {
    value: 0
}

type ActionType = addNumberAT | resetAT
type addNumberAT = ReturnType<typeof addNumberAC>
type resetAT = ReturnType<typeof resetAC>

export const CounterReducer = (state:InitialStateType = initialState, action: ActionType) => {
   switch (action.type) {
       case "ADD-NUMBER":
           return {
               ...state,
               value: state.value + 1
           }
       case "RESET":
           return {
               ...state,
               value: action.minValue
           }
       default:
           return state
   }
};

export const addNumberAC = () => {
    return{
        type: "ADD-NUMBER"
    }as const
}

export const resetAC = (minValue: number) => {
    return {
        type: "RESET", minValue
    }as const
}

export const addNumberTC = (count: number) => (dispatch: Dispatch) => {
    localStorage.setItem('counterValue', JSON.stringify(count))
    dispatch(addNumberAC())
}