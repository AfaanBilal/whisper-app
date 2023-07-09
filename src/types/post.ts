/**
 * Whisper
 *
 * A micro-blogging platform.
 *
 * @author    Afaan Bilal
 * @copyright 2023 Afaan Bilal
 * @link      https://eonyx.io
 */

export type Post = {
    uuid: string;
    author: {
        uuid: string;
        name: string;
        username: string;
        image: string;
    };
    content: string;
    media: string;
    likes: number;
    liked: boolean;
    created_at: Date;
};
