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

const ResetPassword: React.FC = () => {
    const navigation = useNavigation<any>();

    const [email, setEmail] = React.useState("");

    return (
        <SafeScreen>
            <View style={styles.container}>
                <Text variant="displayMedium">Reset Password</Text>

                <View style={styles.inputContainer}>
                    <TextInput mode="outlined" label="Email" value={email} onChangeText={text => setEmail(text)} style={{ width: "100%" }} left={<TextInput.Icon icon="email" />} />
                </View>

                <Button mode="contained" uppercase onPress={() => console.log('Pressed')}>Reset Password</Button>
                <Button mode="text" style={{ marginTop: SpacingH.s3 }} onPress={() => navigation.navigate('SignIn')}>Remember your password? Sign in </Button>
            </View>
        </SafeScreen>
    );
};

export default ResetPassword;

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
