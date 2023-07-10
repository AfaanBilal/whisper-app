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
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { useQuery } from '@tanstack/react-query';
import { Entypo } from '@expo/vector-icons';

import SafeScreen from '../components/SafeScreen';
import ScreenTitle from '../components/ScreenTitle';
import { Colors } from '../utils/colors';
import NotificationCard from '../components/NotificationCard';
import { Profile } from '../api';
import { SpacingH } from '../utils/size';
import { Fonts } from '../utils/fonts';

const Notifications: React.FC = () => {
    const { isLoading, isFetching, refetch, data } = useQuery({ queryKey: ['notifications'], queryFn: Profile.getNotifications });

    return (
        <SafeScreen>
            <ScreenTitle title="Notifications" />

            {isLoading ?
                <ActivityIndicator animating={true} size="large" color={Colors.SOFT_WHITE} style={{ paddingVertical: SpacingH.s2 }} /> :
                (data.notifications && <FlatList
                    refreshControl={<RefreshControl colors={[Colors.SOFT_WHITE]} tintColor={Colors.SOFT_WHITE} refreshing={isFetching} onRefresh={() => refetch()} />}
                    style={styles.container}
                    contentContainerStyle={styles.container}
                    data={data.notifications}
                    renderItem={({ item }) => <NotificationCard {...item} />}
                    keyExtractor={item => item.id}
                />)
            }

            {!isLoading && !data.notifications &&
                <View style={styles.empty}>
                    <Entypo name="bell" size={64} color={Colors.RED} />
                    <Text variant="titleMedium" style={styles.emptyText}>No notifications yet</Text>
                </View>
            }
        </SafeScreen>
    );
};

export default Notifications;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.DARK,
    },
    empty: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: SpacingH.s2,
    },
    emptyText: {
        fontFamily: Fonts.SourceSansProSemiBold,
        color: Colors.DARK_GRAY,
    },
});
