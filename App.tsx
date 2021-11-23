/**
 * @format
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/constants/store';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './src/components/Navigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
