import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Strings from '../../../constants/strings';
import * as Colors from '../../../constants/colors';

const ErrorView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Strings.vodStrings.error}</Text>
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

export default ErrorView;
