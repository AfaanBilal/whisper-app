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
import { ActivityIndicator, FAB, Portal, Text } from 'react-native-paper';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Toast from 'react-native-toast-message';
import { Entypo } from '@expo/vector-icons';

import SafeScreen from '../components/SafeScreen';
import ScreenTitle from '../components/ScreenTitle';
import Posts from './Posts';
import { Colors } from '../utils/colors';
import { SpacingH } from '../utils/size';
import { Home as HomeAPI } from '../api';
import ModalCompose from '../components/ModalCompose';
import { Posts as PostAPI } from '../api';
import { Fonts } from '../utils/fonts';

const Home: React.FC = () => {
    const [showCompose, setShowCompose] = React.useState(false);
    const { isLoading, data, isFetching, refetch } = useQuery({ queryKey: ['home'], queryFn: HomeAPI.home });
    const [postContent, setPostContent] = React.useState("");

    const qC = useQueryClient();
    const m = useMutation({
        mutationFn: async () => await PostAPI.createPost(postContent),
        onSuccess: async () => {
            qC.invalidateQueries();
            Toast.show({ type: 'success', text1: 'Posted!', visibilityTime: 1000 });
            setPostContent("");
            setShowCompose(false);
        },
    });

    return (
        <SafeScreen>
            <ScreenTitle title="Whisper" />
            {isLoading ?
                <ActivityIndicator animating={true} size="large" color={Colors.SOFT_WHITE} style={{ paddingVertical: SpacingH.s6 }} /> :
                (data?.posts && <Posts posts={data.posts} isFetching={isFetching} refetch={refetch} />)
            }
            {!isLoading && !data.posts &&
                <View style={styles.empty}>
                    <Entypo name="feather" size={64} color={Colors.RED} />
                    <Text variant="titleLarge" style={styles.emptyText}>Welcome to Whisper</Text>
                    <Text variant="titleSmall" style={styles.emptyText}>Create your first post or explore to follow some people.</Text>
                </View>
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
    empty: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: SpacingH.s2,
    },
    emptyText: {
        fontFamily: Fonts.SourceSansProSemiBold,
        color: Colors.DARK_GRAY,
    },
});
