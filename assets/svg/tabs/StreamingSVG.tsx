import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { FocusableSvgProps } from '../../../src/constants/types';
import React from 'react';
import { View } from 'react-native';
import * as Colors from '../../../src/constants/colors';

export default class StreamingSVG extends React.Component<FocusableSvgProps, {}> {
  render() {
    const color = this.props.focused
      ? Colors.tabs.focused
      : Colors.tabs.unfocused;
    return (
      <View>
        <Svg height={22.667} width={21.333}>
          <Defs>
            <ClipPath id="prefix__a">
              <Path d="M13.53 14.566v-1.36a1.649 1.649 0 00-3.298 0v1.36h-4.45v-1.355a1.654 1.654 0 10-3.306 0v1.355h-.701c-.988 0-1.775-.78-1.775-1.71V1.71C0 .758.81 0 1.775 0h12.45c.988 0 1.774.78 1.774 1.71L16 12.856c0 .952-.81 1.71-1.776 1.71zm.694-12.856H1.775v8.376h12.45zM3.531 13.05v3.29c0 .412.244.66.569.66.325 0 .569-.227.569-.66v-3.29c0-.41-.244-.637-.57-.637-.324 0-.568.227-.568.638zm7.71 0v3.29c0 .412.244.66.57.66.325 0 .568-.227.568-.66v-3.29c0-.41-.243-.637-.568-.637-.326 0-.57.227-.57.638z" />
            </ClipPath>
            <ClipPath id="prefix__b">
              <Path d="M-108-32h375v667h-375z" />
            </ClipPath>
            <ClipPath id="prefix__c">
              <Path d="M3.5 9h9a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v5a.5.5 0 00.5.5z" />
            </ClipPath>
            <ClipPath id="prefix__d">
              <Path d="M-108-32h375v667h-375z" />
            </ClipPath>
          </Defs>
          <G
            clipPath="url(#prefix__a)"
            transform="matrix(1.33333 0 0 -1.33333 0 22.667)">
            <G clipPath="url(#prefix__b)">
              <Path d="M-5 22h26V-5H-5z" fill={color} />
            </G>
          </G>
          <G
            clipPath="url(#prefix__c)"
            transform="matrix(1.33333 0 0 -1.33333 0 22.667)">
            <G clipPath="url(#prefix__d)">
              <Path d="M-2 14h20V-2H-2z" fill={color} />
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}
