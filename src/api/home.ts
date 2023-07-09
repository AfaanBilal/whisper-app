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

const home = async () => (await axios.get('/')).data;
const explore = async () => (await axios.get('/explore')).data;
const createPost = async (content: string) => (await axios.post('posts', { content })).data;

export default {
    home,
    explore,
    createPost,
};
