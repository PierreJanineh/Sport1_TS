import {
  FILTER_CATEGORIES,
  GET_CATEGORIES,
  SET_SEARCH_TXT,
} from './categories.actionsTypes';
import * as ApiController from '../../../API/apiController';
import {AppDispatch, Category, RootState} from '../../../constants/types';

export const getCategories = () => {
  return (dispatch: AppDispatch) => {
    ApiController.getMenu()
      .then(result => {
        if (result) {
          result.json().then(json => {
            dispatch({
              type: GET_CATEGORIES,
              categories: json.categories,
              links: json.links,
            });
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
};

export const filterCategories = () => {
  const searchText = (categories: Category[], searchTxt: string) => {
    const text = searchTxt.toLowerCase();

    return categories.filter(item => {
      return item.title.toLowerCase().includes(text);
    });
  };

  return (dispatch: AppDispatch, getState: () => RootState) => {
    const categories = getState().categories.mainCategories;
    const searchTxt = getState().categories.searchTxt;

    dispatch({
      type: FILTER_CATEGORIES,
      categories: searchText(categories, searchTxt),
    });
  };
};

export const setSearchText = (s: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: SET_SEARCH_TXT,
      searchTxt: s,
    });
  };
};
