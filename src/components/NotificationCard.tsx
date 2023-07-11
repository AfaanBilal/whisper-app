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
import { Button, Text } from 'react-native-paper';
import { format } from 'timeago.js';

import { Colors } from '../utils/colors';
import { Fonts } from '../utils/fonts';
import { SpacingH, SpacingW } from '../utils/size';
import { theme } from '../utils/theme';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserResource } from '../types';
import { Profile } from '../api';
import Avatar from './Avatar';

type NotificationCardProps = {
    id: number;
    user: UserResource;
    type: string;
    message: string;
    created_at: string;
    follow_id: number;
};

const NotificationCard: React.FC<NotificationCardProps> = ({ user, type, message, created_at, follow_id }) => {
    const qC = useQueryClient();
    const accept = useMutation({
        mutationFn: async () => await Profile.acceptFollower(user.uuid),
        onSuccess: async () => qC.invalidateQueries(['notifications']),
    });
    const reject = useMutation({
        mutationFn: async () => await Profile.rejectFollower(user.uuid),
        onSuccess: async () => qC.invalidateQueries(['notifications']),
    });

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Avatar size={36} name={user.name} image={user.image} />
                <View style={styles.contentContainer}>
                    <Text variant="titleMedium" style={styles.content}>{user.name} {message}</Text>
                    <Text variant="labelMedium" style={styles.timestamp}>{format(new Date(created_at))}</Text>
                </View>
            </View>
            {type === "follow-requested" && follow_id !== 0 &&
                <View style={styles.buttonContainer}>
                    <Button mode="contained" style={styles.button} onPress={() => accept.mutate()} loading={accept.isLoading}>Accept</Button>
                    <Button mode="outlined" style={styles.button} onPress={() => reject.mutate()} loading={reject.isLoading}>Reject</Button>
                </View>
            }
        </View>
    );
};

export default NotificationCard;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SpacingW.s1,
        paddingVertical: SpacingH.s1,
        borderBottomColor: Colors.BLUE,
        borderBottomWidth: 0.2,
    },
    innerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
    buttonContainer: {
        justifyContent: "flex-end",
        flexDirection: "row",
        gap: SpacingW.s2,
    },
    button: {
        borderRadius: theme.roundness,
    },
});
