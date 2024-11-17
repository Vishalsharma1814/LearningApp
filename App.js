import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStack, HomeDrawer } from './components/navigation/Navigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Login screen as the initial screen */}
      <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
      {/* Drawer navigation for home and other screens */}
      <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
