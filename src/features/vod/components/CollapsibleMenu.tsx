import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CollapsedArrowSVG from '../../../../assets/svg/CollapsedArrowSVG';
import * as Colors from '../../../constants/colors';
import { VODCategories } from '../../../constants/types';
import ItemSeparator from '../../../components/ItemSeparator';

const CollapsibleMenu = () => {
  const [menuCollapsed, setMenuCollapsed] = useState(true);
  const [chosenItem, setChosenItem] = useState(orderMenuList()[0]);

  function orderMenuList(): VODCategories[] {
    const categories: VODCategories[] = [];
    for (const key in VODCategories) {
      categories.push(VODCategories[key as keyof typeof VODCategories]);
    }
    return categories;
  }

  function renderMenuItem(item: { item: VODCategories }) {
    return (
      <TouchableOpacity
        onPress={() => {
          setChosenItem(item.item);
          setMenuCollapsed(true);
        }}
        style={[styles.container, styles.listBackground]}>
        <Text style={[styles.text, styles.listText]}>{item.item}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => setMenuCollapsed(!menuCollapsed)}
        style={[styles.container, styles.turquoiseBackground]}>
        <Text style={styles.text}>{chosenItem}</Text>
        <View style={styles.icn}>
          <CollapsedArrowSVG collapsed={menuCollapsed} />
        </View>
      </TouchableOpacity>
      {!menuCollapsed ? (
        <FlatList
          data={orderMenuList().filter(val => {
            return val !== chosenItem;
          })}
          renderItem={renderMenuItem}
          ItemSeparatorComponent={() => <ItemSeparator />}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  container: {
    width: '100%',
    height: 45,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  turquoiseBackground: {
    backgroundColor: Colors.tabs.focused,
  },
  listBackground: {
    backgroundColor: Colors.vod.menuListBackground,
  },
  text: {
    direction: 'rtl',
    textAlign: 'justify',
    fontSize: 18,
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  listText: {
    color: Colors.vod.menuListText,
  },
  icn: {
    marginHorizontal: 15,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default CollapsibleMenu;
