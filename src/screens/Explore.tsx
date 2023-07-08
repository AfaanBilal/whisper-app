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

import SafeScreen from '../components/SafeScreen';
import ScreenTitle from '../components/ScreenTitle';
import Posts from './Posts';

const Explore: React.FC = () => {
    return (
        <SafeScreen>
            <ScreenTitle title="Explore" />
            <Posts />
        </SafeScreen>
    );
};

export default Explore;

const styles = StyleSheet.create({

});
