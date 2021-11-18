import {configureStore} from '@reduxjs/toolkit';
import reducer from '../features/menu/reducers/categories.reducer';
import {Category} from './types';

export const store = configureStore({
  reducer,
});
export type AppDispatch = typeof store.dispatch;

export interface CategoriesState {
  mainCategories: Category[];
  categoriesList: Category[];
  links: {[x: string]: string};
  searchTxt: string;
}
