/**
 * @format
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/constants/store';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './src/components/Navigator';
import { StatusBar } from 'react-native';
import * as reducer from './src/features/menu/reducers/vodCategories.reducer';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
    reducer.getVODCategories();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Navigator />
    </Provider>
  );
};

export default App;
