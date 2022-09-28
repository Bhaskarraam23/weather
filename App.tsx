import React from 'react';
import Home from './Home'
import Country from './Country';
import Weather from './Weather';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Weather_App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name=" " component={Home} />
        <Stack.Screen name="Country" component={Country} />
        <Stack.Screen name="Weather" component={Weather} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default Weather_App;
