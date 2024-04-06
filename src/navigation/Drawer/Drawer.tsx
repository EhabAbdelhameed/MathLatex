import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomSidebarMenu from './CustomDrawer';
import { Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
// import { Colors } from 'theme/colors';


import styles from './styles';
import CompleteProfileScreen from 'screens/App/CompleteProfile';
import AppStack from '../AppStack';

const Drawer = createDrawerNavigator();



export default function AppDrawer(props: any) {


    return (
        <Drawer.Navigator

            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#DDD',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#545454',
                drawerLabelStyle: styles.drawerLabelStyle,
                drawerPosition: 'left'
            }}
            drawerContent={props => <CustomSidebarMenu {...props} />}
        >
            <>
                <Drawer.Screen
                    name="الصفحه الرئيسية"
                    component={AppStack}
                />
            </>



        </Drawer.Navigator>
    );
}