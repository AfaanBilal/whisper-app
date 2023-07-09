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
import { Avatar, Button, TextInput, Switch, Text } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import SafeScreen from '../../components/SafeScreen';
import { FontSize, SpacingH, SpacingW } from '../../utils/size';
import { Fonts } from '../../utils/fonts';
import ScreenTitle from '../../components/ScreenTitle';
import { theme } from '../../utils/theme';
import { ProfileStackNavProp } from '../../navigation/ProfileStack';

type User = {
    name: string;
    link: string;
    bio: string;
    image: string;
    birthday: Date;
    is_private: boolean;
};

const EditProfile: React.FC = () => {
    const navigation = useNavigation<ProfileStackNavProp>();

    const [user, setUser] = React.useState<User>({ name: "", link: "", bio: "", image: "", birthday: new Date(), is_private: false });

    return (
        <SafeScreen>
            <ScreenTitle title="Whisper" />
            <View style={styles.container}>
                <Avatar.Image size={120} source={{ uri: user.image || "https://afaan.dev/assets/Afaan.png" }} />
                <View style={styles.inputContainer}>
                    <TextInput mode="outlined" label="Name" value={user.name} onChangeText={text => setUser({ ...user, name: text })} style={{ width: "100%" }} left={<TextInput.Icon icon="account" />} />
                    <TextInput mode="outlined" label="Link" value={user.link} onChangeText={text => setUser({ ...user, link: text })} style={{ width: "100%" }} left={<TextInput.Icon icon="link" />} />
                    <TextInput mode="outlined" label="Bio" value={user.bio} onChangeText={text => setUser({ ...user, bio: text })} style={{ width: "100%" }} left={<TextInput.Icon icon="text-box-outline" />} />
                    <View style={styles.switchContainer}>
                        <Entypo name="lock" size={24} color={theme.colors.secondary} />
                        <Text variant="titleMedium" style={{ flex: 1, paddingLeft: SpacingW.s4 }}>Private</Text>
                        <Switch value={user.is_private} onValueChange={value => setUser({ ...user, is_private: value })} />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button mode="contained" uppercase onPress={() => {}} style={styles.buttonStyle} labelStyle={styles.buttonTextStyle} loading={false}>Save</Button>
                    <Button mode="outlined" uppercase onPress={() => navigation.goBack()} style={styles.buttonStyle} labelStyle={styles.buttonTextStyle} loading={false}>Back</Button>
                </View>
            </View>
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
