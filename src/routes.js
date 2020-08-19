import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen} = createStackNavigator();

import Home from '../src/pages/Home';
import CadastroList from '../src/pages/CadastroList/index';
export default function Routes(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name='Home' component={Home}/>
                <Screen name="CadastroList"  component={CadastroList} />
            </Navigator>
        </NavigationContainer>
    );
}