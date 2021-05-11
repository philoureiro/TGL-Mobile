import React from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import RecoveryPassword from '../pages/RecoveryPassword';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '../components/TabNavigator';
import Drawer from '../components/DrawerNavigation';
import UpdatePassword from '../pages/UpdatePassword';

const Stack = createStackNavigator();
const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecoveryPassword"
        component={RecoveryPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpdatePassword"
        component={UpdatePassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Drawer"
        component={Drawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
