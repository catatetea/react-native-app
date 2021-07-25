import React from 'react';
import { ScrollView } from 'react-native';

import Card from '../../components/Card';

import styles from './Profile.styles';

export const ProfileScreen = () => (
    <ScrollView style={styles.root}>
        <Card balance={523} holderName="Илон Маск" cardNumber="0001" />
    </ScrollView>
);
