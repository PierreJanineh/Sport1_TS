import React from 'react';
import { StyleSheet, View } from 'react-native';
import VideoPlayer from '../../../../features/vod/components/VideoPlayer';
import VideoHeader from '../../../../features/vod/components/VideoHeader';
import CollapsibleMenu from '../../../../features/vod/components/CollapsibleMenu';

const VOD = () => {
  return (
    <View style={styles.container}>
      <VideoPlayer />
      <VideoHeader />
      <CollapsibleMenu />
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
