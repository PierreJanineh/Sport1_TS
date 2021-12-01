import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CollapsedArrowSVG from '../../../../../assets/svg/CollapsedArrowSVG';
import * as Colors from '../../../../constants/colors';
import { useSelector } from 'react-redux';
import * as reducer from '../../reducers/vodCategories.reducer';
import CategoryTabs from './CategoryTabs';
import CollapsibleMenuList from './CollapsibleMenuList';
import VideosList from '../VideosList';

const CollapsibleMenu = () => {
  const categories = useSelector(reducer.selectVODCategories);
  const [menuCollapsed, setMenuCollapsed] = useState(true);
  const [chosenItem, setChosenItem] = useState(categories[0]);

  useEffect(() => {
    reducer.setChosenVideo(
      categories.filter(val => {
        return val === chosenItem;
      })[0].videos[0],
    );
  }, [chosenItem]);

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => setMenuCollapsed(!menuCollapsed)}
        style={[styles.container, styles.turquoiseBackground]}>
        <Text style={styles.text}>{chosenItem.name}</Text>
        <View style={styles.icn}>
          <CollapsedArrowSVG collapsed={menuCollapsed} />
        </View>
      </TouchableOpacity>

      {!menuCollapsed ? (
        <CollapsibleMenuList
          chosenItem={chosenItem}
          setChosenItem={setChosenItem}
          setMenuCollapsed={setMenuCollapsed}
        />
      ) : null}

      {chosenItem.subCategories.length > 0 ? (
        <CategoryTabs selectedCategory={chosenItem} />
      ) : menuCollapsed ? (
        <VideosList chosenItem={chosenItem} />
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
