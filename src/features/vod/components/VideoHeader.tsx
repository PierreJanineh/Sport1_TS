import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Share } from 'react-native';
import ShareSVG from '../../../../assets/svg/ShareSVG';
import * as Colors from '../../../constants/colors';

const VideoHeader = () => {
  const onShare = async () => {
    try {
      await Share.share({
        message:
          'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          בני יהודה ניצחה 1:2 את הפועל באר שבע לאחר מהפך של זנטי
        </Text>
        <View style={styles.dateTimeContainer}>
          <Text style={[styles.text, styles.date]}>25.11.21</Text>
          <Text style={[styles.text, styles.time]}>15:43</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.shareIcon} onPress={() => onShare()}>
        <ShareSVG />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row-reverse',
  },
  textContainer: {
    width: '77.3%',
    height: '100%',
    marginTop: 12,
    marginEnd: 16,
    marginStart: 33,
    marginBottom: 4,
  },
  text: {
    color: Colors.TXT_GREY,
    textAlign: 'right',
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 0,
  },
  dateTimeContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    opacity: 0.5,
    marginTop: 4,
  },
  date: {
    fontSize: 15,
  },
  time: {
    fontSize: 15,
    marginEnd: 8,
  },
  shareIcon: {
    flex: 1,
    alignSelf: 'flex-start',
    marginTop: 33,
    marginStart: 16,
    marginBottom: 36,
  },
});

export default VideoHeader;
