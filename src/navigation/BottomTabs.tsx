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
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { Colors } from '../utils/colors';
import { SpacingH } from '../utils/size';
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs: React.FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            shifting={true}
            barStyle={{ backgroundColor: Colors.SOFT_WHITE, marginBottom: -SpacingH.s2 }}>
            <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name={focused ? "home" : "home-outline"} color={color} size={24} /> }} />
            <Tab.Screen name="Explore" component={Explore} options={{ tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "search" : "search-outline"} color={color} size={22} /> }} />
            <Tab.Screen name="Notifications" component={Notifications} options={{ tabBarIcon: ({ color, focused }) => <MaterialCommunityIcons name={focused ? "heart" : "heart-outline"} color={color} size={22} /> }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? "person" : "person-outline"} color={color} size={22} /> }} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
