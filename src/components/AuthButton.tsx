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
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import { Fonts } from '../utils/fonts';
import { FontSize, Size, SpacingH } from '../utils/size';

type AuthButtonProps = {
    label: string;
    onPress: () => void;
    loading?: boolean;
};

const AuthButton: React.FC<AuthButtonProps> = ({ label, onPress, loading = false }) => {
    return (
        <Button mode="contained" uppercase onPress={onPress} style={styles.buttonStyle} labelStyle={styles.textStyle} loading={loading}>{label}</Button>
    );
};

export default AuthButton;

const styles = StyleSheet.create({
    buttonStyle: {
        width: Size.w80,
    },
    textStyle: {
        paddingVertical: 3,
        fontSize: FontSize.SMALL,
        fontFamily: Fonts.UbuntuBold,
    },
});
