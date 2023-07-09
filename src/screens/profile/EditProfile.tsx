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
import { Avatar, TextInput } from 'react-native-paper';

import SafeScreen from '../../components/SafeScreen';
import { Colors } from '../../utils/colors';
import { SpacingH, SpacingW } from '../../utils/size';
import { Fonts } from '../../utils/fonts';
import ScreenTitle from '../../components/ScreenTitle';

type User = {
    name: string;
    link: string;
    bio: string;
    image: string;
    birthday: Date;
    is_private: boolean;
};

const EditProfile: React.FC = () => {
    const [user, setUser] = React.useState<User>({ name: "", link: "", bio: "", image: "", birthday: new Date(), is_private: false });

    return (
        <SafeScreen>
            <ScreenTitle title="Whisper" />
            <View style={styles.container}>
                <Avatar.Image size={120} source={{ uri: user.image || "https://afaan.dev/assets/Afaan.png" }} />
                <TextInput mode="outlined" label="Name" value={user.name} onChangeText={text => setUser({ ...user, name: text })} style={{ width: "100%" }} left={<TextInput.Icon icon="account" />} />
            </View>
        </SafeScreen>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
