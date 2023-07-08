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

const SignIn: React.FC = () => {
    const navigation = useNavigation<any>();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <SafeScreen>
            <View style={styles.container}>
                <Text variant="displayMedium">Sign In</Text>

                <View style={styles.inputContainer}>
                    <TextInput mode="outlined" label="Email" value={email} onChangeText={text => setEmail(text)} style={{ width: "100%" }} left={<TextInput.Icon icon="email" />} />
                    <TextInput mode="outlined" label="Password" value={password} onChangeText={text => setPassword(text)} style={{ width: "100%" }} left={<TextInput.Icon icon="lock" />}
                        secureTextEntry={!passwordVisible} right={<TextInput.Icon onPress={() => setPasswordVisible(!passwordVisible)} icon={passwordVisible ? "eye-off" : "eye"} />} />
                </View>

                <View style={styles.buttonContainer}>
                    <Button mode="text" onPress={() => navigation.navigate('ResetPassword')}>Forgot Password?</Button>
                </View>

                <Button mode="contained" uppercase onPress={() => console.log('Pressed')}>Sign In</Button>
                <Button mode="text" style={{ marginTop: SpacingH.s3 }} onPress={() => navigation.navigate('SignUp')}>Create an account</Button>
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
        marginTop: SpacingH.s2,
        paddingHorizontal: SpacingW.s5,
        paddingVertical: SpacingH.s1,
    },
    buttonContainer: {
        width: "100%",
        paddingHorizontal: SpacingW.s3,
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: SpacingH.s1,
    },
});
