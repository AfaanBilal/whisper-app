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
import { FAB } from 'react-native-paper';

import SafeScreen from '../components/SafeScreen';
import ScreenTitle from '../components/ScreenTitle';
import Posts from './Posts';
import { Colors } from '../utils/colors';

const Home: React.FC = () => {
    return (
        <SafeScreen>
            <ScreenTitle title="Whisper" />
            <Posts />
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => console.log('Pressed')}
            />
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
