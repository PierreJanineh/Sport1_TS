import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = () => {
  return (
    <View style={styles.videoContainer}>
      <Video
        style={styles.video}
        controls={true}
        source={{
          uri: 'https://www.rmp-streaming.com/media/big-buck-bunny-360p.mp4',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: '100%',
    height: 203,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoPlayer;
