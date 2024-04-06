import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Auth/Login';


import SignUp from '../Screens/Auth/SignUp';

import Verification from '../Screens/Auth/Verification';
import ForgetPassword from '../Screens/Auth/ForgetPassword';

import { AuthParamsList } from './types';
import ResetPassword from 'screens/Auth/ResetPassword';



const Stack = createNativeStackNavigator<AuthParamsList>();
const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="login" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{ headerShown: false }}
      />
     
      <Stack.Screen
        name='Verification'
        component={Verification}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
      />
   
      <Stack.Screen
      name='ResetPassword'
      component={ResetPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
