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

export default {
    getUserProfile,
};
