import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BKGD_GREY } from '../constants/colors';

const ItemSeparator = () => {
  return <View style={styles.itemSeparator} />;
};

const styles = StyleSheet.create({
  itemSeparator: {
    backgroundColor: BKGD_GREY,
    height: 2,
    width: '100%',
  },
});

export default ItemSeparator;
