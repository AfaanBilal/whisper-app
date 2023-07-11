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
import { Text } from 'react-native-paper';

import { Colors } from '../utils/colors';
import { SpacingH, SpacingW } from '../utils/size';
import { Fonts } from '../utils/fonts';
import { UserResource } from '../types';
import { useNavigation } from '@react-navigation/native';
import { BottomTabsNavProp } from '../navigation/BottomTabs';
import Avatar from './Avatar';

const UserCard: React.FC<UserResource> = ({ uuid, name, username, image }) => {
    const navigation = useNavigation<BottomTabsNavProp>();

    return (
        <View style={styles.container}>
            <Avatar size={48} name={name} image={image} />
            <View>
                <Text variant="titleLarge" style={styles.name} onPress={() => navigation.navigate("ProfileStack", { screen: "UserProfile", params: { uuid } })}>{name}</Text>
                <Text variant="titleMedium" style={styles.username}>@{username}</Text>
            </View>
        </View>
    );
};

export default UserCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: SpacingW.s2,
        paddingVertical: SpacingH.s1,
        borderBottomColor: Colors.BLUE,
        borderBottomWidth: 0.2,
        gap: SpacingW.s2,
    },
    name: {
        fontFamily: Fonts.SourceSansPro,
    },
    username: {
        fontFamily: Fonts.SourceSansProBold,
    },
});
