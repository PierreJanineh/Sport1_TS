import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, TextInput, View } from 'react-native';
import { SEARCH_BAR_PLACEHOLDER } from '../../../constants/strings';
import { setSearchText } from '../reducers/categories.reducer';
import SearchSVG from '../../../../assets/svg/SearchSVG';

const Search = () => {
  const dispatch = useDispatch();

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
