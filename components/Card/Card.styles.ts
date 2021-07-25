import { StyleSheet } from 'react-native';

import Layout from '../../constants/Layout';

export default StyleSheet.create({
    card: {
        width: '100%',
        height: Layout.window.width / 1.7,
        backgroundColor: '#463A38',
        padding: 15,
        borderRadius: 20,
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    balance: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    balanceTitle: {
        fontSize: 12,
        color: '#888',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});
