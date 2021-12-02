import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import VideoPlayer from '../../../../features/vod/components/VideoPlayer';
import VideoHeader from '../../../../features/vod/components/VideoHeader';
import CollapsibleMenu from '../../../../features/vod/components/CollapsibleMenu/CollapsibleMenu';
import * as reducer from '../../../../features/vod/reducers/vodCategories.reducer';
import ErrorView from '../../../../features/vod/components/ErrorView';
import LoadingIndicator from '../../../LoadingIndicator';
import { getVODMenu } from '../../../../API/apiController';

const VOD = () => {
  const loading = useSelector(reducer.selectLoading);
  const error = useSelector(reducer.selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    getVODMenu(dispatch);
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  } else if (error) {
    return <ErrorView />;
  } else {
    return (
      <View style={styles.container}>
        <VideoPlayer />
        <VideoHeader />
        <CollapsibleMenu />
      </View>
    );
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
