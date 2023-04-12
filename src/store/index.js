import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todoListReducer from "./todoListSlice"

const reducer = combineReducers({
    todoListReducer
})

export const store = configureStore({
    reducer
})