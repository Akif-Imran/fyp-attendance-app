import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Course from '../screens/teacher/Course';
import Dashboard from '../screens/teacher/Dashboard';
import Attendance from '../screens/teacher/Attendance';
import Notifications from '../screens/teacher/Notifications';
import CustomDrawer from '../components/CustomDrawer';

import {_VectorIcons} from '../components/_VectorIcons';

const Drawer = createDrawerNavigator();

const TeacherDrawer = ({navigation}) => {
  const Logout = () => {
    navigation.navigate('Login');
  };

  useEffect(() =>
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    }),
  );
  const navigatorScreenOptions = {
    drawerActiveTintColor: '#FFFFFF',
    drawerInactiveTintColor: '#989EB1',
    drawerActiveBackgroundColor: '#6200EA',
    drawerInactiveBackgroundColor: '#FFFFFF',
    drawerLabelStyle: {
      marginLeft: -25,
    },
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#6200EA',
    },
  };
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} Logout={Logout} />}
      initialRouteName="Dashboard"
      screenOptions={navigatorScreenOptions}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: ({color}) => (
            <_VectorIcons
              type={'Entypo'}
              name={'home'}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Attendance"
        component={Attendance}
        options={{
          drawerIcon: ({color}) => (
            <_VectorIcons
              type={'Ionicons'}
              name={'calendar'}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Course"
        component={Course}
        options={{
          drawerIcon: ({color}) => (
            <_VectorIcons
              type={'FontAwesome5'}
              name={'book-open'}
              size={18}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Notifications}
        options={{
          drawerIcon: ({color}) => (
            <_VectorIcons
              type={'Ionicons'}
              name={'notifications'}
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default TeacherDrawer;

const styles = StyleSheet.create({});
