import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyTabBar} from './TabComponents';

import Connections from '../../Screens/App/BottomTab/Connections';
import Bag from '../../Screens/App/BottomTab/Bag';
import Calendar from '../../Screens/App/BottomTab/Calendar';
import CameraScreen from '../../Screens/App/BottomTab/Camera';
import {TabParamsList} from '../types';
import Home from 'src/Screens/App/BottomTab/Home';
import {useSelector} from 'react-redux';
import {selectUser} from 'src/redux/auth';
import MyJob from 'screens/App/BottomTab/My Job';
import MyJobToJobSeeker from 'screens/App/BottomTab/MyJobJobSeeker';
import MyCalendarScreen from 'screens/App/BottomTab/MySchedule';
const Tabs = createBottomTabNavigator<TabParamsList>();

const TabBar = () => {
  const CurrentUserData = useSelector(selectUser);
  return (
    <Tabs.Navigator
      initialRouteName="Camera"
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        lazy: true,
        unmountOnBlur: false,
      }}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Connections" component={Connections} />
      <Tabs.Screen name="Camera" component={CameraScreen} />
      {CurrentUserData?.work_type == 'freelancer' ? null : (
        <Tabs.Screen
          name="Bag"
          component={
            CurrentUserData?.user_data?.user_type == 'recruiter' ||
            CurrentUserData?.user_data?.user_type == 'company' ||
            CurrentUserData?.user_data?.user_type == 'company_admin'
              ? MyJob
              : MyJobToJobSeeker
          }
        />
      )}
      <Tabs.Screen name="Calendar" component={MyCalendarScreen} />
    </Tabs.Navigator>
  );
};

export default TabBar;
