import {createReducer} from '@reduxjs/toolkit';
import Auth from '../auth';

const initialState = {
  token: null,
};

const tokenReducer = createReducer(initialState, builder => {
  builder.addCase(Auth.thunks.doSignUp.fulfilled, (state, action) => {
    if (action.payload.data) {
      const token = action.payload.data.token;
      state.token = token;
    }
  });
});

export default tokenReducer;
