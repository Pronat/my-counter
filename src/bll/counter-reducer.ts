import React from 'react';
import {Dispatch} from "redux";
export type InitialStateType = typeof initialState
const initialState = 0

type ActionType = addNumberAT | resetAT
type addNumberAT = ReturnType<typeof addNumberAC>
type resetAT = ReturnType<typeof resetAC>

export const CounterReducer = (state:InitialStateType = initialState, action: ActionType) => {
   switch (action.type) {
       case "ADD-NUMBER":
           let newState1 = state
           return newState1 + 1
       case "RESET":
           let state2 =  action.minValue
           return state2
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

export const addNumberTC = (minValue: number) => (dispatch: Dispatch) => {
    localStorage.setItem('counterValue', JSON.stringify(minValue))
    dispatch(addNumberAC())
}