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

const getUserProfile = async (uuid: string) => (await axios.get('users/' + uuid)).data;
const followUser = async (uuid: string) => (await axios.post('users/' + uuid + '/follow')).data;
const cancelFollowRequest = async (uuid: string) => (await axios.post('users/' + uuid + '/follow/cancel')).data;
const unfollowUser = async (uuid: string) => (await axios.delete('users/' + uuid + '/follow')).data;
const getFollowers = async (uuid: string) => (await axios.get('/users/' + uuid + '/followers')).data;
const getFollowing = async (uuid: string) => (await axios.get('/users/' + uuid + '/following')).data;

export default {
    getUserProfile,
    followUser,
    cancelFollowRequest,
    unfollowUser,
    getFollowers,
    getFollowing,
};
