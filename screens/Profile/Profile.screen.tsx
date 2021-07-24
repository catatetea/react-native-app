import React from 'react';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import { styles } from './Profile.styles';

export const ProfileScreen = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/Profile/index.tsx" />
    </View>
);
