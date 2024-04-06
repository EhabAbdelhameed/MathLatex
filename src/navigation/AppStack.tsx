import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppParamsList} from './types';
import TabBar from './BottomTab/TabBar';

const Stack = createNativeStackNavigator<AppParamsList>();
const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabBar"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabBar" component={TabBar} />
    </Stack.Navigator>
  );
};

export default AppStack;
