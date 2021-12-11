import { configureStore, combineReducers } from '@reduxjs/toolkit';
import mainCategoriesReducer from '../features/menu/reducers/categories.reducer';
import vodCategoriesReducer from '../features/vod/reducers/vodCategories.reducer';

export const store = configureStore({
  reducer: combineReducers({
    main: mainCategoriesReducer,
    vod: vodCategoriesReducer,
  }),
});
export type AppDispatch = typeof store.dispatch;
