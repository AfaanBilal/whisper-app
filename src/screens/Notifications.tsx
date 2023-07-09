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
import { ActivityIndicator } from 'react-native-paper';
import { useQuery } from '@tanstack/react-query';

import SafeScreen from '../components/SafeScreen';
import ScreenTitle from '../components/ScreenTitle';
import { Colors } from '../utils/colors';
import NotificationCard from '../components/NotificationCard';
import { Profile } from '../api';
import { SpacingH } from '../utils/size';

const Notifications: React.FC = () => {
    const { isLoading, data } = useQuery({ queryKey: ['notifications'], queryFn: Profile.getNotifications });

    return (
        <SafeScreen>
            <ScreenTitle title="Notifications" />

            {isLoading ?
                <ActivityIndicator animating={true} size="large" color={Colors.SOFT_WHITE} style={{ paddingVertical: SpacingH.s2 }} /> :
                <FlatList
                    style={styles.container}
                    contentContainerStyle={styles.container}
                    data={data.notifications}
                    renderItem={({ item }) => <NotificationCard {...item} />}
                    keyExtractor={item => item.id}
                />
            }
        </SafeScreen>
    );
};

export default Notifications;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.DARK,
    },
});
