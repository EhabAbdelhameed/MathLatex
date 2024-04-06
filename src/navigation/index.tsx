import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootParamsList } from './types';
import AuthStack from './AuthStack';


const Root = createNativeStackNavigator<RootParamsList>();

const Navigation = () => {


  return (
    <NavigationContainer>
      <Root.Navigator
        initialRouteName="auth"
        screenOptions={{
          headerShown: false,
        }}>
       
          <Root.Screen name="auth" component={AuthStack} />
      
     
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
