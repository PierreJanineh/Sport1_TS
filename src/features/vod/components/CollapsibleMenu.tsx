import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CollapsedArrowSVG from '../../../../assets/svg/CollapsedArrowSVG';
import * as Colors from '../../../constants/colors';

const CollapsibleMenu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>כדורגל עולמי</Text>
      <View style={styles.icn}>
        <CollapsedArrowSVG collapsed={true} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    backgroundColor: Colors.tabs.focused,
  },
  text: {
    direction: 'rtl',
    textAlign: 'justify',
    fontSize: 18,
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  icn: {
    marginHorizontal: 15,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default CollapsibleMenu;
