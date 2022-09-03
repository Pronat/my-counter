import counterReducer, {addNumberAC, resetToMinAC} from "./counter-reducer";

test('addNumber + 1 should be correct', () => {
    let startState = 5

    let endState = counterReducer(startState, addNumberAC())
    expect(endState).toBe(1)
})

test('Reset to min should be correct', () => {
    let startState = 5
    let minValue = 2
    let endState = counterReducer(startState, resetToMinAC(minValue))
    expect(endState).toBe(2)
})