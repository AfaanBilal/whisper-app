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
import { Avatar, Text, IconButton, Menu, Button, Divider, ActivityIndicator } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';

import SafeScreen from '../../components/SafeScreen';
import { Colors } from '../../utils/colors';
import { SpacingH, SpacingW } from '../../utils/size';
import { Fonts } from '../../utils/fonts';
import Posts from '../../components/Posts';
import Users from '../../components/Users';
import { ProfileStackNavProp } from '../../navigation/ProfileStack';
import { Auth } from '../../api';
import { AuthContext } from '../../utils/AuthContext';
import { Profile as ProfileAPI } from '../../api';

const Tab = createMaterialTopTabNavigator();

const Profile: React.FC = () => {
    const navigation = useNavigation<ProfileStackNavProp>();
    const { setAccessToken } = React.useContext(AuthContext);

    const { isLoading, data, isFetching, refetch } = useQuery({ queryKey: ['profile'], queryFn: ProfileAPI.getProfile });
    const followers = useQuery({ queryKey: ['followers'], queryFn: ProfileAPI.getFollowers });
    const following = useQuery({ queryKey: ['following'], queryFn: ProfileAPI.getFollowing });

    const [showMenu, setShowMenu] = React.useState(false);
    const handleSignOut = async () => {
        setShowMenu(false);
        await Auth.signOut();
        setAccessToken(null);
    };

    return (
        <SafeScreen>
            {isLoading ?
                <ActivityIndicator animating={true} size="large" color={Colors.SOFT_WHITE} style={{ paddingVertical: SpacingH.s2 }} /> :
                <View style={styles.profileCard}>
                    <Avatar.Image size={84} source={{ uri: "https://afaan.dev/assets/Afaan.png" }} style={styles.avatar} />
                    <View style={styles.cardText}>
                        <Text variant="headlineLarge" style={{ fontFamily: Fonts.Aclonica }}>{data?.profile.name}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: SpacingW.s2 }}>
                            <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>@{data?.profile.username}</Text>
                            {data?.profile.link && <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>&middot;</Text>}
                            {data?.profile.link && <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro, color: Colors.RED }} onPress={() => Linking.openURL(data?.profile.link)}>{data?.profile.link}</Text>}
                        </View>
                        {data?.profile.bio && <Text variant="titleSmall" style={{ marginVertical: SpacingH.s0, fontFamily: Fonts.Ubuntu }}>{data?.profile.bio}</Text>}
                        <View style={{ flexDirection: "row", alignItems: "center", gap: SpacingW.s2 }}>
                            <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>{data?.post_count} posts</Text>
                            <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>&middot;</Text>
                            <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>{data?.follower_count} followers</Text>
                            <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>&middot;</Text>
                            <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>{data?.following_count} following</Text>
                        </View>
                    </View>
                    <Menu
                        style={styles.menu}
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
            }

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
                <Tab.Screen name="Posts">{props => <Posts posts={data?.posts || []} isFetching={isFetching} refetch={refetch} {...props} />}</Tab.Screen>
                <Tab.Screen name="Followers">{props => <Users users={followers.data?.followers || []} isFetching={followers.isFetching} refetch={followers.refetch} {...props} />}</Tab.Screen>
                <Tab.Screen name="Following">{props => <Users users={following.data?.following || []} isFetching={following.isFetching} refetch={following.refetch} {...props} />}</Tab.Screen>
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
    avatar: {
        flex: 0,
    },
    cardText: {
        flex: 2,
        flexGrow: 1,
    },
    button: {
        borderRadius: 0,
        margin: 0,
        padding: 0,
    },
    menu: {
        flex: 1,
    },
    buttonText: {
        fontFamily: Fonts.SourceSansProSemiBold,
    },
});
