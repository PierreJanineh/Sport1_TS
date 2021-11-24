import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { BKGD_GREY } from '../../../constants/colors';
import * as Types from '../../../constants/types';
import { ListItem, ListItemType, ListType } from "../../../constants/types";
import { useSelector } from 'react-redux';
import * as reducer from '../reducers/categories.reducer';
import * as Actions from '../reducers/categories.reducer';
import * as Strings from '../../../constants/strings';
import MoveoSVG from '../../../../assets/svg/MoveoSVG';

const ItemsList = () => {
  const categories = useSelector(reducer.selectFilteredCategories);
  const links = useSelector(reducer.selectLinks);

  function combineArrays() {
    const separator: ListItem = {
      type: ListType.Separator,
      title: Strings.GENERAL_ITEM,
    };

    const logo: ListItem = {
      type: ListType.Logo,
      title: Strings.LOGO,
    };

    return [...categories, separator, ...links, logo];
  }

  //Call Api Function when component first mounts
  useEffect(() => {
    Actions.getCategories();
  }, []);

  function renderItem(item: { item: Types.ListItem }) {
    switch (item.item.type) {
      case ListType.Logo:
        return (
          <View style={styles.logoContainer}>
            <View style={styles.logo}>
              <MoveoSVG />
            </View>
          </View>
        );
      default:
        return (
          <View
            style={
              item.item.type === ListType.Separator
                ? styles.generalGreyContainer
                : styles.textContainer
            }>
            <Text
              style={
                item.item.type === ListType.Separator
                  ? styles.generalGrey
                  : styles.text
              }>
              {item.item.title}
            </Text>
          </View>
        );
    }
  }

  return (
    <FlatList
      style={styles.container}
      data={combineArrays()}
      renderItem={renderItem}
      scrollEnabled={true}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  itemSeparator: {
    backgroundColor: BKGD_GREY,
    height: 2,
    width: '100%',
  },
  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BKGD_GREY,
  },
  logo: {
    paddingVertical: 50,
  },
  textContainer: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    writingDirection: 'rtl',
    marginEnd: 25,
    fontSize: 18,
  },
  generalGreyContainer: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: BKGD_GREY,
  },
  generalGrey: {
    writingDirection: 'rtl',
    marginEnd: 25,
  },
});

export default ItemsList;
