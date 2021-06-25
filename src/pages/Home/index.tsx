import React from 'react';
import { Button, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from './styles';


const Separator = () => (
    <View style={styles.separator} />
  );

export default function HomePage() {
    

    const navigation = useNavigation();

    function goLogin() {
        navigation.navigate('Login');
    }

    function goCreateCadastro() {
        navigation.navigate('Cadastro');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View >
                <Text style={styles.title}>AppAJF</Text>
            </View>
            <Separator />
            <View style={styles.button}>
                <Button title="           Efetuar Login            " color="#5d875d" onPress={goLogin}> </Button>
            </View>
            <Separator />
            <View style={styles.button}>
                <Button title="              Cadastrar               "  color="#5d875d"  onPress={goCreateCadastro}> </Button>
            </View>
        </SafeAreaView>
        
    );

  
}

