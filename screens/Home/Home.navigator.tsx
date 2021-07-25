import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { HomeScreen } from './Home.screen';

type HomeParamList = {
    HomeScreen: undefined;
};

const HomeStack = createStackNavigator<HomeParamList>();

export const HomeNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    );
};
