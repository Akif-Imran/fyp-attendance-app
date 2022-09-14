import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TeacherDawer from './TeacherDrawer';
import AdminDrawer from './AdminDrawer';
import StudentDrawer from './StudentDrawer';
import ParentDrawer from './ParentDrawer';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TeacherDrawer" component={TeacherDawer} />
      <Stack.Screen name="StudentDrawer" component={StudentDrawer} />
      <Stack.Screen name="AdminDrawer" component={AdminDrawer} />
      <Stack.Screen name="ParentDrawer" component={ParentDrawer} />
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
