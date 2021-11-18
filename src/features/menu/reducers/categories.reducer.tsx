import {createSlice} from '@reduxjs/toolkit';
import {CategoriesState} from '../../../constants/store';

const initialState: CategoriesState = {
  mainCategories: [],
  categoriesList: [],
  links: {},
  searchTxt: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.mainCategories = action.payload.mainCategories;
      state.categoriesList = action.payload.categoriesList;
      state.links = action.payload.links;
    },
    filterCategories: (state, action) => {
      state.categoriesList = action.payload.categoriesList;
    },
    setSearchText: (state, action) => {
      state.searchTxt = action.payload.searchTxt;
    },
  },
});

export const actions = categoriesSlice.actions;

export default categoriesSlice.reducer;
