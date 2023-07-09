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
import { Linking, StyleSheet, View } from 'react-native';
import { Avatar, Text, Button } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';

import SafeScreen from '../../components/SafeScreen';
import { Colors } from '../../utils/colors';
import { SpacingH, SpacingW } from '../../utils/size';
import { Fonts } from '../../utils/fonts';
import Posts from '../Posts';
import Users from '../Users';
import { ProfileStackNavProp } from '../../navigation/ProfileStack';

const Tab = createMaterialTopTabNavigator();

const Profile: React.FC = () => {
    const navigation = useNavigation<ProfileStackNavProp>();

    return (
        <SafeScreen>
            <View style={styles.profileCard}>
                <Avatar.Image size={84} source={{ uri: "https://afaan.dev/assets/Afaan.png" }} />
                <View style={styles.cardText}>
                    <Text variant="displaySmall" style={{ fontFamily: Fonts.Aclonica }}>Afaan Bilal</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: SpacingW.s2 }}>
                        <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>@afaanbilal</Text>
                        <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>&middot;</Text>
                        <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro, color: Colors.RED }} onPress={() => Linking.openURL("https://afaan.dev")}>afaan.dev</Text>
                    </View>
                    <Text variant="titleSmall" style={{ marginVertical: SpacingH.s0, fontFamily: Fonts.Ubuntu }}>I never could say anything about myself.</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: SpacingW.s2 }}>
                        <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>112 followers</Text>
                        <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>&middot;</Text>
                        <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>73 following</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text variant="titleMedium" style={{ flex: 1, fontFamily: Fonts.SourceSansPro, color: Colors.RED, paddingVertical: SpacingH.s0 }} onPress={() => navigation.push('EditProfile')}>Edit Profile</Text>
                        <Text variant="titleMedium" style={{ flex: 1, fontFamily: Fonts.SourceSansPro, color: Colors.RED, paddingVertical: SpacingH.s0 }} onPress={() => Linking.openURL("https://afaan.dev")}>Share Profile</Text>
                    </View>
                </View>
            </View>

            <Tab.Navigator
                style={{ flex: 1, backgroundColor: Colors.DARK }}
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: Colors.DARK,
                    },
                    tabBarLabelStyle: {
                        fontFamily: Fonts.Ubuntu,
                        color: Colors.WHITE,
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: Colors.RED,
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
    },
    button: {
        borderRadius: 0,
        margin: 0,
        padding: 0,
    },
    buttonText: {
        fontFamily: Fonts.SourceSansProSemiBold,
    },
});
