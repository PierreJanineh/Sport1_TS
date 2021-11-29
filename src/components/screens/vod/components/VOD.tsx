import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import VideoPlayer from '../../../../features/vod/components/VideoPlayer';
import VideoHeader from '../../../../features/vod/components/VideoHeader';
import CollapsibleMenu from '../../../../features/vod/components/CollapsibleMenu';
import * as reducer from '../../../../features/menu/reducers/vodCategories.reducer';
import { useSelector } from 'react-redux';

const VOD = () => {
  const categories = useSelector(reducer.selectVODCategories);

  return (
    <View style={styles.container}>
      <VideoPlayer />
      <VideoHeader />
      <CollapsibleMenu categories={categories} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default VOD;
