import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

export type RootParamList = {
    Home: undefined;
    Profile: undefined;
};

type TabBarIconProps = {
    color: string;
};

export const Root = createBottomTabNavigator<RootParamList>();

export const RootNavigator = () => {
    const colorScheme = useColorScheme();

    return (
        <Root.Navigator initialRouteName="Home" tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
            <Root.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }: TabBarIconProps) => <Ionicons size={30} name="home" color={color} />,
                    title: 'Home',
                }}
            />
            <Root.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }: TabBarIconProps) => (
                        <Ionicons size={30} name="happy-outline" color={color} />
                    ),
                    title: 'Profile',
                }}
            />
        </Root.Navigator>
    );
};
