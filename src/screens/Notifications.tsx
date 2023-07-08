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

const Notifications: React.FC = () => {
    return (
        <SafeScreen>
            <ScreenTitle title="Notifications" />
        </SafeScreen>
    );
};

export default Notifications;

const styles = StyleSheet.create({

});
