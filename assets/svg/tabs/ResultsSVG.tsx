import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { FocusableSvgProps } from '../../../src/constants/types';
import React from 'react';
import { View } from 'react-native';
import * as Colors from '../../../src/constants/colors';

export default class ResultsSVG extends React.Component<FocusableSvgProps, {}> {
  render() {
    const color = this.props.focused
      ? Colors.tabs.focused
      : Colors.tabs.unfocused;
    return (
      <View>
        <Svg height={20} width={26.667}>
          <Defs>
            <ClipPath id="prefix__a">
              <Path d="M9 11h2V9H9z" clipRule="evenodd" />
            </ClipPath>
            <ClipPath id="prefix__b">
              <Path d="M-250-33h375v667h-375z" />
            </ClipPath>
            <ClipPath id="prefix__c">
              <Path d="M9 11h2V9H9z" clipRule="evenodd" />
            </ClipPath>
            <ClipPath id="prefix__d">
              <Path d="M-250-33h375v667h-375z" />
            </ClipPath>
            <ClipPath id="prefix__e">
              <Path d="M9 6h2V4H9z" clipRule="evenodd" />
            </ClipPath>
            <ClipPath id="prefix__f">
              <Path d="M-250-33h375v667h-375z" />
            </ClipPath>
            <ClipPath id="prefix__g">
              <Path d="M9 6h2V4H9z" clipRule="evenodd" />
            </ClipPath>
            <ClipPath id="prefix__h">
              <Path d="M-250-33h375v667h-375z" />
            </ClipPath>
            <ClipPath id="prefix__i">
              <Path d="M2 15h7V0H2a2 2 0 00-2 2v11a2 2 0 002 2z" />
            </ClipPath>
            <ClipPath id="prefix__j">
              <Path d="M-250-33h375v667h-375z" />
            </ClipPath>
            <ClipPath id="prefix__k">
              <Path d="M18 0h-7v15h7a2 2 0 002-2V2a2 2 0 00-2-2z" />
            </ClipPath>
            <ClipPath id="prefix__l">
              <Path d="M-250-33h375v667h-375z" />
            </ClipPath>
            <ClipPath id="prefix__m">
              <Path d="M15.899 10.931v-2.72l.778-.577a.507.507 0 01.276.45V11.5c0 .12-.043.232-.113.316z" />
            </ClipPath>
            <ClipPath id="prefix__n">
              <Path d="M-250-33h375v667h-375z" />
            </ClipPath>
            <ClipPath id="prefix__o">
              <Path d="M15.899 6.614V3.893l.778-.577a.507.507 0 01.276.45v3.418c0 .12-.043.232-.113.316z" />
            </ClipPath>
            <ClipPath id="prefix__p">
              <Path d="M-250-33h375v667h-375z" />
            </ClipPath>
            <ClipPath id="prefix__q">
              <Path d="M3.146 11.023h2.682l.927.872a.518.518 0 01-.312.105H2.51a.513.513 0 01-.304-.105z" />
            </ClipPath>
            <ClipPath id="prefix__r">
              <Path d="M-250-33h375v667h-375z" />
            </ClipPath>
            <ClipPath id="prefix__s">
              <Path d="M5.899 10.931v-2.72l.778-.577a.507.507 0 01.276.45V11.5c0 .12-.043.232-.113.316z" />
            </ClipPath>
            <ClipPath id="prefix__t">
              <Path d="M-250-33h375v667h-375z" />
            </ClipPath>
            <ClipPath id="prefix__u">
              <Path d="M5.82 8.084H3.133l-.715-.528.715-.52h2.689l.714.52z" />
            </ClipPath>
            <ClipPath id="prefix__v">
              <Path d="M-250-33h375v667h-375z" />
            </ClipPath>
            <ClipPath id="prefix__w">
              <Path d="M3.146 4.069h2.682l.927-.872a.518.518 0 00-.312-.106H2.51a.513.513 0 00-.304.106z" />
            </ClipPath>
            <ClipPath id="prefix__x">
              <Path d="M-250-33h375v667h-375z" />
            </ClipPath>
            <ClipPath id="prefix__y">
              <Path d="M2.113 3.281A.494.494 0 002 3.598v3.417c0 .197.113.365.276.45l.778-.577V4.146z" />
            </ClipPath>
            <ClipPath id="prefix__z">
              <Path d="M-250-33h375v667h-375z" />
            </ClipPath>
          </Defs>
          <G
            clipPath="url(#prefix__a)"
            transform="matrix(1.33333 0 0 -1.33333 0 20)">
            <G clipPath="url(#prefix__b)">
              <Path d="M9 11h2V9H9z" fill="#d8d8d8" />
            </G>
          </G>
          <G
            clipPath="url(#prefix__c)"
            transform="matrix(1.33333 0 0 -1.33333 0 20)">
            <G clipPath="url(#prefix__d)">
              <Path
                d="M9 11h2V9H9z"
                fill="none"
                stroke="#979797"
                strokeWidth={2}
                strokeMiterlimit={10}
              />
            </G>
          </G>
          <G
            clipPath="url(#prefix__e)"
            transform="matrix(1.33333 0 0 -1.33333 0 20)">
            <G clipPath="url(#prefix__f)">
              <Path d="M9 6h2V4H9z" fill="#d8d8d8" />
            </G>
          </G>
          <G
            clipPath="url(#prefix__g)"
            transform="matrix(1.33333 0 0 -1.33333 0 20)">
            <G clipPath="url(#prefix__h)">
              <Path
                d="M9 6h2V4H9z"
                fill="none"
                stroke="#979797"
                strokeWidth={2}
                strokeMiterlimit={10}
              />
            </G>
          </G>
          <G
            clipPath="url(#prefix__i)"
            transform="matrix(1.33333 0 0 -1.33333 0 20)">
            <G clipPath="url(#prefix__j)">
              <Path d="M-5 20h19V-5H-5z" fill={color} />
            </G>
          </G>
          <G
            clipPath="url(#prefix__k)"
            transform="matrix(1.33333 0 0 -1.33333 0 20)">
            <G clipPath="url(#prefix__l)">
              <Path d="M25-5H6v25h19z" fill={color} />
            </G>
          </G>
          <G
            clipPath="url(#prefix__m)"
            transform="matrix(1.33333 0 0 -1.33333 0 20)">
            <G clipPath="url(#prefix__n)">
              <Path d="M10.899 16.817h11.054V2.634H10.899z" fill="#141414" />
            </G>
          </G>
          <G
            clipPath="url(#prefix__o)"
            transform="matrix(1.33333 0 0 -1.33333 0 20)">
            <G clipPath="url(#prefix__p)">
              <Path d="M10.899 12.5h11.054V-1.684H10.899z" fill="#141414" />
            </G>
          </G>
          <G
            clipPath="url(#prefix__q)"
            transform="matrix(1.33333 0 0 -1.33333 0 20)">
            <G clipPath="url(#prefix__r)">
              <Path d="M-2.795 17h14.55V6.023h-14.55z" fill="#141414" />
            </G>
          </G>
          <G
            clipPath="url(#prefix__s)"
            transform="matrix(1.33333 0 0 -1.33333 0 20)">
            <G clipPath="url(#prefix__t)">
              <Path d="M.899 16.817h11.054V2.634H.899z" fill="#141414" />
            </G>
          </G>
          <G
            clipPath="url(#prefix__u)"
            transform="matrix(1.33333 0 0 -1.33333 0 20)">
            <G clipPath="url(#prefix__v)">
              <Path d="M-2.583 13.084h14.118V2.036H-2.583z" fill="#141414" />
            </G>
          </G>
          <G
            clipPath="url(#prefix__w)"
            transform="matrix(1.33333 0 0 -1.33333 0 20)">
            <G clipPath="url(#prefix__x)">
              <Path d="M-2.795 9.069h14.55V-1.91h-14.55z" fill="#141414" />
            </G>
          </G>
          <G
            clipPath="url(#prefix__y)"
            transform="matrix(1.33333 0 0 -1.33333 0 20)">
            <G clipPath="url(#prefix__z)">
              <Path d="M-3 12.465H8.054V-1.72H-3z" fill="#141414" />
            </G>
          </G>
        </Svg>
      </View>
    );
  }
}
