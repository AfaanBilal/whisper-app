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
import { Text } from 'react-native-paper';

import { Fonts } from '../utils/fonts';
import { SpacingH } from '../utils/size';

type AuthScreenTitleProps = {
    title: string;
};

const AuthScreenTitle: React.FC<AuthScreenTitleProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text variant="headlineLarge" style={styles.text}>{title}</Text>
        </View>
    );
};

export default AuthScreenTitle;

const styles = StyleSheet.create({
    container: {
        marginTop: SpacingH.s6,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontFamily: Fonts.SourceSansProSemiBold,
    },
});
