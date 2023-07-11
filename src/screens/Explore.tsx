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
import { useQuery } from '@tanstack/react-query';

import SafeScreen from '../components/SafeScreen';
import ScreenTitle from '../components/ScreenTitle';
import Posts from '../components/Posts';
import { Colors } from '../utils/colors';
import { Home } from '../api';
import { SpacingH } from '../utils/size';
import Users from '../components/Users';

const Explore: React.FC = () => {
    const [search, setSearch] = React.useState('');
    const { isLoading, data, isFetching, refetch } = useQuery({ queryKey: ['explore'], queryFn: Home.explore });
    const searchQ = useQuery({ queryKey: ['search'], queryFn: () => Home.search(search), enabled: false });

    return (
        <SafeScreen>
            <ScreenTitle title="Explore" />
            <Searchbar
                theme={{ colors: { elevation: { level3: Colors.DARK }, outline: Colors.BLUE } }}
                mode="view"
                placeholder="Find people"
                onChangeText={q => setSearch(q)}
                onSubmitEditing={() => searchQ.refetch()}
                value={search}
            />
            {search != "" &&
                (searchQ.isFetching ?
                    <ActivityIndicator animating={true} size="large" color={Colors.SOFT_WHITE} style={{ paddingVertical: SpacingH.s6 }} /> :
                    <Users users={searchQ.data?.users} isFetching={searchQ.isFetching} refetch={searchQ.refetch} />
                )
            }
            {search == "" &&
                (isLoading ?
                    <ActivityIndicator animating={true} size="large" color={Colors.SOFT_WHITE} style={{ paddingVertical: SpacingH.s6 }} /> :
                    <Posts posts={data.posts} isFetching={isFetching} refetch={refetch} />
                )
            }
        </SafeScreen>
    );
};

export default Explore;

const styles = StyleSheet.create({

});
