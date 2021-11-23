import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { FocusableSvgProps } from '../../../src/constants/types';
import React from 'react';
import { View } from 'react-native';
import * as Colors from '../../../src/constants/colors';

export default class VodSVG extends React.Component<FocusableSvgProps, {}> {
  render() {
    const color = this.props.focused
      ? Colors.tabs.focused
      : Colors.tabs.unfocused;
    return (
      <View>
        <Svg height={20} width={30.667}>
          <Defs>
            <ClipPath id="prefix__a">
              <Path d="M0 13V2a2 2 0 012-2h19a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2zm9-2l6-3.5L9 4z" />
            </ClipPath>
            <ClipPath id="prefix__b">
              <Path d="M-176-33h375v667h-375z" />
            </ClipPath>
          </Defs>
          <G
            clipPath="url(#prefix__a)"
            transform="matrix(1.33333 0 0 -1.33333 0 20)">
            <G clipPath="url(#prefix__b)">
              <Path d="M-5 20h33V-5H-5z" fill={color} />
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}
