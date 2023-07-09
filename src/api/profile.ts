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

const getProfile = async () => (await axios.get('me')).data;
const updateProfile = async (name: string, bio: string, link: string, birthday: Date, is_private: boolean) => (await axios.put('me', { name, bio, link, birthday, is_private })).data;

export default {
    getProfile,
    updateProfile,
};
