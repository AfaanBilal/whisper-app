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
import { Button, FAB, Modal, Portal, Text, TextInput } from 'react-native-paper';

import SafeScreen from '../components/SafeScreen';
import ScreenTitle from '../components/ScreenTitle';
import Posts from './Posts';
import { Colors } from '../utils/colors';
import { Size, SpacingH, SpacingW } from '../utils/size';
import { Fonts } from '../utils/fonts';
import { theme } from '../utils/theme';

const Home: React.FC = () => {
    const [showCompose, setShowCompose] = React.useState(false);

    return (
        <SafeScreen>
            <ScreenTitle title="Whisper" />
            <Posts />
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => setShowCompose(true)}
            />
            <Portal>
                <Modal visible={showCompose} onDismiss={() => setShowCompose(false)} contentContainerStyle={styles.composeContainerStyle}>
                    <Text variant="titleLarge" style={styles.title}>Compose</Text>
                    <TextInput label="What's on your mind?" mode="outlined" multiline={true} style={styles.input} />
                    <View style={styles.buttonContainer}>
                        <Button compact onPress={() => setShowCompose(false)} style={styles.buttonStyle}>Cancel</Button>
                        <Button mode="contained" onPress={() => setShowCompose(false)} style={styles.buttonStyle}>Post</Button>
                    </View>
                </Modal>
            </Portal>
        </SafeScreen>
    );
};

export default Home;

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: Colors.RED,
    },
    composeContainerStyle: {
        backgroundColor: Colors.DARK,
        marginHorizontal: SpacingW.s2,
        paddingHorizontal: SpacingW.s2,
        paddingVertical: SpacingH.s2,
        borderRadius: theme.roundness,
    },
    title: {
        fontFamily: Fonts.Aclonica,
        paddingBottom: SpacingH.s1,
    },
    input: {
        height: Size.h15,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: SpacingH.s2,
        paddingHorizontal: SpacingW.s2,
    },
    buttonStyle: {
        borderRadius: theme.roundness,
    },
});
