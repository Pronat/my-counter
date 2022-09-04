import {combineReducers, legacy_createStore} from "redux";
import counterReducer from "./counter-reducer";
import MinValueReducer from "./minValue-reducer";
import MaxValueReducer from "./maxValue-reducer";


export const rootReducer = combineReducers({
    counts: counterReducer,
    minValue: MinValueReducer,
    maxValue: MaxValueReducer,
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store