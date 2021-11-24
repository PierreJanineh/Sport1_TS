import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import * as Colors from '../constants/colors';
import Sport1SVG from '../../assets/svg/Sport1SVG';

const AppHeader = () => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          default: styles.header,
        }),
      }}>
      <View style={styles.logoContainer}>
        <View style={styles.logoImg}>
          <Sport1SVG />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    flex: 1,
    width: '100%',
    height: 50,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  header: {
    backgroundColor: Colors.APP_BAR_COLOR,
  },
  logoContainer: {
    zIndex: 2,
    elevation: 2,
  },
  logoImg: {
    height: '50%',
  },
});

export default AppHeader;
