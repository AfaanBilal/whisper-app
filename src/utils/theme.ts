/**
 * Whisper
 *
 * A micro-blogging platform.
 *
 * @author    Afaan Bilal
 * @copyright 2023 Afaan Bilal
 * @link      https://eonyx.io
 */

import { MD3DarkTheme as t } from 'react-native-paper';

export const theme = {
    ...t,
    dark: false,
    colors: {
        ...t.colors,
        secondaryContainer: 'transparent',
    },
};
