import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import { VODCategories } from '../../../constants/types';
import { useSelector } from 'react-redux';
import * as reducer from '../reducers/vodCategories.reducer';
import * as Colors from '../../../constants/colors';

const CategoryTabs = (props: { selectedCategory: VODCategories }) => {
  const categories = useSelector(reducer.selectVODCategories);
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState(getRoutesArr());

  useEffect(() => {
    setRoutes(getRoutesArr());
  }, [props.selectedCategory]);

  function getSubCategories() {
    return categories.filter(val => {
      return val.type === props.selectedCategory;
    });
  }

  function getRoutesArr() {
    let arr: { key: string; title: string }[] = [];
    getSubCategories().forEach(cate => {
      arr.push({ key: cate.id.toString(), title: cate.name });
    });
    return arr;
  }

  const Route = () => <View style={styles.textContainer} />;

  const renderScene = () => {
    return <Route />;
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
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={props => (
        <TabBar
          {...props}
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
    backgroundColor: Colors.vod.menuListBackground,
  },
  text: {
    color: Colors.vod.menuListText,
  },
  tint: {
    backgroundColor: Colors.tabs.focused,
  },
});

export default CategoryTabs;
