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
const unfollowUser = async (uuid: string) => (await axios.delete('users/' + uuid + '/follow')).data;

export default {
    getUserProfile,
    followUser,
    unfollowUser,
};
