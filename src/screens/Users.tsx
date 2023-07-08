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

import UserCard from '../components/UserCard';
import { Colors } from '../utils/colors';

const TEST_DATA = [
    {
        uuid: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        name: "Afaan Bilal",
    },
    {
        uuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        name: "Afaan Bilal",
    },
    {
        uuid: "58694a0f-3da1-471f-bd96-145571e29d72",
        name: "Afaan Bilal",
    },
    {
        uuid: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b1",
        name: "Afaan Bilal",
    },
    {
        uuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f62",
        name: "Afaan Bilal",
    },
    {
        uuid: "58694a0f-3da1-471f-bd96-145571e29d73",
        name: "Afaan Bilal",
    },
    {
        uuid: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b4",
        name: "Afaan Bilal",
    },
    {
        uuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f65",
        name: "Afaan Bilal",
    },
    {
        uuid: "58694a0f-3da1-471f-bd96-145571e29d76",
        name: "Afaan Bilal",
    },
    {
        uuid: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b7",
        name: "Afaan Bilal",
    },
    {
        uuid: "3ac68afc-c605-48d3-a4f8-fbd91aa97f68",
        name: "Afaan Bilal",
    },
    {
        uuid: "58694a0f-3da1-471f-bd96-145571e29d79",
        name: "Afaan Bilal",
    },
];

const Users: React.FC = () => {
    return (
        <FlatList
            contentContainerStyle={styles.container}
            data={TEST_DATA}
            renderItem={({ item }) => <UserCard name={item.name} />}
            keyExtractor={item => item.uuid}
        />
    );
};

export default Users;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DARK,
    },
});
