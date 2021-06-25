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
            <StatusBar style="light" />
      
            <Stack.Navigator >

                <Stack.Screen name="Home" component={HomePage} options={{title: 'Seja Bem Vindo!', headerStyle: {backgroundColor: '#5d875d'}, headerTintColor: '#fff'}}/>
                <Stack.Screen name="Cadastro" component={CadastroPage} options={{headerTintColor: '#fff', headerStyle: {backgroundColor: '#5d875d'}}}/>
                <Stack.Screen name="Login" component={LoginPage} options={{headerTintColor: '#fff', headerStyle: {backgroundColor: '#5d875d'}}}/>
                <Stack.Screen name="Lista de Produtos" component={ListaProdutosPage} options={{headerTintColor: '#fff', headerStyle: {backgroundColor: '#5d875d'}}}/>

            </Stack.Navigator>

        </NavigationContainer>
    );
}
