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
import { Entypo } from '@expo/vector-icons';

import { Colors } from '../utils/colors';
import { SpacingH } from '../utils/size';
import { Fonts } from '../utils/fonts';

const EmptyList: React.FC<{ text?: string }> = ({ text = "No Results" }) => {
    return (
        <View style={styles.empty} >
            <Entypo name="documents" size={64} color={Colors.DARK_GRAY} />
            <Text variant="titleMedium" style={styles.emptyText}>{text}</Text>
        </View>
    );
};

export default EmptyList;

const styles = StyleSheet.create({
    empty: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: SpacingH.s2,
        gap: SpacingH.s2,
    },
    emptyText: {
        fontFamily: Fonts.SourceSansProSemiBold,
        color: Colors.DARK_GRAY,
    },
});
