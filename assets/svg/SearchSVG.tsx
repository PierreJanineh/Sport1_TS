import Svg, { G, Path } from 'react-native-svg';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class SearchSVG extends React.Component {
  render() {
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Svg width="18" height="18" viewBox="0 0 18 18">
          <G fill="none" fill-rule="evenodd" opacity=".328">
            <G fill="#000" fill-rule="nonzero">
              <G>
                <Path
                  d="M324.25 14c-3.995 0-7.25 3.255-7.25 7.25 0 3.994 3.255 7.25 7.25 7.25 1.727 0 3.314-.611 4.562-1.626l4.906 4.906c.293.293.77.293 1.062 0 .293-.293.293-.761 0-1.054l-4.906-4.906c1.017-1.248 1.625-2.84 1.625-4.57 0-3.995-3.255-7.25-7.25-7.25zm-.05 1.44c3.19 0 5.76 2.57 5.76 5.76s-2.57 5.76-5.76 5.76-5.76-2.57-5.76-5.76 2.57-5.76 5.76-5.76z"
                  transform="translate(-329 -78) translate(12 64)"
                />
              </G>
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}
