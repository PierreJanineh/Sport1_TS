import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

const VOD = () => {
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          style={styles.video}
          controls={true}
          source={{
            uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  videoContainer: {
    width: '100%',
    height: 203,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VOD;
