import React from 'react';
type StateType = number

type ActionType = resetToMinAT

type resetToMinAT = ReturnType<typeof resetToMinAC>
let initialState: StateType = 0
const MaxValueReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
       case "RESET-TO-MIN":
           return (state = action.minValue)
       default:
           return state
   }
};


export const resetToMinAC = (minValue: number) => {
    return{
        type: "RESET-TO-MIN", minValue
    }as const
}



export default MaxValueReducer;