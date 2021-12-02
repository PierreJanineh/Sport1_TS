import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ItemSeparatorType,
  VODCategory,
  VODVideo,
} from '../../../../constants/types';
import * as reducer from '../../reducers/vodCategories.reducer';
import * as Colors from '../../../../constants/colors';
import * as Strings from '../../../../constants/strings';
import ItemSeparator from '../../../../components/ItemSeparator';
import { useDispatch, useSelector } from 'react-redux';
import { selectChosenVideo } from '../../reducers/vodCategories.reducer';

const VideosList = (props: { chosenItem: VODCategory; index?: number }) => {
  const [data, setData] = useState(getData());
  const selectedVideo = useSelector(selectChosenVideo);
  const dispatch = useDispatch();
  useEffect(() => {
    setData(getData());
  }, [props.index, selectedVideo]);

  function millisToMinutesAndSeconds(millis: number) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (Number(seconds) < 10 ? '0' : '') + seconds;
  }

  function renderVideoItem(item: { item: VODVideo }) {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(reducer.setChosenVideo({ chosenVideo: item.item }));
        }}
        style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.item.featuredImage.url }}
            style={styles.image}
          />
          <View style={styles.imageOverlay}>
            <Text style={styles.imageOverlayText}>
              {millisToMinutesAndSeconds(item.item.videoDuration)}
            </Text>
          </View>
        </View>
        <Text style={styles.text}>{item.item.title}</Text>
      </TouchableOpacity>
    );
  }

  function getData() {
    let videos = props.chosenItem.videos;
    if (props.chosenItem.subCategories.length > 0) {
      const subCateID = props.chosenItem.subCategories[props.index!].id;
      return videos.filter(item => {
        return (
          item.category.id === subCateID &&
          selectedVideo &&
          selectedVideo.id !== item.id
        );
      });
    }

    if (selectedVideo) {
      return videos.filter(item => {
        return selectedVideo.id !== item.id;
      });
    }
    return videos;
  }

  return (
    <FlatList
      ListEmptyComponent={() => (
        <View style={styles.emptyListComponent}>
          <Text style={styles.emptyListComponentText}>
            {Strings.vodStrings.noVideos}
          </Text>
        </View>
      )}
      data={data}
      renderItem={renderVideoItem}
      ItemSeparatorComponent={() => (
        <ItemSeparator listType={ItemSeparatorType.VODVideosList} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row-reverse',
    backgroundColor: Colors.vodColors.videosListBackground,
  },
  imageContainer: {
    width: 129,
    height: 72,
    marginVertical: 24,
    marginHorizontal: 16,
  },
  emptyListComponent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListComponentText: {
    color: Colors.vodColors.videosListText,
  },
  image: {
    width: 129,
    height: 72,
    zIndex: 1,
  },
  imageOverlay: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: Colors.vodColors.imageDurationContainer,
    width: 39,
    height: 16,
    end: 7,
    bottom: 6,
    borderRadius: 2,
    opacity: 0.62,
  },
  imageOverlayText: {
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 0.55,
  },
  text: {
    marginVertical: 24,
    marginHorizontal: 16,
    direction: 'rtl',
    lineHeight: 19,
    fontSize: 17,
    textAlign: 'left',
    color: Colors.vodColors.videosListText,
    width: 195,
  },
});

export default VideosList;
