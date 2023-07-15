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
const signUp = async (name: string, username: string, email: string, password: string) => axios.post('auth/sign-up', { name, username, email, password });
const requestResetPassword = async (email: string) => axios.post('auth/request-reset-password', { email });
const verifyCode = async (uuid: string, code: string) => axios.post('auth/verify-code', { uuid, code });
const resetPassword = async (uuid: string, token: string, password: string) => axios.post('auth/reset-password', { uuid, token, password });
const signOut = async () => axios.post('auth/sign-out');

export default {
    signIn,
    signUp,
    requestResetPassword,
    verifyCode,
    resetPassword,
    signOut,
};
