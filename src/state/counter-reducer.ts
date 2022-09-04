import React from 'react';
type StateType = number

type ActionType = addNumberAT | resetToMinAT
type addNumberAT = ReturnType<typeof addNumberAC>
type resetToMinAT = ReturnType<typeof resetToMinAC>
let initialState: StateType = 0
const CounterReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
       case "ADD-NUMBER":
           return state + 1
       case "RESET-TO-MIN":
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

export const resetToMinAC = (minValue: number) => {
    return {
        type: "RESET-TO-MIN", minValue
    }
}


export default CounterReducer;