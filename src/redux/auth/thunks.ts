import {createAsyncThunk} from '@reduxjs/toolkit';
import AuthAPI from './api';
// import AppAPI from "store/app/api";

const doSignUp: any = createAsyncThunk<any, any, any>(
  'auth/signUp',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.register(data);
      console.log(JSON.stringify(response.data));

      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const doSignIn: any = createAsyncThunk<any, any, any>(
  'auth/login',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.login(data);
      console.log(JSON.stringify(response.data));
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const doForgetPassword: any = createAsyncThunk<any, any, any>(
  'auth/ForgetPassword',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.forgotPassword(data);
      // console.warn(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

const doVerifyOTP: any = createAsyncThunk<any, any, any>(
  'auth/verifyOTP',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.verifyOTP(data);
      console.log(JSON.stringify(response.data));
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 201 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
const doResendCode: any = createAsyncThunk<any, any, any>(
  'auth/ResendCode',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.resendCode(data);
      // console.log(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
const doResetPassword: any = createAsyncThunk<any, any, any>(
  'auth/resetPassword',

  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.restPassword(data);
      // console.warn(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
//Dropdown API Calls
//doGetCountries
const doGetCountries: any = createAsyncThunk<any, any, any>(
  'auth/getCountries',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.Countries(data);
      // console.warn(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
)
//doGetCities
const doGetCities: any = createAsyncThunk<any, any, any>(
  'auth/getCities',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.Cities(data);
      // console.warn(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
)
//doGetSchools
const doGetSchools: any = createAsyncThunk<any, any, any>(
  'auth/getSchools',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.Schools(data);
      console.warn("SchoolsData",JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
)
//doGetLevels
const doGetLevels: any = createAsyncThunk<any, any, any>(
  'auth/getLevels',
  async (data: any, thunkApi: any) => {
    try {
      const response = await AuthAPI.Levels(data);
      // console.warn(JSON.stringify(response.data))
      if (
        response.status == 400 ||
        response.status == 401 ||
        response.status == 403 ||
        response.status == 404 ||
        response.status == 422 ||
        response.status == 500 ||
        response.status == 503
      ) {
        throw response;
      }
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
)


const AuthThunks = {
  doSignUp,
  doSignIn,
  doForgetPassword,
  doVerifyOTP,
  doResetPassword,
  doResendCode,
  doGetCountries,
  doGetCities,
  doGetSchools,
  doGetLevels
};

export default AuthThunks;
