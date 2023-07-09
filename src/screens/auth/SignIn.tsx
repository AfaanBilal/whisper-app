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
import { Button, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import { FontSize, Size, SpacingH, SpacingW } from '../../utils/size';
import { RootStackNavProp } from '../../navigation/RootStack';
import AuthScreenTitle from '../../components/AuthScreenTitle';
import AuthScreen from '../../components/AuthScreen';
import AuthButton from '../../components/AuthButton';

const SignIn: React.FC = () => {
    const navigation = useNavigation<RootStackNavProp>();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <AuthScreen>
            <AuthScreenTitle title="Sign In" />

            <View style={styles.inputContainer}>
                <TextInput mode="outlined" label="Email" value={email} onChangeText={text => setEmail(text)} style={{ width: "100%" }} left={<TextInput.Icon icon="email" />} />
                <TextInput mode="outlined" label="Password" value={password} onChangeText={text => setPassword(text)} style={{ width: "100%" }} left={<TextInput.Icon icon="lock" />}
                    secureTextEntry={!passwordVisible} right={<TextInput.Icon onPress={() => setPasswordVisible(!passwordVisible)} icon={passwordVisible ? "eye-off" : "eye"} />} />
            </View>

            <View style={styles.buttonContainer}>
                <Button mode="text" onPress={() => navigation.navigate('ResetPassword')}>Forgot Password?</Button>
            </View>

            <AuthButton label="Sign In" onPress={() => console.log('Pressed')} />
            <Button mode="text" style={{ marginTop: SpacingH.s3 }} onPress={() => navigation.navigate('SignUp')}>Create an account</Button>
        </AuthScreen>
    );
};

export default SignIn;

const styles = StyleSheet.create({
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
