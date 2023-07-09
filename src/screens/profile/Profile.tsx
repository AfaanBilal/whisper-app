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
import { Avatar, Text, IconButton, Menu, Button, Divider } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { useQueryClient, useQuery } from '@tanstack/react-query';

import SafeScreen from '../../components/SafeScreen';
import { Colors } from '../../utils/colors';
import { SpacingH, SpacingW } from '../../utils/size';
import { Fonts } from '../../utils/fonts';
import Posts from '../Posts';
import Users from '../Users';
import { ProfileStackNavProp } from '../../navigation/ProfileStack';
import { Auth } from '../../api';
import { AuthContext } from '../../utils/AuthContext';
import { Profile as ProfileAPI } from '../../api';

const Tab = createMaterialTopTabNavigator();

const Profile: React.FC = () => {
    const navigation = useNavigation<ProfileStackNavProp>();
    const { setAccessToken } = React.useContext(AuthContext);
    const qC = useQueryClient();

    const q = useQuery({ queryKey: ['profile'], queryFn: ProfileAPI.getProfile });

    const [showMenu, setShowMenu] = React.useState(false);
    const handleSignOut = async () => {
        setShowMenu(false);
        setAccessToken(null);
        await Auth.signOut();
    };

    return (
        <SafeScreen>
            <View style={styles.profileCard}>
                <Avatar.Image size={84} source={{ uri: "https://afaan.dev/assets/Afaan.png" }} />
                <View style={styles.cardText}>
                    <Text variant="displaySmall" style={{ fontFamily: Fonts.Aclonica }}>{q.data?.profile.name}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: SpacingW.s2 }}>
                        <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>@{q.data?.profile.username}</Text>
                        <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>&middot;</Text>
                        <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro, color: Colors.RED }} onPress={() => Linking.openURL("https://afaan.dev")}>{q.data?.profile.link}</Text>
                    </View>
                    <Text variant="titleSmall" style={{ marginVertical: SpacingH.s0, fontFamily: Fonts.Ubuntu }}>{q.data?.profile.bio}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: SpacingW.s2 }}>
                        <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>112 followers</Text>
                        <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>&middot;</Text>
                        <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>73 following</Text>
                    </View>
                </View>
                <Menu
                    visible={showMenu}
                    onDismiss={() => setShowMenu(false)}
                    theme={{ colors: { elevation: { level2: Colors.DARK } } }}
                    anchor={<IconButton icon="menu" iconColor={Colors.SOFT_WHITE} size={24} style={{ marginTop: -SpacingH.s0 }} onPress={() => setShowMenu(true)} />}>
                    <Menu.Item onPress={() => { setShowMenu(false); navigation.push('EditProfile'); }} title="Edit Profile" leadingIcon="account" />
                    <Menu.Item onPress={() => { setShowMenu(false); Linking.openURL("https://afaan.dev"); }} title="Share Profile" leadingIcon="share" />
                    <Divider />
                    <Menu.Item onPress={handleSignOut} title="Sign Out" leadingIcon="logout" />
                </Menu>
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
        gap: SpacingW.s4,
        alignItems: "flex-start",
    },
    cardText: {
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
