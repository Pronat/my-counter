import React from 'react';
type StateType = number

type ActionType = resetToMaxAT

type resetToMaxAT = ReturnType<typeof MaxValueReducer>
let initialState: StateType = 0
const MaxValueReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
       case "RESET-TO-MAX":
           return (state = action.maxValue)
       default:
           return state
   }
};


export const resetToMaxAC = (maxValue: number) => {
    return{
        type: "RESET-TO-MAX", maxValue
    }as const
}



export default MaxValueReducer;