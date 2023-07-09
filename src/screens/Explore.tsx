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
import { ActivityIndicator, Searchbar } from 'react-native-paper';

import SafeScreen from '../components/SafeScreen';
import ScreenTitle from '../components/ScreenTitle';
import Posts from './Posts';
import { Colors } from '../utils/colors';
import { useQuery } from '@tanstack/react-query';
import { Home } from '../api';
import { SpacingH } from '../utils/size';

const Explore: React.FC = () => {
    const [search, setSearch] = React.useState('');
    const { isLoading, data } = useQuery({ queryKey: ['explore'], queryFn: Home.explore });

    return (
        <SafeScreen>
            <ScreenTitle title="Explore" />
            <Searchbar theme={{ colors: { elevation: { level3: Colors.DARK }, outline: Colors.BLUE } }} mode="view" placeholder="Search" onChangeText={q => setSearch(q)} value={search} />
            {isLoading ?
                <ActivityIndicator animating={true} size="large" color={Colors.SOFT_WHITE} style={{ paddingVertical: SpacingH.s6 }} /> :
                <Posts posts={data.posts} />
            }
        </SafeScreen>
    );
};

export default Explore;

const styles = StyleSheet.create({

});
