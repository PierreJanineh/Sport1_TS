import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Strings from '../../../../constants/strings';

const Results = () => {
  return (
    <View style={styles.container}>
      <Text>{Strings.tabs.results}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Results;
