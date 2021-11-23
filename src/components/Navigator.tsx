import React from 'react';
import Home from './screens/home/components/Home';
import Results from './screens/results/components/Results';
import VOD from './screens/vod/components/VOD';
import Streaming from './screens/streaming/components/Streaming';
import More from './screens/more/components/More';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Strings from '../constants/strings';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={Strings.tabs.more} component={More} />
        <Tab.Screen name={Strings.tabs.streaming} component={Streaming} />
        <Tab.Screen name={Strings.tabs.VOD} component={VOD} />
        <Tab.Screen name={Strings.tabs.results} component={Results} />
        <Tab.Screen name={Strings.tabs.home} component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
