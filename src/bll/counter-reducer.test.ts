import counterReducer, {addNumberAC} from "./counter-reducer";

test('addNumber + 1 should be correct', () => {
    let startState = 5

    let endState = counterReducer(startState, addNumberAC())
    expect(endState).toBe(1)
})

