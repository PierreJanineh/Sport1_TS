import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import * as Colors from '../../../../constants/colors';
import { VODCategory } from '../../../../constants/types';
import VideosList from './VideosList';

const CategoryTabs = (props: { selectedCategory: VODCategory }) => {
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState(getRoutesArr());

  useEffect(() => {
    setRoutes(getRoutesArr());
  }, [props.selectedCategory]);

  function getRoutesArr() {
    let arr: { key: string; title: string }[] = [];
    const subs = props.selectedCategory.subCategories;
    subs.forEach(cate => {
      arr.push({ key: cate.id.toString(), title: cate.name });
    });
    return arr;
  }

  const Route = () => {
    return <VideosList chosenItem={props.selectedCategory} index={index} />;
  };

  const renderLabel = ({ route }) => {
    return (
      <Text numberOfLines={1} style={styles.text}>
        {route.title}
      </Text>
    );
  };

  return (
    <TabView
      swipeEnabled={true}
      navigationState={{ index, routes }}
      renderScene={Route}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get('window').width }}
      renderTabBar={tabProps => (
        <TabBar
          {...tabProps}
          renderLabel={renderLabel}
          style={styles.tabBar}
          indicatorStyle={styles.tint}
          scrollEnabled={true}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: Colors.vodColors.menuListBackground,
  },
  text: {
    color: Colors.vodColors.menuListText,
  },
  tint: {
    backgroundColor: Colors.tabs.focused,
  },
});

export default CategoryTabs;
