import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import counterReducer from "./counter-reducer";
import thunk from "redux-thunk";


export const rootReducer = combineReducers({
    counts: counterReducer,

})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

type AppRootStore = typeof store



// @ts-ignore
window.store = store