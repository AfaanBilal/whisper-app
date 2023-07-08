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
import { Avatar, Text } from 'react-native-paper';
import { Colors } from '../utils/colors';
import { SpacingH, SpacingW } from '../utils/size';
import { Fonts } from '../utils/fonts';

const UserCard: React.FC<{ name: string, username: string }> = ({ name, username }) => {
    return (
        <View style={styles.container}>
            <Avatar.Image size={48} source={{ uri: "https://afaan.dev/assets/Afaan.png" }} />
            <View>
                <Text variant="titleLarge" style={styles.name}>{name}</Text>
                <Text variant="titleMedium" style={styles.username}>@{username}</Text>
            </View>
        </View>
    );
};

export default UserCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: SpacingW.s2,
        paddingVertical: SpacingH.s1,
        borderBottomColor: Colors.BLUE,
        borderBottomWidth: 0.2,
        gap: SpacingW.s2,
    },
    name: {
        fontFamily: Fonts.SourceSansPro,
    },
    username: {
        fontFamily: Fonts.SourceSansProBold,
    },
});
