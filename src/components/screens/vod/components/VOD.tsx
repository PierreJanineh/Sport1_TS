import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Strings from '../../../../constants/strings';
import * as Colors from '../../../../constants/colors';

const VOD = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Strings.tabs.VOD}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.BKGD_GREY,
  },
});

export default VOD;
