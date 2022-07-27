import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
/* import Detail from './Detail';
import Pilots from './Pilots';
import Profile from './Profile'; */
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTitle: (
            <Text
              style={{
                fontSize: 24,
                color: 'rgb(255,232,31)',
                alignSelf: 'center',
              }}>
              Star Wars: Naves
            </Text>
          ),
          headerTitleStyle: {
            alignSelf: 'center',
          },
        }}
      />
      {/* <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTitle: (
            <Text
              style={{
                fontSize: 24,
                color: 'rgb(255,232,31)',
                textAlign: 'center',
              }}>
            </Text>
          ),
          headerTitleStyle: {
            alignSelf: 'center',
          },
          headerTintColor: 'rgb(255,232,31)',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerStyle: { backgroundColor: 'black' },
          headerTitle: (
            <Text
              style={{
                fontSize: 24,
                color: 'rgb(255,232,31)',
                textAlign: 'center',
              }}>
            </Text>
          ),
          headerTitleStyle: {
            alignSelf: 'center',
          },
          headerTintColor: 'rgb(255,232,31)',
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default Screens;
