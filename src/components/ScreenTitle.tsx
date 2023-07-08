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

type ScreenTitleProps = {
    title: string;
};

const ScreenTitle: React.FC<ScreenTitleProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text variant="headlineMedium" style={{ fontFamily: Fonts.Aclonica }}>{title}</Text>
        </View>
    );
};

export default ScreenTitle;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});
