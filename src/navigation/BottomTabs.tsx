/**
 * Whisper
 *
 * A micro-blogging platform.
 *
 * @author    Afaan Bilal
 * @copyright 2023 Afaan Bilal
 * @link      https://eonyx.io
 */

import React from 'react';
import { MaterialBottomTabNavigationProp, createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { NavigatorScreenParams } from '@react-navigation/native';

import { Colors } from '../utils/colors';
import { SpacingH } from '../utils/size';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Notifications from '../screens/Notifications';
import ProfileStack, { ProfileStackParamList } from './ProfileStack';

export type BottomTabsParamList = {
    Home: undefined;
    Explore: undefined;
    Notifications: undefined;
    ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
};

export type BottomTabsNavProp = MaterialBottomTabNavigationProp<BottomTabsParamList>;

const Tab = createMaterialBottomTabNavigator<BottomTabsParamList>();

const BottomTabs: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            labeled={false}
            activeColor={Colors.SOFT_WHITE}
            inactiveColor={Colors.DARK_GRAY}
            barStyle={{ backgroundColor: Colors.DARK, marginBottom: -SpacingH.s2 }}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name={focused ? "home" : "home-outline"} color={color} size={24} /> }} />
            <Tab.Screen name="Explore" component={Explore} options={{ tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "search" : "search-outline"} color={color} size={22} /> }} />
            <Tab.Screen name="Notifications" component={Notifications} options={{ tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name={focused ? "heart" : "heart-outline"} color={color} size={22} /> }} />
            <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "person" : "person-outline"} color={color} size={22} /> }} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
