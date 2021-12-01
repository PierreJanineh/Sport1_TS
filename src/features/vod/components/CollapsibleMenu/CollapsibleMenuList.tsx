import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import ItemSeparator from '../../../../components/ItemSeparator';
import { useSelector } from 'react-redux';
import * as reducer from '../../reducers/vodCategories.reducer';
import { ItemSeparatorType, VODCategory } from '../../../../constants/types';
import * as Colors from '../../../../constants/colors';

const CollapsibleMenuList = (props: {
  chosenItem: VODCategory;
  setChosenItem: React.Dispatch<React.SetStateAction<VODCategory>>;
  setMenuCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const categories = useSelector(reducer.selectVODCategories);

  function renderMenuItem(item: { item: VODCategory }) {
    return (
      <TouchableOpacity
        onPress={() => {
          props.setChosenItem(item.item);
          props.setMenuCollapsed(true);
        }}
        style={styles.container}>
        <Text style={styles.text}>{item.item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <FlatList
      data={categories.filter(val => {
        return val !== props.chosenItem;
      })}
      renderItem={renderMenuItem}
      ItemSeparatorComponent={() => (
        <ItemSeparator listType={ItemSeparatorType.VODCollapsibleList} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.vodColors.menuListBackground,
  },
  text: {
    direction: 'rtl',
    textAlign: 'left',
    fontSize: 18,
    marginHorizontal: 16,
    marginTop: 15,
    marginBottom: 10,
    color: Colors.vodColors.menuListText,
    letterSpacing: 0,
  },
});

export default CollapsibleMenuList;
