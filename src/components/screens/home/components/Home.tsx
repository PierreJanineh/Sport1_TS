import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Strings from '../../../../constants/strings';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>{Strings.tabs.home}</Text>
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

export default Home;
