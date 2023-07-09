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
import { Searchbar } from 'react-native-paper';

import SafeScreen from '../components/SafeScreen';
import ScreenTitle from '../components/ScreenTitle';
import Posts from './Posts';
import { Colors } from '../utils/colors';

const Explore: React.FC = () => {
    const [search, setSearch] = React.useState('');

    return (
        <SafeScreen>
            <ScreenTitle title="Explore" />
            <Searchbar theme={{ colors: { elevation: { level3: Colors.DARK }, outline: Colors.BLUE } }} mode="view" placeholder="Search" onChangeText={q => setSearch(q)} value={search} />
            <Posts />
        </SafeScreen>
    );
};

export default Explore;

const styles = StyleSheet.create({

});
