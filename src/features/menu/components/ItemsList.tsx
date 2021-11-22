import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { BKGD_GREY } from '../../../constants/colors';
import * as Types from '../../../constants/types';
import { useSelector } from 'react-redux';
import * as reducer from '../reducers/categories.reducer';
import * as Actions from '../reducers/categories.reducer';
import * as Strings from '../../../constants/strings';
import { Category, Link, OtherListItem } from '../../../constants/types';
import MoveoSVG from '../../../../assets/svg/MoveoSVG';

const ItemsList = () => {
  const categories = useSelector(reducer.selectFilteredCategories);
  const links = useSelector(reducer.selectLinks);

  //Call Api Function when component first mounts
  useEffect(() => {
    Actions.getCategories();
  }, []);

  const separator: Types.OtherListItem = { title: Strings.GENERAL_ITEM };

  const logo: Types.OtherListItem = { title: Strings.LOGO };

  let combinedArr: Array<Category | OtherListItem | Link> = [...categories];

  combinedArr.push(separator);

  if (links) {
    combinedArr.push({ title: Strings.PRIVACY_POLICY, link: links.privacy_policy });
    combinedArr.push({ title: Strings.TERMS_OF_USE, link: links.terms_of_use });
  }

  combinedArr.push(logo);
  function renderItem(item: { item: Types.ListItem }) {
    const getListItemText = () => {
      if ((item.item as Types.Category).title && item.item.title) {
        return item.item.title;
      } else {
        if (item.item as Types.Link) {
          return (item.item as Types.Link).title;
        }
      }
    };
    if (item.item && item.item.title === logo.title) {
      return (
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <MoveoSVG />
          </View>
        </View>
      );
    }

    return (
      <View
        style={
          item.item && item.item.title === separator.title
            ? styles.generalGreyContainer
            : styles.textContainer
        }>
        <Text
          style={
            item.item && item.item && item.item.title === separator.title
              ? styles.generalGrey
              : styles.text
          }>
          {getListItemText()}
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={combinedArr}
      renderItem={renderItem}
      // keyExtractor={item => item.id}
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
