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
import { Avatar, IconButton, Menu, Text, ActivityIndicator } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import { Entypo } from '@expo/vector-icons';

import SafeScreen from '../../components/SafeScreen';
import { Colors } from '../../utils/colors';
import { SpacingH, SpacingW } from '../../utils/size';
import { Fonts } from '../../utils/fonts';
import Posts from '../Posts';
import Users from '../Users';
import { ProfileStackNavProp, ProfileStackParamList } from '../../navigation/ProfileStack';
import { Users as UserAPI } from '../../api';

const Tab = createMaterialTopTabNavigator();

type UserProfileRouteProp = RouteProp<ProfileStackParamList, 'UserProfile'>;

const UserProfile: React.FC = () => {
    const navigation = useNavigation<ProfileStackNavProp>();
    const route = useRoute<UserProfileRouteProp>();

    const { isLoading, data, isFetching, refetch } = useQuery({ queryKey: ['user-profile'], queryFn: () => UserAPI.getUserProfile(route.params.uuid) });
    const [showMenu, setShowMenu] = React.useState(false);

    return (
        <SafeScreen>
            {isLoading ?
                <ActivityIndicator animating={true} size="large" color={Colors.SOFT_WHITE} style={{ paddingVertical: SpacingH.s2 }} /> :
                <View style={styles.profileCard}>
                    <Avatar.Image size={84} source={{ uri: "https://afaan.dev/assets/Afaan.png" }} />
                    <View style={styles.cardText}>
                        <Text variant="displaySmall" style={{ fontFamily: Fonts.Aclonica }}>{data?.profile.name}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: SpacingW.s2 }}>
                            <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>@{data?.profile.username}</Text>
                            <Text variant="titleMedium" style={{ fontFamily: Fonts.SourceSansPro }}>&middot;</Text>
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
                        visible={showMenu}
                        onDismiss={() => setShowMenu(false)}
                        theme={{ colors: { elevation: { level2: Colors.DARK } } }}
                        anchor={<IconButton icon="menu" iconColor={Colors.SOFT_WHITE} size={24} style={{ marginTop: -SpacingH.s0 }} onPress={() => setShowMenu(true)} />}>
                        {data?.followed && <Menu.Item onPress={() => { setShowMenu(false); }} title="Unfollow" leadingIcon="account" />}
                        {data?.follower && <Menu.Item onPress={() => { setShowMenu(false); }} title="Remove follower" leadingIcon="account" />}
                        <Menu.Item onPress={() => { setShowMenu(false); Linking.openURL("https://afaan.dev"); }} title="Share Profile" leadingIcon="share" />
                    </Menu>
                </View>
            }

            {data?.followed ?
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
                    <Tab.Screen name="Posts">{props => <Posts posts={data?.posts || []} {...props} isFetching={isFetching} refetch={refetch} />}</Tab.Screen>
                    <Tab.Screen name="Followers" component={Users} />
                    <Tab.Screen name="Following" component={Users} />
                </Tab.Navigator> :
                <View style={styles.private}>
                    <Entypo name="lock" size={56} color={Colors.DARK_GRAY} />
                    <Text variant="titleMedium" style={styles.privateText}>Private Account</Text>
                </View>
            }
        </SafeScreen>
    );
};

export default UserProfile;

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
    private: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: SpacingH.s2,
    },
    privateText: {
        fontFamily: Fonts.SourceSansProSemiBold,
        color: Colors.DARK_GRAY,
    }
});
