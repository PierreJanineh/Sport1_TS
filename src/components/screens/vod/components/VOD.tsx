import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import VideoPlayer from '../../../../features/vod/components/VideoPlayer';
import VideoHeader from '../../../../features/vod/components/VideoHeader';
import CollapsibleMenu from '../../../../features/vod/components/CollapsibleMenu/CollapsibleMenu';
import * as reducer from '../../../../features/vod/reducers/vodCategories.reducer';
import ErrorView from '../../../../features/vod/components/ErrorView';
import LoadingIndicator from '../../../LoadingIndicator';
import { getVODMenu } from '../../../../API/apiController';

const VOD = () => {
  const categories = useSelector(reducer.selectVODCategories);
  const loading = useSelector(reducer.selectLoading);

  useEffect(() => {
    getVODMenu();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  } else if (categories) {
    return (
      <View style={styles.container}>
        <VideoPlayer />
        <VideoHeader />
        <CollapsibleMenu />
      </View>
    );
  } else {
    return <ErrorView />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default VOD;
