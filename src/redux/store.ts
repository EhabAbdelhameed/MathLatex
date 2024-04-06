import { Action, configureStore, ThunkAction, combineReducers } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import reducer from "./reducers"
import initAxios from "./_axios";


import { legacy_createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import {thunk} from 'redux-thunk';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { EntityKeys } from "./keys";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [EntityKeys.AUTH,EntityKeys.LANG],
}

let persistedReducer = persistReducer(persistConfig, reducer)


export const Store = () => {
  let store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
  let persistor = persistStore(store);
  return { store, persistor };
};


initAxios(Store);

export type RootState = ReturnType<typeof reducer>
export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type TStore = typeof Store;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
