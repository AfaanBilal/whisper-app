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
import { StyleSheet } from 'react-native';
import { ActivityIndicator, FAB, Portal } from 'react-native-paper';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';

import SafeScreen from '../components/SafeScreen';
import ScreenTitle from '../components/ScreenTitle';
import Posts from './Posts';
import { Colors } from '../utils/colors';
import { SpacingH } from '../utils/size';
import { Home as HomeAPI } from '../api';
import ModalCompose from '../components/ModalCompose';
import { Posts as PostAPI } from '../api';

const Home: React.FC = () => {
    const [showCompose, setShowCompose] = React.useState(false);
    const { isLoading, data } = useQuery({ queryKey: ['home'], queryFn: HomeAPI.home });
    const [postContent, setPostContent] = React.useState("");

    const qC = useQueryClient();
    const m = useMutation({
        mutationFn: async () => await PostAPI.createPost(postContent),
        onSuccess: async () => {
            qC.invalidateQueries(['home']);
            Toast.show({ type: 'success', text1: 'Posted!', visibilityTime: 1000 });
            setPostContent("");
            setShowCompose(false);
        },
    });

    return (
        <SafeScreen>
            <ScreenTitle title="Whisper" />
            {isLoading ?
                <ActivityIndicator animating={true} size="large" color={Colors.SOFT_WHITE} style={{ paddingVertical: SpacingH.s2 }} /> :
                <Posts posts={data.posts} />
            }
            <FAB icon="plus" style={styles.fab} onPress={() => setShowCompose(true)} />
            <Portal>
                <ModalCompose show={showCompose} setShow={setShowCompose} onPost={(content) => { setPostContent(content); m.mutate(); }} posting={m.isLoading} />
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
});
