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
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

import { theme } from './src/utils/theme';
import { AuthContext, loadAccessToken, saveAccessToken } from './src/utils/AuthContext';
import RootStack from './src/navigation/RootStack';

export default function App() {
    const [accessToken, setAccessToken] = React.useState<string | null>(null);
    React.useEffect(() => { (async () => { setAccessToken(await loadAccessToken()); })(); }, []);
    const setAccessTokenPersisted = (token: string) => {
        setAccessToken(token);
        (async () => { await saveAccessToken(token); })();
    };

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
