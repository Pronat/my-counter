import {combineReducers, legacy_createStore} from "redux";
import counterReducer from "./counter-reducer";


export const rootReducer = combineReducers({
    counts: counterReducer,

})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)

type AppRootStore = typeof store



// @ts-ignore
window.store = store