import {applyMiddleware, combineReducers, legacy_createStore} from "redux";

import thunk from "redux-thunk";
import {CounterReducer} from "./counter-reducer";


export const rootReducer = combineReducers({
    counts: CounterReducer,

})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

type AppRootStore = typeof store



// @ts-ignore
window.store = store