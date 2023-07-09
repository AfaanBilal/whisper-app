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
import { Colors } from '../utils/colors';
import { SpacingH } from '../utils/size';

type ScreenTitleProps = {
    title: string;
};

const ScreenTitle: React.FC<ScreenTitleProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium" style={styles.text}>{title}</Text>
        </View>
    );
};

export default ScreenTitle;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: SpacingH.s0,
    },
    text: {
        fontFamily: Fonts.Aclonica,
        color: Colors.RED,
    },
});
