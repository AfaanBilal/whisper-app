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

const Stage = {
    Request: "request",
    Verify: "verify",
    Reset: "reset",
};

const ResetPassword: React.FC = () => {
    const navigation = useNavigation<RootStackNavProp>();

    const [stage, setStage] = React.useState(Stage.Request);
    const [loading, setLoading] = React.useState(false);

    const [email, setEmail] = React.useState("");

    const [uuid, setUuid] = React.useState("");
    const [code, setCode] = React.useState("");

    const [token, setToken] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const requestResetPassword = async () => {
        if (!email) {
            Toast.show({
                type: 'error',
                text1: 'Please fill in the email.',
            });
            return;
        }

        setLoading(true);

        try {
            const r = await Auth.requestResetPassword(email);
            setUuid(r.data.uuid);
            setStage(Stage.Verify);
            Toast.show({
                type: 'success',
                text1: r.data.message,
            });
        } catch (e: any) {
            Toast.show({
                type: 'error',
                text1: e.response.data.message,
            });
        }

        setLoading(false);
    };

    const verifyCode = async () => {
        if (!code || code.length < 6) {
            Toast.show({
                type: 'error',
                text1: 'Please fill in the complete code.',
            });
            return;
        }

        setLoading(true);

        try {
            const r = await Auth.verifyCode(uuid, code);
            setToken(r.data.token);
            setStage(Stage.Reset);
        } catch (e: any) {
            Toast.show({
                type: 'error',
                text1: e.response.data.message,
            });
        }

        setLoading(false);
    };

    const resetPassword = async () => {
        if (!password) {
            Toast.show({
                type: 'error',
                text1: 'Please fill in the password.',
            });
            return;
        }

        setLoading(true);

        try {
            const r = await Auth.resetPassword(uuid, token, password);
            navigation.navigate('SignIn');
            Toast.show({
                type: 'success',
                text1: r.data.message,
            });
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
            <AuthScreenTitle title="Reset Password" />

            {Stage.Request == stage &&
                <View style={styles.stageContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput mode="outlined" label="Email" value={email} onChangeText={text => setEmail(text)} left={<TextInput.Icon icon="email" />} inputMode="email" autoCapitalize="none" />
                    </View>

                    <AuthButton label="Request Reset" onPress={requestResetPassword} loading={loading} />
                </View>
            }

            {Stage.Verify == stage &&
                <View style={styles.stageContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput mode="outlined" label="Code" value={code} onChangeText={text => setCode(text)} left={<TextInput.Icon icon="asterisk" />} maxLength={6} keyboardType="number-pad" inputMode="numeric" />
                    </View>

                    <AuthButton label="Verify Code" onPress={verifyCode} loading={loading} />
                </View>
            }

            {Stage.Reset == stage &&
                <View style={styles.stageContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput mode="outlined" label="New Password" value={password} onChangeText={text => setPassword(text)} left={<TextInput.Icon icon="lock" />}
                            secureTextEntry={!passwordVisible} right={<TextInput.Icon onPress={() => setPasswordVisible(!passwordVisible)} icon={passwordVisible ? "eye-off" : "eye"} />} />
                    </View>

                    <AuthButton label="Request Reset" onPress={resetPassword} loading={loading} />
                </View>
            }

            <Button mode="text" style={{ marginTop: SpacingH.s3 }} onPress={() => navigation.navigate('SignIn')}>Remember your password? Sign in </Button>
        </AuthScreen>
    );
};

export default ResetPassword;

const styles = StyleSheet.create({
    stageContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: "100%",
        marginVertical: SpacingH.s2,
        paddingHorizontal: SpacingW.s5,
        paddingVertical: SpacingH.s1,
    },
});
