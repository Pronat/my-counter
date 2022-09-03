import React from 'react';
type StateType = number

type ActionType = addNumberAT
type addNumberAT = ReturnType<typeof addNumberAC>
let initialState: StateType = 0
const CounterReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
       case "ADD-NUMBER":
           return state + 1
       default:
           return state
   }
};

export const addNumberAC = () => {
    return{
        type: "ADD-NUMBER"
    }as const
}



export default CounterReducer;