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
import { Avatar, IconButton, Text } from 'react-native-paper';
import { format } from 'timeago.js';

import { Colors } from '../utils/colors';
import { Fonts } from '../utils/fonts';
import { SpacingH, SpacingW } from '../utils/size';

type PostCardProps = {
    uuid: string,
    author: string,
    content: string,
    likes: number,
    created_at: Date,
    liked: boolean,
};

const PostCard: React.FC<PostCardProps> = ({ uuid, author, content, likes, created_at, liked }) => {
    return (
        <View style={styles.container}>
            <View style={styles.postContainer}>
                <Avatar.Image size={42} source={{ uri: "https://afaan.dev/assets/Afaan.png" }} />
                <View style={styles.contentContainer}>
                    <View style={styles.top}>
                        <Text variant="titleMedium" style={styles.author}>{author}</Text>
                        <Text variant="labelMedium" style={styles.timestamp}>{format(created_at)}</Text>
                    </View>
                    <Text variant="titleMedium" style={styles.postContent}>{content}</Text>
                    <View style={styles.actionContainer}>
                        <IconButton icon={liked ? "heart" : "heart-outline"} iconColor={Colors.RED} size={16} onPress={() => console.log('Pressed')} />
                        <Text variant="labelMedium" style={styles.likes}>{likes} likes</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PostCard;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SpacingW.s1,
        paddingVertical: SpacingH.s1,
        borderBottomColor: Colors.BLUE,
        borderBottomWidth: 0.2,
    },
    postContainer: {
        flexDirection: "row",
        alignContent: "center",
    },
    top: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: SpacingW.s3,
    },
    author: {
        fontFamily: Fonts.SourceSansProBold,
    },
    timestamp: {
        color: Colors.DARK_GRAY,
    },
    postContent: {
        fontFamily: Fonts.Ubuntu,
    },
    actionContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: SpacingW.s0,
    },
    likes: {
        color: Colors.DARK_GRAY,
    },
});
