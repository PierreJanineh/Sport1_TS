import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { FocusableSvgProps } from '../../../src/constants/types';
import React from 'react';
import { View } from 'react-native';
import * as Colors from '../../../src/constants/colors';

export default class HomeSVG extends React.Component<FocusableSvgProps, {}> {
  render() {
    const color = this.props.focused
      ? Colors.tabs.focused
      : Colors.tabs.unfocused;
    return (
      <View>
        <Svg height={21.333} width={20}>
          <Defs>
            <ClipPath id="prefix__a">
              <Path d="M7.5 16L0 10.286V0h5.063v5.333h4.875V0H15v10.286z" />
            </ClipPath>
            <ClipPath id="prefix__b">
              <Path d="M-326-33H49v667h-375z" />
            </ClipPath>
          </Defs>
          <G
            clipPath="url(#prefix__a)"
            transform="matrix(1.33333 0 0 -1.33333 0 21.333)">
            <G clipPath="url(#prefix__b)">
              <Path d="M-5 21h25V-5H-5z" fill={color} />
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}
