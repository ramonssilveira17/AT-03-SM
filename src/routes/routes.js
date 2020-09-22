import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TelaApp } from '../pages/TelaApp';

const Stack = createStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Calculadora IMC" component={TelaApp}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}