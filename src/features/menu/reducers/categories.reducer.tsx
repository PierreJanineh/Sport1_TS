import { createSlice } from '@reduxjs/toolkit';
import {
  CategoriesState,
  CategoryItem,
  LinkItem,
  LinkTypes,
  ListType,
} from '../../../constants/types';
import { store } from '../../../constants/store';
import * as ApiController from '../../../API/apiController';
import { PRIVACY_POLICY, TERMS_OF_USE } from '../../../constants/strings';

const initialState: CategoriesState = {
  mainCategories: [],
  filteredCategoriesList: [],
  links: [],
  searchTxt: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.mainCategories = action.payload.mainCategories;
      state.filteredCategoriesList = action.payload.filteredCategoriesList;
      state.links = action.payload.links;
    },
    filterCategories: (state, action) => {
      state.filteredCategoriesList = action.payload.filteredCategoriesList;
    },
    setSearchText: (state, action) => {
      state.searchTxt = action.payload.searchTxt;
      if (state.searchTxt) {
        state.filteredCategoriesList = state.mainCategories.filter(item => {
          return item.title.includes(state.searchTxt);
        });
      } else {
        state.filteredCategoriesList = state.mainCategories;
      }
    },
  },
});

export const getCategories = () => {
  function getLocalizedTitle(propertyName: string): string {
    switch (propertyName) {
      case LinkTypes.privacy_policy:
        return PRIVACY_POLICY;
      case LinkTypes.terms_of_use:
        return TERMS_OF_USE;
    }
    return '';
  }

  ApiController.getMenu()
    .then(result => {
      if (result) {
        result.json().then(json => {
          let mainCategories: CategoryItem[] = json.categories;
          mainCategories.forEach(value => {
            value.type = ListType.Item;
          });

          let links: { [x: string]: string } = json.links;
          let linksArr: LinkItem[] = [];
          for (const link in links) {
            linksArr.push({
              type: ListType.Link,
              title: getLocalizedTitle(link),
              link: links[link],
            });
          }

          store.dispatch(
            categoriesSlice.actions.getCategories({
              mainCategories: mainCategories,
              filteredCategoriesList: mainCategories,
              links: linksArr,
            }),
          );
        });
      }
    })
    .catch(err => {
      console.error(err);
    });
};

export const selectSearchText = (state: CategoriesState) => state.searchTxt;
export const selectFilteredCategories = (state: CategoriesState) =>
  state.filteredCategoriesList;
export const selectMainCategories = (state: CategoriesState) =>
  state.mainCategories;
export const selectLinks = (state: CategoriesState) => state.links;

export const { setSearchText } = categoriesSlice.actions;

export default categoriesSlice.reducer;
