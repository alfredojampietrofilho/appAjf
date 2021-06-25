import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import HomePage from '../pages/Home';
import CadastroPage from '../pages/Cadastro';
import LoginPage from '../pages/Login';
import ListaProdutosPage from '../pages/ListaProdutos'


const Stack = createStackNavigator();

export default function Routes() {

    return (
        <NavigationContainer>
            <StatusBar style="auto" />
      
            <Stack.Navigator >

                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Cadastro" component={CadastroPage} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen name="Lista de Produtos" component={ListaProdutosPage} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}
