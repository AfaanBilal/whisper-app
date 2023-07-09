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
import { format } from 'timeago.js';

import { Colors } from '../utils/colors';
import { Fonts } from '../utils/fonts';
import { SpacingH, SpacingW } from '../utils/size';

type NotificationCardProps = {
    id: number,
    user: {
        image: string,
        name: string,
    },
    type: string,
    message: string;
    created_at: Date,
};

const NotificationCard: React.FC<NotificationCardProps> = ({ user, type, message, created_at }) => {
    return (
        <View style={styles.container}>
            <Avatar.Image size={36} source={{ uri: user.image || "https://afaan.dev/assets/Afaan.png" }} />
            <View style={styles.contentContainer}>
                <Text variant="titleMedium" style={styles.content}>{user.name} {message}</Text>
                <Text variant="labelMedium" style={styles.timestamp}>{format(created_at)}</Text>
            </View>
        </View>
    );
};

export default NotificationCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: SpacingW.s1,
        paddingVertical: SpacingH.s1,
        borderBottomColor: Colors.BLUE,
        borderBottomWidth: 0.2,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: SpacingW.s3,
    },
    content: {
        fontFamily: Fonts.SourceSansProBold,
    },
    timestamp: {
        color: Colors.DARK_GRAY,
    },
});
