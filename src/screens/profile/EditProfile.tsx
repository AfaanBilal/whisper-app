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
import { Button, TextInput, Switch, Text, ActivityIndicator } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import DateTimePicker from '@react-native-community/datetimepicker';

import SafeScreen from '../../components/SafeScreen';
import { FontSize, SpacingH, SpacingW } from '../../utils/size';
import { Fonts } from '../../utils/fonts';
import ScreenTitle from '../../components/ScreenTitle';
import { theme } from '../../utils/theme';
import { ProfileStackNavProp } from '../../navigation/ProfileStack';
import { Profile } from '../../api';
import { Colors } from '../../utils/colors';
import { User } from '../../types';
import Avatar from '../../components/Avatar';

const EditProfile: React.FC = () => {
    const navigation = useNavigation<ProfileStackNavProp>();

    const [user, setUser] = React.useState<User>({ name: "", username: "", link: "", bio: "", image: "", birthday: null, is_private: false });
    const { isLoading, data } = useQuery({
        queryKey: ['profile'],
        queryFn: Profile.getProfile,
        onSuccess: async () => {
            setUser(data.profile);
        },
    });

    const qC = useQueryClient();
    const m = useMutation({
        mutationFn: async () => await Profile.updateProfile(user),
        onSuccess: async (d) => {
            qC.setQueryData(['profile'], { ...data, profile: d.profile });
            Toast.show({ type: 'success', text1: 'Profile updated.', visibilityTime: 1000 });
        },
    });

    return (
        <SafeScreen>
            <ScreenTitle title="Whisper" />
            {isLoading ?
                <ActivityIndicator animating={true} size="large" color={Colors.SOFT_WHITE} style={{ marginTop: SpacingH.s6 }} /> :
                <View style={styles.container}>
                    <Avatar size={120} name={user.name} image={user.image} />
                    <View style={styles.inputContainer}>
                        <TextInput mode="outlined" label="Username" value={user.username} style={{ width: "100%" }} left={<TextInput.Icon icon="at" />} disabled />
                        <TextInput mode="outlined" label="Name" value={user.name} onChangeText={text => setUser({ ...user, name: text })} style={{ width: "100%" }} left={<TextInput.Icon icon="account" />} />
                        <TextInput mode="outlined" label="Link" value={user.link} onChangeText={text => setUser({ ...user, link: text })} style={{ width: "100%" }} left={<TextInput.Icon icon="link" />} inputMode="url" autoCapitalize="none" />
                        <TextInput mode="outlined" label="Bio" multiline value={user.bio} onChangeText={text => setUser({ ...user, bio: text })} style={{ width: "100%" }} left={<TextInput.Icon icon="text-box-outline" />} />
                        <View style={styles.switchContainer}>
                            <Entypo name="calendar" size={24} color={theme.colors.secondary} />
                            <Text variant="titleMedium" style={{ flex: 1, paddingLeft: SpacingW.s4 }}>Date of Birth</Text>
                            {user.birthday ?
                                <DateTimePicker mode="date" themeVariant="dark" textColor={Colors.SOFT_WHITE} value={new Date(user.birthday)} onChange={(e, d) => setUser({ ...user, birthday: d?.toISOString() || "" })} /> :
                                <Button mode="outlined" uppercase onPress={() => setUser({ ...user, birthday: new Date().toISOString() })} style={{ borderRadius: theme.roundness }}>Set</Button>
                            }
                        </View>
                        <View style={styles.switchContainer}>
                            <Entypo name="lock" size={24} color={theme.colors.secondary} />
                            <Text variant="titleMedium" style={{ flex: 1, paddingLeft: SpacingW.s4 }}>Private</Text>
                            <Switch value={user.is_private} onValueChange={value => setUser({ ...user, is_private: value })} />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button mode="contained" uppercase onPress={() => m.mutate()} style={styles.buttonStyle} labelStyle={styles.buttonTextStyle} loading={m.isLoading}>Save</Button>
                        <Button mode="outlined" uppercase onPress={() => navigation.goBack()} style={styles.buttonStyle} labelStyle={styles.buttonTextStyle}>Back</Button>
                    </View>
                </View>
            }
        </SafeScreen>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: SpacingH.s2,
        alignItems: "center",
    },
    inputContainer: {
        width: "100%",
        marginTop: SpacingH.s2,
        paddingHorizontal: SpacingW.s4,
    },
    switchContainer: {
        marginTop: SpacingH.s1,
        paddingHorizontal: SpacingW.s4,
        paddingVertical: SpacingH.s1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: theme.colors.outline,
        borderWidth: 1,
        borderRadius: theme.roundness,
        backgroundColor: theme.colors.surface,
    },
    buttonContainer: {
        width: "100%",
        flex: 1,
        justifyContent: "space-between",
        marginTop: SpacingH.s2,
        paddingHorizontal: SpacingW.s4,
    },
    buttonStyle: {
        width: "100%",
        borderRadius: theme.roundness,
    },
    buttonTextStyle: {
        paddingVertical: 3,
        fontSize: FontSize.SMALL,
        fontFamily: Fonts.UbuntuBold,
    },
});
