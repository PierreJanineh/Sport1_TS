import {actions} from '../reducers/categories.reducer';
import * as ApiController from '../../../API/apiController';
import {Category} from '../../../constants/types';
import {AppDispatch, CategoriesState} from '../../../constants/store';

export const getCategories = (dispatch: AppDispatch) => {
  ApiController.getMenu()
    .then(result => {
      if (result) {
        result.json().then(json => {
          dispatch(
            actions.getCategories({
              mainCategories: json.categories,
              categoriesList: json.categories,
              links: json.links,
            }),
          );
        });
      }
    })
    .catch(err => {
      console.error(err);
    });
};

export const filterCategories = (
  dispatch: AppDispatch,
  state: CategoriesState,
) => {
  const searchText = (categories: Category[], searchTxt: string) => {
    const text = searchTxt.toLowerCase();

    return categories.filter(item => {
      return item.title.toLowerCase().includes(text);
    });
  };

  return () => {
    const categories = state.mainCategories;
    const searchTxt = state.searchTxt;

    dispatch(
      actions.filterCategories({
        categoriesList: searchText(categories, searchTxt),
      }),
    );
  };
};

export const setSearchText = (dispatch: AppDispatch, s: string) => {
  return () => {
    dispatch(
      actions.setSearchText({
        searchTxt: s,
      }),
    );
  };
};
