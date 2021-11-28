import Svg, { Path, G } from 'react-native-svg';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CollapsibleMenuProps } from '../../src/constants/types';

export default class CollapsedArrowSVG extends React.Component<
  CollapsibleMenuProps,
  {}
> {
  render() {
    const rotationDeg = this.props.collapsed ? '0deg' : '180deg';
    return (
      <View
        style={[
          StyleSheet.absoluteFill,
          {
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Svg
          height={15}
          width={9}
          viewBox="0 0 13.84 7.66"
          style={{
            transform: [{ rotate: rotationDeg }],
          }}>
          <G data-name="Layer 2">
            <Path
              d="M6.92 0h6.61c.24 0 .38.16.26.29l-3.3 3.63-3.31 3.64a.4.4 0 01-.52 0L3.35 3.92 0 .29C-.08.16.07 0 .3 0z"
              fill="#1d1d1b"
              data-name="Layer 1"
            />
          </G>
        </Svg>
      </View>
    );
  }
}
