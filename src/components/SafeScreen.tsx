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
import { Colors } from '../utils/colors';

const SafeScreen: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            {children}
        </SafeAreaView>
    );
};

export default SafeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DARK,
    }
});
