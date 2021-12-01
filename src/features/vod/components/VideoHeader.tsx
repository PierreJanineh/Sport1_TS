import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Share } from 'react-native';
import ShareSVG from '../../../../assets/svg/ShareSVG';
import * as Colors from '../../../constants/colors';
import { VODVideo } from '../../../constants/types';
import { useSelector } from 'react-redux';
import * as reducer from '../reducers/vodCategories.reducer';

const VideoHeader = () => {
  let video: VODVideo | undefined = useSelector(reducer.selectChosenVideo);

  function parseDate() {
    return new Date(video!.date);
  }

  const onShare = async () => {
    try {
      const shareURL = video!.share.domain.concat(video!.share.href);
      await Share.share({
        message: shareURL,
        url: shareURL,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {video ? (
        <View style={styles.textContainer}>
          <Text style={styles.text}>{video!.yoast_head_json.title}</Text>
          <View style={styles.dateTimeContainer}>
            <Text style={[styles.text, styles.date]}>
              {parseDate().toLocaleDateString('default').split('/').join('.')}
            </Text>
            <Text style={[styles.text, styles.time]}>
              {parseDate().toLocaleTimeString('default', { hour12: false })}
            </Text>
          </View>
        </View>
      ) : null}
      <TouchableOpacity style={styles.shareIcon} onPress={() => onShare()}>
        <ShareSVG />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
