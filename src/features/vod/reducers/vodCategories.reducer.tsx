import { createSlice } from '@reduxjs/toolkit';
import {
  RootState,
  VODCategoriesState,
  VODCategory,
  VODSubCategory,
  VODVideo,
} from '../../../constants/types';
import { store } from '../../../constants/store';

const initialState: VODCategoriesState = {
  categories: [],
  loading: true,
};

const categoriesSlice = createSlice({
  name: 'vod-categories',
  initialState,
  reducers: {
    setVODCategories: (state, action) => {
      state.categories = action.payload.categories;
      state.loading = false;
    },
    setChosenVideo: (state, action) => {
      state.chosenVideo = action.payload.video;
    },
    setChosenCategory: (state, action) => {
      state.chosenCategory = {
        category: action.payload.category,
        subCategory: action.payload.subCategory,
      };
    },
  },
});

export const setVODCategories = (categories: VODCategory[] | null) => {
  store.dispatch(
    categoriesSlice.actions.setVODCategories({
      categories: categories,
    }),
  );
};

export const setChosenVideo = (chosenVideo: VODVideo) => {
  store.dispatch(
    categoriesSlice.actions.setChosenVideo({
      video: chosenVideo,
    }),
  );
};

export const setChosenCategory = (
  chosenCategory: VODCategory,
  chosenSubCategory: VODSubCategory,
) => {
  store.dispatch(
    categoriesSlice.actions.setChosenCategory({
      category: chosenCategory,
      subCategory: chosenSubCategory,
    }),
  );
};

export const selectVODCategories = (state: RootState) => state.vod.categories;
export const selectLoading = (state: RootState) => state.vod.loading;
export const selectChosenVideo = (state: RootState) => state.vod.chosenVideo;
export const selectChosenCategory = (state: RootState) =>
  state.vod.chosenCategory;

export default categoriesSlice.reducer;
