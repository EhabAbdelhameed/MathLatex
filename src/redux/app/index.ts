import {createSlice} from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import {EntityKeys} from 'src/redux/keys';
import {RootState} from '../store';
import {initialState} from './types';
import thunks from './thunks';
import AsyncStorage from '@react-native-async-storage/async-storage';

const slice = createSlice({
  name: EntityKeys.APP,
  initialState: initialState,
  reducers: {
    logout: () => initialState,
    changeDone: (state, action) => {
      state.done = action.payload;
    },
  },
  extraReducers(builder) {},
});

export const selectDone = (state: RootState) => state.app.done;

const AppSlice = {
  slice,
  logout: slice.actions.logout,
  changeDone: slice.actions.changeDone,
};
export default AppSlice;
