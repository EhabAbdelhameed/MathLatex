import {api} from '../_axios';
import {headers} from '../headers';

////////////////////////////Auth API Calls //////////////////////////////////////
const register = (body: any) => api.post('api/register', body);
const login = (body: any) => api.post('api/login', body);
const forgotPassword = (body: any) => api.post('api/forgot-password', body);
const restPassword = (body: any) => api.post('api/reset-password', body);
const verifyOTP = (body: any) => api.post('api/verify', body);
const resendCode = (body: any) => api.post('api/resend-code', body);
//////////////////////////end////////////////////////////////////////////////////

/////////////////////////Dropdown API Calls/////////////////////////////////////
const Countries = (body: any) => api.get('api/drop-down/country');
const Cities = (body: any) => api.get(`api/drop-down/city?country_id=${body}`);
const Schools = (body: any) => api.get(`api/drop-down/school?country_id=${body}`);
const Levels = (body: any) => api.get('api/drop-down/grade/level');




const AuthAPI = {
  login,
  forgotPassword,
  verifyOTP,
  restPassword,
  resendCode,
  register,
  Countries,
  Cities,
  Schools,
  Levels,
};

export default AuthAPI;
