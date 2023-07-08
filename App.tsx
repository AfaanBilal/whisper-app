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
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

import { theme } from './src/utils/theme';
import { AuthContext, loadAccessToken, saveAccessToken } from './src/utils/AuthContext';
import RootStack from './src/navigation/RootStack';
import { Fonts } from './src/utils/fonts';

export default function App() {
    const [accessToken, setAccessToken] = React.useState<string | null>(null);
    React.useEffect(() => { (async () => { setAccessToken(await loadAccessToken()); })(); }, []);
    const setAccessTokenPersisted = (token: string) => {
        setAccessToken(token);
        (async () => { await saveAccessToken(token); })();
    };

    const [fontsLoaded] = useFonts({
        [Fonts.Aclonica]: require('./assets/fonts/Aclonica.ttf'),

        [Fonts.SourceSansProLight]: require('./assets/fonts/Source_Sans_Pro/SourceSansPro-Light.ttf'),
        [Fonts.SourceSansPro]: require('./assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf'),
        [Fonts.SourceSansProSemiBold]: require('./assets/fonts/Source_Sans_Pro/SourceSansPro-SemiBold.ttf'),
        [Fonts.SourceSansProBold]: require('./assets/fonts/Source_Sans_Pro/SourceSansPro-Bold.ttf'),

        [Fonts.UbuntuLight]: require('./assets/fonts/Ubuntu/Ubuntu-Light.ttf'),
        [Fonts.Ubuntu]: require('./assets/fonts/Ubuntu/Ubuntu-Regular.ttf'),
        [Fonts.UbuntuMedium]: require('./assets/fonts/Ubuntu/Ubuntu-Medium.ttf'),
        [Fonts.UbuntuBold]: require('./assets/fonts/Ubuntu/Ubuntu-Bold.ttf'),
    });

    if (!fontsLoaded) return null;

    return (
        <NavigationContainer>
            <AuthContext.Provider value={{ accessToken, setAccessToken: setAccessTokenPersisted }}>
                <PaperProvider theme={theme}>
                    <RootStack />
                </PaperProvider>
            </AuthContext.Provider>
        </NavigationContainer>
    );
}
