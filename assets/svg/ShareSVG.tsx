import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import React from 'react';
import { View } from 'react-native';

export default class SearchSVG extends React.Component {
  render() {
    return (
      <View>
        <Svg height={26.667} width={26.667}>
          <Defs>
            <ClipPath id="prefix__a">
              <Path d="M17.333 20a2.667 2.667 0 01-2.666-2.667c0-.312.057-.606.156-.885l-9.938-4.969a2.667 2.667 0 11-2.219-4.146c.93 0 1.742.478 2.22 1.198l9.937-4.968a2.667 2.667 0 11.292.583L5.177 9.115c.1.278.156.573.156.885 0 .309-.06.61-.156.885l9.938 4.97A2.667 2.667 0 1117.334 20z" />
            </ClipPath>
            <ClipPath id="prefix__b">
              <Path d="M-16-710h375v970H-16z" />
            </ClipPath>
          </Defs>
          <G
            clipPath="url(#prefix__a)"
            transform="matrix(1.33333 0 0 -1.33333 0 26.667)">
            <G clipPath="url(#prefix__b)">
              <Path d="M-5 25h30V-5H-5z" fill="#d6d6d6" />
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}
