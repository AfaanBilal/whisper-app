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
import { User } from '../types';

const getProfile = async () => (await axios.get('me')).data;
const updateProfile = async ({ name, bio, link, image, birthday, is_private }: User) => (await axios.put('me', { name, bio, link, image, birthday, is_private })).data;
const getNotifications = async () => (await axios.get('/me/notifications')).data;
const acceptFollower = async (uuid: string) => (await axios.post('/me/followers/' + uuid + '/accept')).data;
const rejectFollower = async (uuid: string) => (await axios.post('/me/followers/' + uuid + '/reject')).data;
const getFollowers = async () => (await axios.get('/me/followers')).data;
const getFollowing = async () => (await axios.get('/me/following')).data;

export default {
    getProfile,
    updateProfile,
    getNotifications,
    acceptFollower,
    rejectFollower,
    getFollowers,
    getFollowing,
};
