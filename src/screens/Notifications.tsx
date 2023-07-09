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

import SafeScreen from '../components/SafeScreen';
import ScreenTitle from '../components/ScreenTitle';
import { Colors } from '../utils/colors';
import NotificationCard from '../components/NotificationCard';

const TEST_DATA = [
    {
        uuid: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        user: { username: "afaanbilal", name: "Afaan Bilal", image: "https://afaan.dev/assets/Afaan.png" },
        content: "liked your post.",
        postUuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        created_at: new Date(),
    },
    {
        uuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        user: { username: "afaanbilal", name: "Afaan Bilal", image: "https://afaan.dev/assets/Afaan.png" },
        content: "liked your post.",
        postUuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        created_at: new Date(),
    },
    {
        uuid: "58694a0f-3da1-471f-bd96-145571e29d72",
        user: { username: "afaanbilal", name: "Afaan Bilal", image: "https://afaan.dev/assets/Afaan.png" },
        content: "liked your post.",
        postUuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        created_at: new Date(),
    },
    {
        uuid: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1",
        user: { username: "afaanbilal", name: "Afaan Bilal", image: "https://afaan.dev/assets/Afaan.png" },
        content: "liked your post.",
        postUuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        created_at: new Date(),
    },
    {
        uuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f62",
        user: { username: "afaanbilal", name: "Afaan Bilal", image: "https://afaan.dev/assets/Afaan.png" },
        content: "liked your post.",
        postUuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        created_at: new Date(),
    },
    {
        uuid: "58694a0f-3da1-471f-bd96-145571e29d73",
        user: { username: "afaanbilal", name: "Afaan Bilal", image: "https://afaan.dev/assets/Afaan.png" },
        content: "liked your post.",
        postUuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        created_at: new Date(),
    },
    {
        uuid: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b4",
        user: { username: "afaanbilal", name: "Afaan Bilal", image: "https://afaan.dev/assets/Afaan.png" },
        content: "liked your post.",
        postUuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        created_at: new Date(),
    },
    {
        uuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f65",
        user: { username: "afaanbilal", name: "Afaan Bilal", image: "https://afaan.dev/assets/Afaan.png" },
        content: "liked your post.",
        postUuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        created_at: new Date(),
    },
];

const Notifications: React.FC = () => {
    return (
        <SafeScreen>
            <ScreenTitle title="Notifications" />

            <FlatList
                style={styles.container}
                contentContainerStyle={styles.container}
                data={TEST_DATA}
                renderItem={({ item }) => <NotificationCard {...item} />}
                keyExtractor={item => item.uuid}
            />
        </SafeScreen>
    );
};

export default Notifications;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.DARK,
    },
});
