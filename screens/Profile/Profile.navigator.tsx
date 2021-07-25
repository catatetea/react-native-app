import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { ProfileScreen } from './Profile.screen';

type ProfileParamList = {
    ProfileScreen: undefined;
};

const ProfileStack = createStackNavigator<ProfileParamList>();

export const ProfileNavigator = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />
        </ProfileStack.Navigator>
    );
};
