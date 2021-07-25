import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

type RootParamList = {
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
        <Root.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: Colors[colorScheme].tint,
                showLabel: false,
                style: {
                    height: 80,
                    borderRadius: 20,
                    margin: 16,
                    position: 'absolute',
                    bottom: 0,
                },
            }}
        >
            <Root.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }: TabBarIconProps) => <AntDesign name="home" size={24} color={color} />,
                }}
            />
            <Root.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }: TabBarIconProps) => <AntDesign name="user" size={24} color={color} />,
                    title: 'Profile',
                }}
            />
        </Root.Navigator>
    );
};
