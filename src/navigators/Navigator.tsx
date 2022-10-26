import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthNavigator } from './AuthNavigator';
import { AuthContext } from '../context/AuthContext';
import { Loader } from '../components';

import { MenuLateral } from './MenuLateral';


const Stack = createNativeStackNavigator();

export const Navigator = () => {

    const { loginData:{ status } } = useContext(AuthContext);

    const login:boolean = (status === 'auth' || status === 'auth-invite')? true: false;

    if(status === 'checking') return <Loader/>;
    
    return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            {
                (login)
                ?
                (                    
                    // <Stack.Screen name="MainScreen" component={MainScreen} />                                        
                    <Stack.Screen name="MenuLateral" component={MenuLateral} />                                        
                )
                :
                (                                        
                    <Stack.Screen name="AuthNavigator" component={AuthNavigator} />                    
                )
            }
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Navigator;