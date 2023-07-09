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
import { Colors } from './colors';

export const theme = {
    ...t,
    dark: false,
    colors: {
        ...t.colors,
        primary: Colors.RED,
        onPrimary: Colors.WHITE,
        secondaryContainer: 'transparent',
        backdrop: "rgba(0,0,0,0.5)",
    },
};
