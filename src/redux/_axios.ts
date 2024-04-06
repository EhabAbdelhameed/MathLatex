import axios, {AxiosError, AxiosRequestConfig} from 'axios';
import assign from 'lodash.assign';
import {create} from 'apisauce';
import {TStore} from './store';
import {BASE_URL} from '../../.env.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
});

const initAxios = (store: TStore) => {
  api.axiosInstance.interceptors.request.use(async (config: any) => {
    const token: any = await AsyncStorage.getItem('USER_TOKEN');
   
    const Authorization = `Bearer ${token}`;
    const authHeaders = {Authorization};
    if (token) {
      assign(config.headers, authHeaders);
    }
    return config;
  });
  const injectAuthHeaders: any = async (config: AxiosRequestConfig) => {
    const token: any = await AsyncStorage.getItem('USER_TOKEN');
    

    const Authorization = `Bearer ${token}`;
    const authHeaders = {Authorization};
    assign(config.headers, authHeaders);

    return config;
  };
  const unautherizedHandling = (error: AxiosError) => {
    const {status, data} = (error?.response as any) || {};
    console.log('====================================');
    console.log(status);
    console.log('====================================');
    //error handling
  };

  const handleFormData: any = (config: AxiosRequestConfig) => {
    if (config.data instanceof FormData) {
      assign(config.headers, {
        'Content-Type': 'multipart/form-data',
      });
    }
    return config;
  };

  axios.defaults.baseURL = BASE_URL;
  axios.interceptors.request.use(injectAuthHeaders);
  axios.interceptors.response.use(undefined, error => {
    unautherizedHandling(error);
    return Promise.reject(error?.response);
  });
  axios.interceptors.request.use(handleFormData);
};

export default initAxios;
