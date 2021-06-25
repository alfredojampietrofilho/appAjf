import { Dimensions, StyleSheet, } from 'react-native';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 0,
        backgroundColor: '#c5e4d5'
    },

    title: {
        fontSize: 50,
        marginTop: 160,
        marginBottom: 15,
        color: 'white',
    },

    separator: {
        marginVertical: 8,
        borderBottomColor: '#c5e4d5',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    button: {
        // justifyContent: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',        
    },

    list: {
        width: Dimensions.get('window').width - 20
    },

});