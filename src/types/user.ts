/**
 * Whisper
 *
 * A micro-blogging platform.
 *
 * @author    Afaan Bilal
 * @copyright 2023 Afaan Bilal
 * @link      https://eonyx.io
 */

export type User = {
    name: string;
    username: string;
    link: string;
    bio: string;
    image: string;
    birthday: string | null;
    is_private: boolean;
};

export type UserResource = {
    uuid: string;
    name: string;
    username: string;
    image: string;
    is_private: boolean;
};
