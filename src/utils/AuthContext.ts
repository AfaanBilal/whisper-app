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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAuthToken } from '../api';

const STORAGE_KEY = 'accessToken';

export const AuthContext = React.createContext<{ accessToken: string | null, setAccessToken: (token: string | null) => void }>({ accessToken: null, setAccessToken: () => {} });

export const loadAccessToken = async () => {
    const token = await AsyncStorage.getItem(STORAGE_KEY);
    setAuthToken(token);
    return token;
};

export const saveAccessToken = async (token: string) => await AsyncStorage.setItem(STORAGE_KEY, token);
export const removeAccessToken = async () => await AsyncStorage.removeItem(STORAGE_KEY);
