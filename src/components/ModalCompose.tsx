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
import { Button, Modal, Text, TextInput } from 'react-native-paper';

import { Colors } from '../utils/colors';
import { Size, SpacingH, SpacingW } from '../utils/size';
import { Fonts } from '../utils/fonts';
import { theme } from '../utils/theme';

const ModalCompose: React.FC<{ show: boolean, setShow: (s: boolean) => void, onPost: (content: string) => void, posting: boolean }> = ({ show, setShow, onPost, posting }) => {
    const [content, setContent] = React.useState("");

    React.useEffect(() => {
        if (!posting) {
            setContent("");
        }
    }, [posting]);

    const handlePost = () => {
        onPost(content);
    };

    return (
        <Modal visible={show} onDismiss={() => setShow(false)} contentContainerStyle={styles.composeContainerStyle}>
            <Text variant="titleLarge" style={styles.title}>Compose</Text>
            <TextInput label="What's on your mind?" mode="outlined" multiline={true} style={styles.input} value={content} onChangeText={text => setContent(text)} />
            <View style={styles.buttonContainer}>
                <Button compact onPress={() => setShow(false)} style={styles.buttonStyle}>Cancel</Button>
                <Button mode="contained" onPress={handlePost} style={styles.buttonStyle} loading={posting}>Post</Button>
            </View>
        </Modal>
    );
};

export default ModalCompose;

const styles = StyleSheet.create({
    composeContainerStyle: {
        backgroundColor: Colors.DARK,
        marginHorizontal: SpacingW.s2,
        paddingHorizontal: SpacingW.s2,
        paddingVertical: SpacingH.s2,
        borderRadius: theme.roundness,
        top: -Size.h20,
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
