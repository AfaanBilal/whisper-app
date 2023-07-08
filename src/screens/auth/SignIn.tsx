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
import { Text, StyleSheet } from 'react-native';

import SafeScreen from '../../components/SafeScreen';

const SignIn: React.FC = () => {
    return (
        <SafeScreen>
            <Text>Sign In</Text>
        </SafeScreen>
    );
};

export default SignIn;

const styles = StyleSheet.create({

});
