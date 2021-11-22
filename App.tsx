/**
 * @format
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import MainApp from './src/components/MainApp';
import { store } from './src/constants/store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
