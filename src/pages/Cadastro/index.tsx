import React from 'react';
import { Button, View, Alert, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import {Cadastro} from '../../models/cadastro';
import { adicionaUsuario } from '../../services/requisicoes';
import { validateField } from '../../utils/validation';

import InputTextField from '../../components/InputTextField';

import styles from './styles';

export default function CadastroPage({ navigation }: any) {

    const [ address, setAddress ] = React.useState('');
    const [ age, setAge ] = React.useState('');
    const [ email, setEmail ] = React.useState('');
    const [ userPassword, setUserPassword ] = React.useState('');
    const [ name, setName ] = React.useState('');

    async function handleSave(): Promise<any> {

        let usuario: Cadastro = {
            name: '',
            age: 0,
            address: '',
            email: '',
            userPassword: '',
            credencial: '',
        };

        usuario.name = name;
        usuario.age = parseInt(age);
        usuario.address = address;
        usuario.email = email;
        usuario.userPassword = userPassword;


        if (!validateField(usuario.name, 'Informe seu nome')) {
            return;
        }
        if (!validateField(age, 'Informe sua idade')) {
            return;
        }
        if (usuario.age < 18) {
            alert('Usuário do cadastro deve ser maior que 18 anos!');
            return;
        }
    
        if (!validateField(usuario.address, 'Informe seu endereço')) {
            return;
        }
        if (!validateField(usuario.email, 'Informe seu e-mail')) {
            return;
        }
        if (!validateField(usuario.userPassword, 'Escolha uma senha')) {
            return;
        }


        adicionaUsuario(usuario)
            .then((result) => {
                console.log('Resultado:');
                console.log(result);
                usuario.credencial = result;
                console.log('credencial salva = ' + usuario.credencial);
                console.log(usuario);
                if (!result) {
                    Alert.alert(
                        'Erro ao Cadastrar',
                        'Houve um erro ao efetuar o cadastro.'
                    );
                    return;
                }
                if (result) {
                    Alert.alert(
                        'Cadastramento Efetuado',
                        'Cadastramento efetuado com sucesso',
                        [
                            { text: "Voltar para a Home", onPress: () => navigation.navigate('Home')},
                            { text: "Efetuar Login", onPress: () => navigation.navigate('Login')}
                        ]                        
                    );
                }
    
            })
            .catch((error) => {
                console.error('UserRegistration.handleSave');
                console.error(error);
                Alert.alert(
                    'Erro ao Cadastrar',
                    'Houve um erro ao efetuar o cadastro.\nContate o administrador.'
                );
            });
    }


    return (
        <ScrollView style={styles.scroll}>
        <KeyboardAvoidingView style={styles.container} behavior="padding" >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                <View >
                    <InputTextField label="Name" value={name} onChange={setName} /> 

                    <InputTextField label="Age" value={age} onChange={setAge} />

                    <InputTextField label="Address" value={address} onChange={setAddress} />

                    <InputTextField label="Email" value={email} onChange={setEmail} />

                    <InputTextField label="UserPassword" value={userPassword} onChange={setUserPassword} />
                    <View>
                        <Button title='Salvar' color="#5d875d" onPress={handleSave} />
                    </View>
                </View>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </ScrollView>        
    )
}