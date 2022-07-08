import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailScreen} from '../screen/DetailScreen';
import {HomeScreen} from '../screen/HomeScreen';
import {Movies} from '../interfaces/moviesInterface';

export type RootStackParams = {
  Home: undefined;
  Details: Movies;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};
