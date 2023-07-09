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

const ResetPassword: React.FC = () => {
    const navigation = useNavigation<RootStackNavProp>();

    const [email, setEmail] = React.useState("");

    return (
        <AuthScreen>
            <AuthScreenTitle title="Reset Password" />

            <View style={styles.inputContainer}>
                <TextInput mode="outlined" label="Email" value={email} onChangeText={text => setEmail(text)} style={{ width: "100%" }} left={<TextInput.Icon icon="email" />} />
            </View>

            <Button mode="contained" uppercase onPress={() => console.log('Pressed')}>Reset Password</Button>
            <Button mode="text" style={{ marginTop: SpacingH.s3 }} onPress={() => navigation.navigate('SignIn')}>Remember your password? Sign in </Button>
        </AuthScreen>
    );
};

export default ResetPassword;

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        marginVertical: SpacingH.s2,
        paddingHorizontal: SpacingW.s5,
        paddingVertical: SpacingH.s1,
    },
});
