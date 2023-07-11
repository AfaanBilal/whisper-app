/**
 * Whisper
 *
 * A micro-blogging platform.
 *
 * @author    Afaan Bilal
 * @copyright 2023 Afaan Bilal
 * @link      https://eonyx.io
 */

import React from 'react';
import { Avatar as A } from 'react-native-paper';

const Avatar: React.FC<{ size: number; name: string; image?: string; }> = ({ size, name, image }) => {
    return (
        image ?
            <A.Image size={size} source={{ uri: image }} /> :
            <A.Text size={size} label={name.split(' ').map((n: string) => n[0]).join('')} />
    );
};

export default Avatar;
