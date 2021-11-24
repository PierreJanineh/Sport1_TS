import React from 'react';
import { StyleSheet, View } from 'react-native';
import VideoPlayer from '../../../../features/vod/components/VideoPlayer';

const VOD = () => {
  return (
    <View style={styles.container}>
      <VideoPlayer />
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
