import { createSlice } from '@reduxjs/toolkit';
import { VODCategoriesState, VODCategory } from '../../../constants/types';
import { store } from '../../../constants/store';
import * as ApiController from '../../../API/apiController';

const initialState: VODCategoriesState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'vod-categories',
  initialState,
  reducers: {
    getVODCategories: (state, action) => {
      state.categories = action.payload.categories;
    },
  },
});

export const getVODCategories = () => {
  ApiController.getVODMenu()
    .then(result => {
      if (result) {
        result.json().then(json => {
          let categories: VODCategory[] = json.categories;

          store.dispatch(
            categoriesSlice.actions.getVODCategories({
              categories: categories,
            }),
          );
        });
      }
    })
    .catch(err => {
      console.error(err);
    });
};

export const selectVODCategories = (state: VODCategoriesState) =>
  state.categories;

export default categoriesSlice.reducer;
