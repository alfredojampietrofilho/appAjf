import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#C1E1C5',
    },
    producttitle: {
        fontSize: 20,
        color: '#194D33',
        fontWeight: 'bold',
    },
    card: {
        padding: 20,
        marginBottom: 20,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
        borderRadius: 50,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    priceSection: {
        flexDirection: 'row',
    },
    price: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18,
    },
    exitButton: {
        marginRight: 20,
        color: '#194D33',
    }
});