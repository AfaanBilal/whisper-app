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
import { StyleSheet, View } from 'react-native';

import SafeScreen from './SafeScreen';
import ScreenTitle from './ScreenTitle';
import { SpacingH, SpacingW } from '../utils/size';

const AuthScreen: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <SafeScreen>
            <View style={styles.container}>
                <ScreenTitle title="Whisper" />

                <View style={styles.innerContainer}>
                    {children}
                </View>
            </View>
        </SafeScreen>
    );
};

export default AuthScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingVertical: SpacingH.s6,
        paddingHorizontal: SpacingW.s1,
    },
    innerContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});
