import {createSlice} from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {EntityKeys} from 'src/redux/keys';
import {RootState} from '../store';
import {initialState} from './types';
import thunks from './thunks';
import {Alert} from 'react-native';
import AppThunks from '../app/thunks';

const slice = createSlice({
  name: EntityKeys.AUTH,
  initialState: initialState,
  reducers: {
    logout: () => initialState,
    chnageIsSignedUp: (state, action) => {
      state.signedUp = action.payload;
    },

    chnageReseted: (state, action) => {
      state.reset = action.payload;
    },
    chnageVerified: (state, action) => {
      state.verified = false;
    },
    chnageisAuth: (state, action) => {
      state.isAuth = action.payload;
    },

    // chnageCurrentData: (state, action) => {
    //   state.currentUser = action.payload;
    // },
  },
  extraReducers(builder) {
    // doSignIn
    builder.addCase(thunks.doSignIn.fulfilled, (state, action) => {
      // console.log("HELLO FORM INDEX ",)

      AsyncStorage.setItem('USER_TOKEN', action.payload.data?.token);

      // state.currentUser = action.payload?.data;

      state.isAuth = true;
    });
    builder.addCase(thunks.doSignIn.rejected, (state, action: any) => {
      // console.log(action.payload.data);
      if (action.payload.data.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action.payload.data.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action.payload.data.message,
        });
      }
    });
    // doGetProfile

    // doVerifyOTP
    builder.addCase(thunks.doVerifyOTP.fulfilled, (state, action) => {
      state.verified = true;
      AsyncStorage.setItem('USER_TOKEN', action.payload?.data?.token);

      Toast.show({
        type: 'success',
        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doVerifyOTP.rejected, (state, action: any) => {
      if (action.payload.data.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action.payload.data.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action.payload.data.message,
        });
      }
    });
    //doResendCode
    builder.addCase(thunks.doResendCode.fulfilled, (state, action) => {
      // state.verified = true;
      Toast.show({
        type: 'success',
        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doResendCode.rejected, (state, action: any) => {
      if (action.payload.data.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action.payload.data.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action.payload.data.message,
        });
      }
    });
    //doResetPassword
    builder.addCase(thunks.doResetPassword.fulfilled, (state, action) => {
      state.reset = true;
      Toast.show({
        type: 'success',
        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doResetPassword.rejected, (state, action: any) => {
      if (action.payload.data.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action.payload.data.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action.payload.data.message,
        });
      }
    });

    //doForgetPassword
    builder.addCase(thunks.doForgetPassword.fulfilled, (state, action) => {
      // state.reset = true;
      Toast.show({
        type: 'success',
        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doForgetPassword.rejected, (state, action: any) => {
      if (action.payload.data.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action.payload.data.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action.payload.data.message,
        });
      }
    });

    //doSignUp

    builder.addCase(thunks.doSignUp.fulfilled, (state, action) => {
      state.signedUp = true;

      Toast.show({
        type: 'success',
        text1: action?.payload?.message,
      });
    });
    builder.addCase(thunks.doSignUp.rejected, (state, action: any) => {
      if (action.payload.data.message == 'Validation error.') {
        Toast.show({
          type: 'error',
          text1: action.payload.data.error,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: action.payload.data.message,
        });
      }
    });
    /////////////////////Dropdown API Calls/////////////////////////////////////
    //doGetCountries
    builder.addCase(thunks.doGetCountries.fulfilled, (state, action) => {
      state.countries = action.payload.data;
    })
    //doGetCities
    builder.addCase(thunks.doGetCities.fulfilled, (state, action) => {
      state.cities = action.payload.data;
    })
    //doGetSchools
    builder.addCase(thunks.doGetSchools.fulfilled, (state, action) => {
      state.schools = action.payload.data;
    })
    //doGetLevels
    builder.addCase(thunks.doGetLevels.fulfilled, (state, action) => {
      state.levels = action.payload.data;
    })
  },
});
// export const selectUser = (state: RootState) => state.auth.currentUser;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectIsSignedUp = (state: RootState) => state.auth.signedUp;
export const selectReseted = (state: RootState) => state.auth.reset;
export const selectVerified = (state: RootState) => state.auth.verified;
export const selectCountries = (state: RootState) => state.auth.countries;
export const selectCities = (state: RootState) => state.auth.cities;
export const selectSchools = (state: RootState) => state.auth.schools;
export const selectLevels = (state: RootState) => state.auth.levels;
const AuthSlice = {
  thunks,
  slice,
  logout: slice.actions.logout,
  chnageisAuth: slice.actions.chnageisAuth,
  chnageIsSignedUp: slice.actions.chnageIsSignedUp,
  chnageReseted: slice.actions.chnageReseted,
  chnageVerified: slice.actions.chnageVerified,
};
export default AuthSlice;
