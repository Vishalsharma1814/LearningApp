import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../shared/Login';
import Dashboard from '../dashboard/Dashboard';
import Profile from '../shared/Profile';

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

// Drawer Navigator
const Drawer = createDrawerNavigator();

export function HomeDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Dashboard} options={{ headerShown: true }} />
      <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
    </Drawer.Navigator>
  );
}