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
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import { AuthContext } from '../utils/AuthContext';
import BottomTabs from './BottomTabs';
import ResetPassword from '../screens/auth/ForgotPassword';

const Stack = createNativeStackNavigator();

const RootStack: React.FC = () => {
    const { accessToken } = React.useContext(AuthContext);
    const authenticated = accessToken != null;

    return (
        <Stack.Navigator>
            {authenticated ?
                <Stack.Screen name="Tabs" component={BottomTabs} />
                :
                <Stack.Group>
                    <Stack.Screen name="SignUp" component={SignUp} options={{ header: () => <></> }} />
                    <Stack.Screen name="SignIn" component={SignIn} options={{ header: () => <></> }} />
                    <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ header: () => <></> }} />
                </Stack.Group>
            }
        </Stack.Navigator>
    );
};

export default RootStack;
