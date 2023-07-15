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

import { SpacingH, SpacingW } from '../../utils/size';
import { RootStackNavProp } from '../../navigation/RootStack';
import AuthScreenTitle from '../../components/AuthScreenTitle';
import AuthScreen from '../../components/AuthScreen';
import AuthButton from '../../components/AuthButton';

const Stage = {
    Request: "request",
    Verify: "verify",
    Reset: "reset",
};

const ResetPassword: React.FC = () => {
    const navigation = useNavigation<RootStackNavProp>();

    const [stage, setStage] = React.useState(Stage.Request);

    const [email, setEmail] = React.useState("");

    const [uuid, setUuid] = React.useState("");
    const [code, setCode] = React.useState("");

    const [token, setToken] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <AuthScreen>
            <AuthScreenTitle title="Reset Password" />

            {Stage.Request == stage &&
                <View style={styles.stageContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput mode="outlined" label="Email" value={email} onChangeText={text => setEmail(text)} left={<TextInput.Icon icon="email" />} inputMode="email" autoCapitalize="none" />
                    </View>

                    <AuthButton label="Request Reset" onPress={() => setStage(Stage.Verify)} />
                </View>
            }

            {Stage.Verify == stage &&
                <View style={styles.stageContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput mode="outlined" label="Code" value={code} onChangeText={text => setCode(text)} left={<TextInput.Icon icon="asterisk" />} maxLength={6} keyboardType="number-pad" inputMode="numeric" />
                    </View>

                    <AuthButton label="Verify Code" onPress={() => setStage(Stage.Reset)} />
                </View>
            }

            {Stage.Reset == stage &&
                <View style={styles.stageContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput mode="outlined" label="New Password" value={password} onChangeText={text => setPassword(text)} left={<TextInput.Icon icon="lock" />}
                            secureTextEntry={!passwordVisible} right={<TextInput.Icon onPress={() => setPasswordVisible(!passwordVisible)} icon={passwordVisible ? "eye-off" : "eye"} />} />
                    </View>

                    <AuthButton label="Request Reset" onPress={() => setStage(Stage.Request)} />
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
