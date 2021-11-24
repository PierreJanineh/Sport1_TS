import React from 'react';
import Home from './screens/home/components/Home';
import Results from './screens/results/components/Results';
import VOD from './screens/vod/components/VOD';
import Streaming from './screens/streaming/components/Streaming';
import More from './screens/more/components/More';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Strings from '../constants/strings';
import * as Colors from '../constants/colors';
import HomeSVG from '../../assets/svg/tabs/HomeSVG';
import ResultsSVG from '../../assets/svg/tabs/ResultsSVG';
import MoreSVG from '../../assets/svg/tabs/MoreSVG';
import StreamingSVG from '../../assets/svg/tabs/StreamingSVG';
import VodSVG from '../../assets/svg/tabs/VodSVG';
import AppHeader from './AppHeader';
import PersonSVG from '../../assets/svg/PersonSVG';

const Tab = createBottomTabNavigator();
const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.tabs.focused,
    background: Colors.APP_BAR_COLOR,
    card: Colors.APP_BAR_COLOR,
    text: Colors.BKGD_GREY,
  },
};

const Navigator = () => {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let icon;

            switch (route.name) {
              case Strings.tabs.home:
                icon = <HomeSVG focused={focused} />;
                break;
              case Strings.tabs.results:
                icon = <ResultsSVG focused={focused} />;
                break;
              case Strings.tabs.VOD:
                icon = <VodSVG focused={focused} />;
                break;
              case Strings.tabs.streaming:
                icon = <StreamingSVG focused={focused} />;
                break;
              case Strings.tabs.more:
                icon = <MoreSVG focused={focused} />;
                break;
            }

            // You can return any component that you like here!
            return icon;
          },
          headerTitleAlign: 'center',
          headerTitle: () => <AppHeader />,
          headerLeft: () => <PersonSVG />,
        })}>
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
