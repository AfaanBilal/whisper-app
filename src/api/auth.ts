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

const signIn = async (email: string, password: string) => axios.post('auth/sign-in', { email, password });
const signUp = async (name: string, email: string, password: string) => axios.post('auth/sign-up', { name, email, password });

export default {
    signIn,
    signUp,
};
