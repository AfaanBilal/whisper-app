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
import { User } from '../screens/profile/EditProfile';

const getProfile = async () => (await axios.get('me')).data;
const updateProfile = async ({ name, bio, link, birthday, is_private }: User) => (await axios.put('me', { name, bio, link, birthday, is_private })).data;

export default {
    getProfile,
    updateProfile,
};
