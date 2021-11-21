import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/menu/reducers/categories.reducer';

export const store = configureStore({
  reducer,
});
export type AppDispatch = typeof store.dispatch;
