import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { FocusableSvgProps } from '../../../src/constants/types';
import React from 'react';
import { View } from 'react-native';
import * as Colors from '../../../src/constants/colors';

export default class MoreSVG extends React.Component<FocusableSvgProps, {}> {
  render() {
    const color = this.props.focused
      ? Colors.tabs.focused
      : Colors.tabs.unfocused;
    return (
      <View>
        <Svg height={18.667} width={22.667}>
          <Defs>
            <ClipPath id="prefix__a">
              <Path
                d="M1 14h15a1 1 0 000-2H1a1 1 0 000 2z"
                clipRule="evenodd"
              />
            </ClipPath>
            <ClipPath id="prefix__b">
              <Path d="M-34-33h375v667H-34z" />
            </ClipPath>
            <ClipPath id="prefix__c">
              <Path d="M1 8h15a1 1 0 000-2H1a1 1 0 100 2z" clipRule="evenodd" />
            </ClipPath>
            <ClipPath id="prefix__d">
              <Path d="M-34-33h375v667H-34z" />
            </ClipPath>
            <ClipPath id="prefix__e">
              <Path d="M1 2h15a1 1 0 000-2H1a1 1 0 000 2z" clipRule="evenodd" />
            </ClipPath>
            <ClipPath id="prefix__f">
              <Path d="M-34-33h375v667H-34z" />
            </ClipPath>
          </Defs>
          <G
            clipPath="url(#prefix__a)"
            transform="matrix(1.33333 0 0 -1.33333 0 18.667)">
            <G clipPath="url(#prefix__b)">
              <Path d="M-5 19h27V7H-5z" fill={color} />
            </G>
          </G>
          <G
            clipPath="url(#prefix__c)"
            transform="matrix(1.33333 0 0 -1.33333 0 18.667)">
            <G clipPath="url(#prefix__d)">
              <Path d="M-5 13h27V1H-5z" fill={color} />
            </G>
          </G>
          <G
            clipPath="url(#prefix__e)"
            transform="matrix(1.33333 0 0 -1.33333 0 18.667)">
            <G clipPath="url(#prefix__f)">
              <Path d="M-5 7h27V-5H-5z" fill={color} />
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}
