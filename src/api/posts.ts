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

const createPost = async (content: string) => (await axios.post('posts', { content })).data;
const likePost = async (uuid: string) => (await axios.post('posts/' + uuid + '/likes')).data;
const unlikePost = async (uuid: string) => (await axios.delete('posts/' + uuid + '/likes')).data;

export default {
    createPost,
    likePost,
    unlikePost,
};
