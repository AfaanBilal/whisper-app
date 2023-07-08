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

const PostCard: React.FC<{ content: string }> = ({ content }) => {
    return (
        <View style={styles.container}>
            <Avatar.Image size={84} source={{ uri: "https://afaan.dev/assets/Afaan.png" }} />
            <Text>{content}</Text>
        </View>
    );
};

export default PostCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    }
});
