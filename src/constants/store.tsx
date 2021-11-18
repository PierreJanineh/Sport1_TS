import { applyMiddleware, createStore } from "redux";
import thunkMiddleWare from 'redux-thunk';
import rootReducer from '../features/menu/reducers/categories.reducers';

const composedEnhancer = applyMiddleware(thunkMiddleWare);
export const store = createStore(rootReducer, composedEnhancer);
