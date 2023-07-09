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
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import Profile from '../screens/profile/Profile';
import EditProfile from '../screens/profile/EditProfile';
import UserProfile from '../screens/profile/UserProfile';

export type ProfileStackParamList = {
    Profile: undefined;
    EditProfile: undefined;
    UserProfile: { uuid: string; };
};

export type ProfileStackNavProp = NativeStackNavigationProp<ProfileStackParamList>;

const Stack = createNativeStackNavigator<ProfileStackParamList>();

const ProfileStack: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{ header: () => <></> }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ header: () => <></> }} />
            <Stack.Screen name="UserProfile" component={UserProfile} options={{ header: () => <></> }} />
        </Stack.Navigator>
    );
};

export default ProfileStack;
