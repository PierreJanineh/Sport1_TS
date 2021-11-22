import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, TextInput, View } from 'react-native';
import { SEARCH_BAR_PLACEHOLDER } from '../../../constants/strings';
import * as Actions from '../reducers/categories.reducer';
import {
  selectSearchText,
  setSearchText,
} from '../reducers/categories.reducer';
import SearchSVG from './SearchSVG';

const Search = () => {
  const dispatch = useDispatch();
  const searchTxt = useSelector(selectSearchText);

  useEffect(() => {
    searchTxt && searchTxt === ''
      ? Actions.getCategories()
      : Actions.filterCategories();
  }, [searchTxt]);

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <SearchSVG />
      </View>
      <TextInput
        style={styles.input}
        placeholder={SEARCH_BAR_PLACEHOLDER}
        onChangeText={s =>
          dispatch(
            setSearchText({
              searchTxt: s,
            }),
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    flexDirection: 'row-reverse',
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 0.2,
    borderColor: 'grey',
  },
  image: {
    width: 18,
    margin: 15,
  },
  input: {
    writingDirection: 'rtl',
    textAlign: 'right',
    height: 45,
  },
});

export default Search;
