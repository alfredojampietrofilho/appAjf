import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { FlatList, BorderlessButton as Button, } from 'react-native-gesture-handler';
import { obterListaProdutos } from '../../services/requisicoes';
import { Ionicons } from '@expo/vector-icons';

export default function ListaProdutosPage({ navigation }: any) {
    const [produtos, setProducts] = useState(Object);

    function inicio(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }    

        useEffect(() => {
            obterListaProdutos().then((items) => setProducts(items));
            navigation.setOptions({
                headerRight: () => (
                    <Button
                        style={styles.exitButton}
                        onPress={inicio}
                    >
                        <Ionicons name="home" Color='#c5e4d5' size={26} />
                    </Button>
                ),
            });
        }, []);


    return (
        <View style={styles.container}>
            <FlatList
                data={produtos}
                keyExtractor={(product) => product.id.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.card}>
                        <Text style={styles.producttitle}>{item.name}</Text>
                        <Text>Fabricante: {item.factory.name}</Text>
                        <View style={styles.priceSection}>
                            <Text>Preço: </Text>
                            <Text style={styles.price}>
                                R$ {item.price.toFixed(2).replace('.', ',')}
                            </Text>
                        </View>
                        <Text>Quantidade em Estoque: {item.amount}</Text>
                    </View>
                )}
            />
        </View>
    );    
}