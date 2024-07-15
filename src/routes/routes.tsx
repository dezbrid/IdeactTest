import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {RootStackParamList, TabParamList} from '@types';
import {Home, Details, Profile} from '@screens';

const Stack = createNativeStackNavigator<RootStackParamList>();
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
const Tab = createMaterialBottomTabNavigator<TabParamList>();
export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="HomeStack">
        <Tab.Screen name="HomeStack" component={StackNavigator} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
