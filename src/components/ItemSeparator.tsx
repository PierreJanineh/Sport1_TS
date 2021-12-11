import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Colors from '../constants/colors';
import { ItemSeparatorType } from '../constants/types';

const ItemSeparator = (props: { listType: ItemSeparatorType }) => {
  switch (props.listType) {
    case ItemSeparatorType.MoreMenuList:
    case ItemSeparatorType.VODCollapsibleList:
      return (
        <View style={[styles.container, styles.collapsibleMenuContainer]}>
          <View style={[styles.itemSeparator, styles.collapsibleMenu]} />
        </View>
      );
    case ItemSeparatorType.VODVideosList:
      return (
        <View style={[styles.container, styles.videosListContainer]}>
          <View style={[styles.itemSeparator, styles.videosList]} />
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  MoreMenuContainer: {
    backgroundColor: Colors.vodColors.menuListBackground,
  },
  collapsibleMenuContainer: {
    backgroundColor: Colors.vodColors.menuListBackground,
  },
  videosListContainer: {
    backgroundColor: Colors.vodColors.videosListBackground,
  },
  itemSeparator: {
    height: 2,
  },
  moreMenu: {
    backgroundColor: Colors.BKGD_GREY,
  },
  collapsibleMenu: {
    backgroundColor: Colors.vodColors.videosListSeparator,
    opacity: 0.17,
    width: 342,
    alignSelf: 'center',
  },
  videosList: {
    backgroundColor: Colors.vodColors.videosListSeparator,
    opacity: 0.17,
    width: 342,
    alignSelf: 'center',
  },
});

export default ItemSeparator;
