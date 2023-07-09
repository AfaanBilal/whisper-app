/**
 * Whisper
 *
 * A micro-blogging platform.
 *
 * @author    Afaan Bilal
 * @copyright 2023 Afaan Bilal
 * @link      https://eonyx.io
 */

import axios from 'axios';
import auth from './auth';
import profile from './profile';
import home from './home';

axios.defaults.baseURL = 'http://192.168.29.229:8080/';
axios.defaults.timeout = 5000;

export const setAuthToken = (token: string | null) => { axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; }

export const Auth = auth;
export const Profile = profile;
export const Home = home;
