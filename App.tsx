import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
} from 'react-native';
import theme from '@/theme/theme';
import { ThemeProvider } from '@shopify/restyle';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppWithContext from '@/app-with-context';
import { Provider } from 'react-redux';
import { persistor, store } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useFlipper } from '@react-navigation/devtools';
import { navigationRef } from '@/hooks/navigation';
import { enableScreens } from 'react-native-screens';
import { Text } from '@/components/restyle';

(Text as any).defaultProps = {
  ...((Text as any).defaultProps || {}),
  allowFontScaling: false,
};

(TextInput as any).defaultProps = {
  ...((TextInput as any).defaultProps || {}),
  allowFontScaling: false,
};

const disableLoggingItems = [
  'VirtualizedLists should never be nested',
  'Encountered two children',
  '<html>',
];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  if (__DEV__) {
    import('./ReactotronConfig').then(() =>
      console.log('Reactotron Configured'),
    );

    try {
      const originalConsoleError = console.error;
      console.error = (...args) => {
        if (
          args &&
          args?.length &&
          disableLoggingItems?.some(
            v => args?.[0]?.includes && args?.[0]?.includes(v),
          )
        ) {
          return;
        }

        try {
          originalConsoleError(...args);
        } catch (error) {}
      };
    } catch (error) {
      console.log(error);
    }
  }

  useFlipper(navigationRef);
  enableScreens(true);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            {/* <AuthProvider> */}
            {/* <PortalProvider> */}
            <SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
              <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
              />
              <AppWithContext />
            </SafeAreaView>
            {/* </PortalProvider>
               </AuthProvider> */}
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
