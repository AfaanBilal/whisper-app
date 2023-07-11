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
import { FlatList, StyleSheet, RefreshControl } from 'react-native';

import UserCard from './UserCard';
import { Colors } from '../utils/colors';
import { UserResource } from '../types';
import EmptyList from './EmptyList';

type UserProps = {
    users: UserResource[];
    isFetching: boolean;
    refetch: () => void;
};

const Users: React.FC<UserProps> = ({ users, isFetching, refetch }) => {
    return (
        <FlatList
            refreshControl={<RefreshControl colors={[Colors.SOFT_WHITE]} tintColor={Colors.SOFT_WHITE} refreshing={isFetching} onRefresh={() => refetch()} />}
            style={styles.container}
            contentContainerStyle={styles.container}
            data={users}
            renderItem={({ item }) => <UserCard {...item} />}
            keyExtractor={item => item.uuid}
            ListEmptyComponent={<EmptyList />}
        />
    );
};

export default Users;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.DARK,
    },
});
