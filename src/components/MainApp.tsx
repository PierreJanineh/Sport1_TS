import React, { useEffect } from 'react';
import AppHeader from './AppHeader';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Actions from '../features/menu/reducers/categories.reducer';
import ItemsList from './ItemsList';
import { BKGD_GREY } from '../constants/colors';
import Search from './Search';
import * as Types from '../constants/types';
import {
  GENERAL_ITEM,
  LOGO,
  PRIVACY_POLICY,
  TERMS_OF_USE,
} from '../constants/strings';
import { Category, Link, OtherListItem } from '../constants/types';
import { useSelector } from 'react-redux';
import {
  selectFilteredCategories,
  selectLinks,
} from '../features/menu/reducers/categories.reducer';

const MainApp = () => {
  const categories = useSelector(selectFilteredCategories);
  const links = useSelector(selectLinks);

  //Call Api Function when component first mounts
  useEffect(() => {
    Actions.getCategories();
  }, []);

  const separator: Types.OtherListItem = { title: GENERAL_ITEM };

  const logo: Types.OtherListItem = { title: LOGO };

  let combinedArr: Array<Category | OtherListItem | Link> = [...categories];

  combinedArr.push(separator);

  if (links) {
    combinedArr.push({ title: PRIVACY_POLICY, link: links.privacy_policy });
    combinedArr.push({ title: TERMS_OF_USE, link: links.terms_of_use });
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
          <Image
            style={styles.logo}
            source={require('../../assets/createdByMoveo.png')}
            resizeMode={'contain'}
          />
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
    <SafeAreaView style={styles.container}>
      <AppHeader />
      <Search />
      <ItemsList items={combinedArr} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: BKGD_GREY,
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
  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BKGD_GREY,
  },
  logo: {
    paddingVertical: 50,
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

export default MainApp;
