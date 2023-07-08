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
import { FlatList, StyleSheet } from 'react-native';

import PostCard from '../components/PostCard';
import { Colors } from '../utils/colors';

const TEST_DATA = [
    {
        uuid: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        content: "Hello, world. This is the first post in Whisper.",
        media: "",
    },
    {
        uuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        content: "Goodbye, world. This is the middle post in Whisper.",
        media: "",
    },
    {
        uuid: "58694a0f-3da1-471f-bd96-145571e29d72",
        content: "Hello, again. This is the last post in Whisper.",
        media: "",
    },
];

const Posts: React.FC = () => {
    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={TEST_DATA}
            renderItem={({ item }) => <PostCard content={item.content} />}
            keyExtractor={item => item.uuid}
        />
    );
};

export default Posts;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DARK,
    },
});
