import React from 'react';
import AppHeader from './AppHeader';
import { SafeAreaView, StyleSheet } from 'react-native';
import ItemsList from '../features/menu/components/ItemsList';
import { BKGD_GREY } from '../constants/colors';
import Search from '../features/menu/components/Search';

const MainApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader />
      <Search />
      <ItemsList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: BKGD_GREY,
  },
});

export default MainApp;
