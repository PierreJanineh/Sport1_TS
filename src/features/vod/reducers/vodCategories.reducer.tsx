import { createSlice } from '@reduxjs/toolkit';
import {
  RootState,
  VODCategories,
  VODCategoriesState,
  VODListItem,
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
          let categories: VODListItem[] = json.categories;
          categories.forEach(value => {
            switch (value.id) {
              case 1190:
              case 1194:
                value.type = VODCategories.IsraeliSoccer;
                break;
              case 1155:
              case 1160:
              case 1171:
              case 1179:
              case 1196:
              case 1198:
              case 1201:
                value.type = VODCategories.InternationalSoccer;
                break;
              case 1182:
                value.type = VODCategories.InternationalBasketBall;
                break;
              default:
                value.type = VODCategories.OtherFields;
                break;
            }
          });

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
