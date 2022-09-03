import React from 'react';
type StateType = number

type ActionType = any
type addNumberAT = ReturnType<typeof addNumberAC>
const CounterReducer = (state: StateType, action: ActionType) => {
   switch (action.type) {
       case "ADD-NUMBER":
           return state
       case "":
           return state
   }
};

export const addNumberAC = (countValue: number) => {
    return{
        type: "ADD-NUMBER", countValue: countValue
    }
}



export default CounterReducer;