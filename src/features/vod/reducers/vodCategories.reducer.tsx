import { createSlice } from '@reduxjs/toolkit';
import {
  RootState,
  VODCategoriesState,
  VODCategory,
} from '../../../constants/types';
import { store } from '../../../constants/store';
import * as ApiController from '../../../API/apiController';

const initialState: VODCategoriesState = {
  categories: [],
  loading: true,
};

const categoriesSlice = createSlice({
  name: 'vod-categories',
  initialState,
  reducers: {
    getVODCategories: (state, action) => {
      state.categories = action.payload.categories;
      state.loading = false;
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
    .catch(() => {
      store.dispatch(
        categoriesSlice.actions.getVODCategories({
          categories: null,
        }),
      );
    });
};

export const selectVODCategories = (state: RootState) => state.vod.categories;
export const selectLoading = (state: RootState) => state.vod.loading;

export default categoriesSlice.reducer;
