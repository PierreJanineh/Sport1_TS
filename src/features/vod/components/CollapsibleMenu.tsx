import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import CollapsedArrowSVG from '../../../../assets/svg/CollapsedArrowSVG';
import * as Colors from '../../../constants/colors';
import { VODCategory } from '../../../constants/types';

const CollapsibleMenu = (props: { categories: VODCategory[] }) => {
  const renderMenuItem = (item: { item: VODCategory }) => {
    return <Text style={styles.text}>{item.item.name}</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.categories[0].name}</Text>
      <View style={styles.icn}>
        <CollapsedArrowSVG collapsed={true} />
      </View>
      <FlatList data={props.categories} renderItem={renderMenuItem} />
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
