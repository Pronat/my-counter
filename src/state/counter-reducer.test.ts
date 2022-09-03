import counterReducer, {addNumberAC} from "./counter-reducer";

test('addNumber + 1 should be correct', () => {
    let startState = 0

    let endState = counterReducer(startState, addNumberAC(countValue))
})