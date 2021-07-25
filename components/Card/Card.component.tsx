import React from 'react';
import { View, Text } from 'react-native';

import styles from './Card.styles';

type Props = {
    balance: number;
    holderName: string;
    cardNumber: string;
};

export const Card = (props: Props) => {
    const { balance, holderName, cardNumber } = props;

    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.balance}>{balance}</Text>
                <Text style={styles.balanceTitle}>баллов</Text>
            </View>
            <View style={styles.bottom}>
                <Text style={styles.text}>{holderName}</Text>
                <Text style={styles.text}>№ {cardNumber}</Text>
            </View>
        </View>
    );
};
