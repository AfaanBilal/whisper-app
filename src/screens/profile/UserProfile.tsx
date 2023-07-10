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
import { Avatar, IconButton, Menu, Text, ActivityIndicator, Button, Chip, Appbar } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Entypo } from '@expo/vector-icons';

import SafeScreen from '../../components/SafeScreen';
import { Colors } from '../../utils/colors';
import { SpacingH, SpacingW } from '../../utils/size';
import { Fonts } from '../../utils/fonts';
import Posts from '../Posts';
import Users from '../Users';
import { ProfileStackNavProp, ProfileStackParamList } from '../../navigation/ProfileStack';
import { Users as UserAPI } from '../../api';
import { theme } from '../../utils/theme';

const Tab = createMaterialTopTabNavigator();

type UserProfileRouteProp = RouteProp<ProfileStackParamList, 'UserProfile'>;

const UserProfile: React.FC = () => {
    const navigation = useNavigation<ProfileStackNavProp>();
    const route = useRoute<UserProfileRouteProp>();
    const uuid = route.params.uuid;

    const { isLoading, data, isFetching, refetch } = useQuery({ queryKey: ['user-profile', uuid], queryFn: () => UserAPI.getUserProfile(uuid) });
    const [showMenu, setShowMenu] = React.useState(false);

    const qC = useQueryClient();
    const follow = useMutation({
        mutationFn: async () => await UserAPI.followUser(uuid),
        onSuccess: async () => qC.invalidateQueries(['user-profile', uuid]),
    });
    const unfollow = useMutation({
        mutationFn: async () => await UserAPI.unfollowUser(uuid),
        onSuccess: async () => qC.invalidateQueries(['user-profile', uuid]),
    });
    const cancelFollow = useMutation({
        mutationFn: async () => await UserAPI.cancelFollowRequest(uuid),
        onSuccess: async () => qC.invalidateQueries(['user-profile', uuid]),
    });

    return (
        <SafeScreen>
            <Appbar style={{ backgroundColor: Colors.DARK }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
            </Appbar>
            {isLoading ?
                <ActivityIndicator animating={true} size="large" color={Colors.SOFT_WHITE} style={{ paddingVertical: SpacingH.s2 }} /> :
                <View style={styles.profileCard}>
                    <Avatar.Image size={84} source={{ uri: "https://afaan.dev/assets/Afaan.png" }} />
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
                        <View style={styles.followContainer}>
                            {data?.followed ?
                                <Chip icon="check" mode="outlined">Following</Chip> :
                                (data?.requested ?
                                    <Chip icon="clock" mode="outlined" onPress={() => cancelFollow.mutate()}>Requested</Chip> :
                                    <Button mode="outlined" style={styles.button} onPress={() => follow.mutate()} loading={follow.isLoading}>Follow</Button>
                                )
                            }
                            {data?.follower && <Chip mode="outlined">Follows you</Chip>}
                        </View>
                    </View>
                    <Menu
                        style={styles.menu}
                        visible={showMenu}
                        onDismiss={() => setShowMenu(false)}
                        theme={{ colors: { elevation: { level2: Colors.DARK } } }}
                        anchor={<IconButton icon="menu" iconColor={Colors.SOFT_WHITE} size={24} style={{ marginTop: -SpacingH.s0 }} onPress={() => setShowMenu(true)} />}>
                        {data?.followed && <Menu.Item onPress={() => { setShowMenu(false); unfollow.mutate(); }} title="Unfollow" leadingIcon="account" />}
                        {data?.follower && <Menu.Item onPress={() => { setShowMenu(false); }} title="Remove follower" leadingIcon="account" />}
                        <Menu.Item onPress={() => { setShowMenu(false); Linking.openURL("https://afaan.dev"); }} title="Share Profile" leadingIcon="share" />
                    </Menu>
                </View>
            }

            {!data?.profile.is_private || data?.followed ?
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
        flex: 2,
        flexGrow: 1,
    },
    menu: {
        flex: 1,
    },
    button: {
        borderRadius: theme.roundness,
    },
    buttonText: {
        fontFamily: Fonts.SourceSansProSemiBold,
    },
    followContainer: {
        marginTop: SpacingH.s1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: SpacingW.s2,
    },
    followsYouText: {
        fontFamily: Fonts.SourceSansPro,
        backgroundColor: Colors.BLUE,
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
    },
});
