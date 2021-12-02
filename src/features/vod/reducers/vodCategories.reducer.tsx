import { createSlice } from '@reduxjs/toolkit';
import { RootState, VODCategoriesState } from '../../../constants/types';

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
      state.chosenVideo = action.payload.chosenVideo;
    },
    setChosenCategory: (state, action) => {
      state.chosenCategory = {
        category: action.payload.category,
        subCategory: action.payload.subCategory,
      };
    },
  },
});

export const selectVODCategories = (state: RootState) => state.vod.categories;
export const selectLoading = (state: RootState) => state.vod.loading;
export const selectChosenVideo = (state: RootState) => state.vod.chosenVideo;
export const selectChosenCategory = (state: RootState) =>
  state.vod.chosenCategory;
export const { setVODCategories, setChosenCategory, setChosenVideo } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
