/**
 * Whisper
 *
 * A micro-blogging platform.
 *
 * @author    Afaan Bilal
 * @copyright 2023 Afaan Bilal
 * @link      https://eonyx.io
 */

import { MD3DarkTheme as DefaultTheme } from "react-native-paper";
import { Colors } from "./colors";

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        secondaryContainer: 'transparent',
    },
};
