import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { AuthScreen } from '../screens/Auth/AuthScreen';
import { LoginScreen } from '../screens/Auth/LoginScreen';

const Stack = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (    
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >                   
            <Stack.Screen name="LoginScreen" component={LoginScreen} />            
        </Stack.Navigator>    
  )
}
