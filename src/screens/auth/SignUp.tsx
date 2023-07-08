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
import { Button, Text, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import SafeScreen from '../../components/SafeScreen';
import { SpacingH, SpacingW } from '../../utils/size';
import { RootStackNavProp } from '../../navigation/RootStack';

const SignIn: React.FC = () => {
    const navigation = useNavigation<RootStackNavProp>();

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <SafeScreen>
            <View style={styles.container}>
                <Text variant="displayMedium">Sign Up</Text>

                <View style={styles.inputContainer}>
                    <TextInput mode="outlined" label="Name" value={name} onChangeText={text => setName(text)} style={{ width: "100%" }} left={<TextInput.Icon icon="account" />} />
                    <TextInput mode="outlined" label="Email" value={email} onChangeText={text => setEmail(text)} style={{ width: "100%" }} left={<TextInput.Icon icon="email" />} />
                    <TextInput mode="outlined" label="Password" value={password} onChangeText={text => setPassword(text)} style={{ width: "100%" }} left={<TextInput.Icon icon="lock" />}
                        secureTextEntry={!passwordVisible} right={<TextInput.Icon onPress={() => setPasswordVisible(!passwordVisible)} icon={passwordVisible ? "eye-off" : "eye"} />} />
                </View>

                <Button mode="contained" uppercase onPress={() => console.log('Pressed')}>Sign Up</Button>

                <Button mode="text" style={{ marginTop: SpacingH.s3 }} onPress={() => navigation.navigate('SignIn')}>Have an account? Sign In</Button>
            </View>
        </SafeScreen>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: SpacingW.s1,
    },
    inputContainer: {
        width: "100%",
        marginVertical: SpacingH.s2,
        paddingHorizontal: SpacingW.s5,
        paddingVertical: SpacingH.s1,
    },
});
