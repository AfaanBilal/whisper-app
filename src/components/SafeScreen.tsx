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
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SafeScreen: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <SafeAreaView>
            <StatusBar style="auto" />
            {children}
        </SafeAreaView>
    );
};

export default SafeScreen;

const styles = StyleSheet.create({

});
