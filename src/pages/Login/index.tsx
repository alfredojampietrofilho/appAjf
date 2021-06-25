import React, { useState } from 'react';
import { Button, View, Alert, ActivityIndicator, ScrollView, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, } from 'react-native';

import InputTextField from '../../components/InputTextField';
import styles from './styles';
import { autenticar } from '../../services/requisicoes';


export default function LoginPage({ navigation }: any) {

    const [isLoading, setIsLoading] = useState(false);

    const [ email, setEmail ] = React.useState('');
    const [ userPassword, setUserPassword ] = React.useState('');

    function inicio(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }        

    async function acessar(): Promise<any> {
        setIsLoading(true);

        if (email === undefined || email.trim() === '') {
            alert('Email é obrigatório!');
            setIsLoading(false);
            return;
        }
    
        if (userPassword.trim() === '') {
            alert('UserPassword é obrigatório!');
            setIsLoading(false);
            return;
        }        

        setIsLoading(true);
        autenticar(email, userPassword)
        .then((result) => {
            setIsLoading(false);

            if (!result) {
                setIsLoading(false);

                Alert.alert(
                    'Erro!',
                    'Erro no preenchimento dos dados!\nTente novamente.'
                );
                return;
            }
            if (result) {
                setIsLoading(true);
                navigation.navigate('Lista de Produtos');
 
            }
        })
        .catch((error) => {
            console.error(error);
            Alert.alert(
                'Erro na tentativa de fazer o login',
            );
        });
    }

    return (
        <ScrollView style={styles.scroll}>
            <KeyboardAvoidingView style={styles.container} behavior="padding" >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View >
                        <InputTextField label="Email" value={email} onChange={setEmail} />
                        <InputTextField label="UserPassword" value={userPassword} onChange={setUserPassword} />
                        {!isLoading ? (
                        <View>
                            <Button title='Entrar' color="#5d875d" onPress={acessar} />
                        </View>
                        ):(
                            <View>
                                <ActivityIndicator
                                    animating={isLoading}
                                    size="large"
                                    color="#ff66c4"
                                />
                            </View>                
                        )}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>        
        );
}