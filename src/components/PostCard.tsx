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
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../utils/colors';
import { Fonts } from '../utils/fonts';
import { SpacingH, SpacingW } from '../utils/size';
import { Post } from '../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Posts } from '../api';
import { BottomTabsNavProp } from '../navigation/BottomTabs';

type PostCardProps = {
    post: Post;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const navigation = useNavigation<BottomTabsNavProp>();

    const qC = useQueryClient();
    const like = useMutation({
        mutationFn: async () => await Posts.likePost(post.uuid),
        onSuccess: async () => qC.invalidateQueries(),
    });
    const unlike = useMutation({
        mutationFn: async () => await Posts.unlikePost(post.uuid),
        onSuccess: async () => qC.invalidateQueries(),
    });

    const [liked, setLiked] = React.useState(post.liked);
    const likePress = () => {
        if (post.liked) {
            unlike.mutate();
            setLiked(false);
        } else {
            like.mutate();
            setLiked(true);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.postContainer}>
                <Avatar.Image size={42} source={{ uri: post.author.image || "https://afaan.dev/assets/Afaan.png" }} />
                <View style={styles.contentContainer}>
                    <View style={styles.top}>
                        <Text variant="titleMedium" style={styles.author} onPress={() => navigation.navigate("ProfileStack", { screen: "UserProfile", params: { uuid: post.author.uuid } })}>{post.author.name}</Text>
                        <Text variant="labelMedium" style={styles.timestamp}>{format(new Date(post.created_at))}</Text>
                    </View>
                    <Text variant="titleMedium" style={styles.postContent}>{post.content}</Text>
                    <View style={styles.actionContainer}>
                        <Text variant="labelMedium" style={styles.likes}>{post.likes} like{post.likes == 1 ? "" : "s"}</Text>
                        <IconButton icon={liked ? "heart" : "heart-outline"} iconColor={Colors.RED} size={16} onPress={likePress} />
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
        justifyContent: "space-between",
        alignItems: "center",
        gap: SpacingW.s0,
    },
    likes: {
        color: Colors.DARK_GRAY,
    },
});
