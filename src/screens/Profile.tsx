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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SafeScreen from '../components/SafeScreen';
import ScreenTitle from '../components/ScreenTitle';
import { Colors } from '../utils/colors';
import { SpacingH, SpacingW } from '../utils/size';
import { Fonts } from '../utils/fonts';
import Posts from './Posts';
import Users from './Users';

const Tab = createMaterialTopTabNavigator();

const Profile: React.FC = () => {
    return (
        <SafeScreen>
            <ScreenTitle title="Profile" />

            <View style={styles.profileCard}>
                <Avatar.Image size={84} source={{ uri: "https://afaan.dev/assets/Afaan.png" }} />
                <View style={styles.cardText}>
                    <Text variant="displaySmall" style={{ fontFamily: Fonts.Aclonica }}>Afaan Bilal</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: SpacingW.s2 }}>
                        <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>@afaanbilal</Text>
                        <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>&middot;</Text>
                        <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro, color: Colors.RED }}>afaan.dev</Text>
                    </View>
                    <Text variant="titleSmall" style={{ marginTop: SpacingH.s0, fontFamily: Fonts.Ubuntu }}>I never could say anything about myself.</Text>
                </View>
            </View>

            <Tab.Navigator screenOptions={{
                tabBarStyle: {
                    backgroundColor: Colors.DARK,
                },
                tabBarLabelStyle: {
                    fontFamily: Fonts.Ubuntu,
                    color: Colors.WHITE,
                },
            }}>
                <Tab.Screen name="Posts" component={Posts} />
                <Tab.Screen name="Followers" component={Users} />
                <Tab.Screen name="Following" component={Users} />
            </Tab.Navigator>
        </SafeScreen>
    );
};

export default Profile;

const styles = StyleSheet.create({
    profileCard: {
        flexDirection: "row",
        borderBottomColor: Colors.BLUE,
        borderBottomWidth: 1,
        paddingHorizontal: SpacingW.s2,
        paddingVertical: SpacingH.s2,
        gap: SpacingW.s6,
    },
    cardText: {
        justifyContent: "center",
    }
});
