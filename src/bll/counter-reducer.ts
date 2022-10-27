import React from 'react';
type InitialStateType = number

type ActionType = addNumberAT | resetAT
type addNumberAT = ReturnType<typeof addNumberAC>
type resetAT = ReturnType<typeof resetAC>
let initialState: InitialStateType = 0
const CounterReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
       case "ADD-NUMBER":
           return state + 1
       case "RESET":
           return state = action.minValue
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
    }
}


export default CounterReducer;