import * as React from 'react';
import { Text } from 'react-native';

import Login from '../screens/Login/index';
import Home from '../screens/Home/index';
import Camera from '../screens/Home/subPages/camera';
import Status from '../screens/Home/subPages/status';
import Chamadas from '../screens/Home/subPages/chamadas'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Routes = () => {
  
  const Stack = createStackNavigator();
  
  return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="camera"
          component={Camera}
          options={{
            headerShown: false
          }} 
          />

          <Stack.Screen
          name="status"
          component={Status}
          options={{
            headerShown: false
          }} 
          />

          <Stack.Screen
          name="chamadas"
          component={Chamadas}
          options={{
            headerShown: false
          }} 
          />


        </Stack.Navigator>
      </NavigationContainer>
  )
};

export default Routes;
