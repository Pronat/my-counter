import MinValueReducer, {resetToMinAC} from "./minValue-reducer";


test('Reset to min should be correct', () => {
    let startState = 5
    let minValue = 2
    let endState = MinValueReducer(startState, resetToMinAC(minValue))
    expect(endState).toBe(2)
})