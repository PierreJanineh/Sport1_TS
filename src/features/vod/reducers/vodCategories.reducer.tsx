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
    setError: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const selectVODCategories = (state: RootState) => state.vod.categories;
export const selectLoading = (state: RootState) => state.vod.loading;
export const selectChosenVideo = (state: RootState) => state.vod.chosenVideo;
export const selectError = (state: RootState) => state.vod.error;
export const { setVODCategories, setChosenVideo, setError } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;
