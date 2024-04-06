
import { combineReducers } from "@reduxjs/toolkit";
import loadingSlice from "./_loading";
import AuthSlice from "./auth";
import App from "./app";
import tokenReducer from "./tokens/reducer";
import Lang from './lang'
const combineReducer = combineReducers({
    _loading: loadingSlice.reducer,
    tokens: tokenReducer,
    [AuthSlice.slice.name]: AuthSlice.slice.reducer,
    [App.slice.name]: App.slice.reducer,
    [Lang.slice.name]: Lang.slice.reducer,
})

export default combineReducer