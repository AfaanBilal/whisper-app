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
import Toast from 'react-native-toast-message';

import { SpacingH, SpacingW } from '../../utils/size';
import { RootStackNavProp } from '../../navigation/RootStack';
import AuthScreenTitle from '../../components/AuthScreenTitle';
import AuthScreen from '../../components/AuthScreen';
import AuthButton from '../../components/AuthButton';
import { Auth } from '../../api';
import { AuthContext } from '../../utils/AuthContext';

const SignIn: React.FC = () => {
    const navigation = useNavigation<RootStackNavProp>();
    const { setAccessToken } = React.useContext(AuthContext);

    const [loading, setLoading] = React.useState(false);
    const [name, setName] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const handleSignUp = async () => {
        if (!name || !email || !password) {
            Toast.show({
                type: 'error',
                text1: 'Please fill in all the fields.',
            });
            return;
        }

        setLoading(true);

        try {
            const r = await Auth.signUp(name, username, email, password);
            setAccessToken(r.data.access_token);
        } catch (e: any) {
            Toast.show({
                type: 'error',
                text1: e.response.data.message,
            });
        }

        setLoading(false);
    };

    return (
        <AuthScreen>
            <AuthScreenTitle title="Sign Up" />

            <View style={styles.inputContainer}>
                <TextInput mode="outlined" label="Name" value={name} onChangeText={text => setName(text)} style={{ width: "100%" }} left={<TextInput.Icon icon="account" />} />
                <TextInput mode="outlined" label="Username" value={username} onChangeText={text => setUsername(text)} style={{ width: "100%" }} left={<TextInput.Icon icon="at" />} />
                <TextInput mode="outlined" label="Email" value={email} onChangeText={text => setEmail(text)} style={{ width: "100%" }} left={<TextInput.Icon icon="email" />} />
                <TextInput mode="outlined" label="Password" value={password} onChangeText={text => setPassword(text)} style={{ width: "100%" }} left={<TextInput.Icon icon="lock" />}
                    secureTextEntry={!passwordVisible} right={<TextInput.Icon onPress={() => setPasswordVisible(!passwordVisible)} icon={passwordVisible ? "eye-off" : "eye"} />} />
            </View>

            <AuthButton label="Sign Up" onPress={handleSignUp} loading={loading} />
            <Button mode="text" style={{ marginTop: SpacingH.s3 }} onPress={() => navigation.navigate('SignIn')}>Have an account? Sign In</Button>
        </AuthScreen>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        marginVertical: SpacingH.s2,
        paddingHorizontal: SpacingW.s5,
        paddingVertical: SpacingH.s1,
    },
});
