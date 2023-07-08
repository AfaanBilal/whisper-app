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

import SafeScreen from '../../components/SafeScreen';
import { SpacingH, SpacingW } from '../../utils/size';

const SignIn: React.FC = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
        <SafeScreen>
            <View style={styles.container}>
                <Text variant="displayMedium">Sign Up</Text>

                <View style={styles.inputContainer}>
                    <TextInput mode="outlined" label="Name" value={name} onChangeText={text => setName(text)} style={{ width: "100%" }} />
                    <TextInput mode="outlined" label="Email" value={email} onChangeText={text => setEmail(text)} style={{ width: "100%" }} />
                    <TextInput mode="outlined" label="Password" value={password} onChangeText={text => setPassword(text)} style={{ width: "100%" }}
                        secureTextEntry={!passwordVisible} right={<TextInput.Icon onPress={() => setPasswordVisible(!passwordVisible)} icon={passwordVisible ? "eye-off" : "eye"} />} />
                </View>

                <View style={styles.buttonContainer}>
                    <Button mode="text" compact onPress={() => console.log('Pressed')}>Have an account? Sign In</Button>
                </View>

                <Button mode="contained" uppercase onPress={() => console.log('Pressed')}>Sign Up</Button>
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
