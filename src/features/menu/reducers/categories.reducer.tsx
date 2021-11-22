import { createSlice } from '@reduxjs/toolkit';
import { CategoriesState, Category } from '../../../constants/types';
import { store } from '../../../constants/store';
import * as ApiController from '../../../API/apiController';

const initialState: CategoriesState = {
  mainCategories: [],
  filteredCategoriesList: [],
  links: {},
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
    },
  },
});

export const getCategories = () => {
  ApiController.getMenu()
    .then(result => {
      if (result) {
        result.json().then(json => {
          store.dispatch(
            categoriesSlice.actions.getCategories({
              mainCategories: json.categories,
              filteredCategoriesList: json.categories,
              links: json.links,
            }),
          );
        });
      }
    })
    .catch(err => {
      console.error(err);
    });
};

export const filterCategories = () => {
  const searchText = (categories: Category[], searchTxt: string) => {
    const text = searchTxt.toLowerCase();

    return categories.filter(item => {
      return item.title.toLowerCase().includes(text);
    });
  };

  const categories = store.getState().mainCategories;
  const searchTxt = store.getState().searchTxt;

  store.dispatch(
    categoriesSlice.actions.filterCategories({
      filteredCategoriesList: searchText(categories, searchTxt),
    }),
  );
};

export const selectSearchText = (state: CategoriesState) => state.searchTxt;
export const selectFilteredCategories = (state: CategoriesState) =>
  state.filteredCategoriesList;
export const selectMainCategories = (state: CategoriesState) =>
  state.mainCategories;
export const selectLinks = (state: CategoriesState) => state.links;

export const { setSearchText } = categoriesSlice.actions;

export default categoriesSlice.reducer;
