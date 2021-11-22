import Svg, { G, Path } from 'react-native-svg';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class PersonSVG extends React.Component {
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
        <Svg width="26" height="24" viewBox="0 0 26 24">
          <G fill="none" fill-rule="evenodd">
            <G fill-rule="nonzero">
              <G>
                <G>
                  <G stroke="#FFF" stroke-linejoin="round" stroke-width="1.56">
                    <Path
                      d="M8.696 0c2.457 0 4.45 2.046 4.45 4.571 0 2.524-1.993 4.57-4.45 4.57s-4.45-2.046-4.45-4.57C4.25 2.048 6.24.003 8.697 0z"
                      transform="translate(-20 -14) translate(21 15)"
                    />
                    <Path
                      d="M2.547 11.987c2.488-2.552 6.226-3.315 9.474-1.933 3.248 1.383 5.366 4.638 5.368 8.25H0c-.006-2.37.911-4.645 2.547-6.317h0z"
                      transform="translate(-20 -14) translate(21 15)"
                    />
                  </G>
                  <Path
                    fill="#02F784"
                    stroke="#141414"
                    stroke-width="2"
                    d="M18.641 11.952l4.278.846-2.984 3.322.565 4.605-4-1.993-4 1.993.565-4.605-2.984-3.322 4.278-.846L16.5 7.831l2.141 4.121z"
                    transform="translate(-20 -14) translate(21 15)"
                  />
                </G>
              </G>
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}
