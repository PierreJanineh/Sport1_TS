import { apiControllerStrings } from '../constants/strings';
import * as reducer from '../features/vod/reducers/vodCategories.reducer';
import { VODCategory } from '../constants/types';
import { AppDispatch } from '../constants/store';

export const getMenu = async () => {
  return apiCall(apiControllerStrings.mainMenu);
};

export const getVODMenu = (dispatch: AppDispatch) => {
  let categories: VODCategory[] = [];
  apiCall(apiControllerStrings.vodMenu)
    .then(result => {
      if (result) {
        result.json().then(json => {
          categories = json.categories;
          dispatch(reducer.setVODCategories({ categories: categories }));
        });
      }
    })
    .catch(() => {
      dispatch(reducer.setVODCategories({ categories: null }));
    });
};

const apiCall = async (endPoint: string) => {
  const url = apiControllerStrings.url + endPoint;
  try {
    return await fetch(url, {
      method: 'get',
      headers: new Headers({
        [apiControllerStrings.headerKey]: apiControllerStrings.headerValue,
      }),
    });
  } catch (err) {
    console.error(err);
  }
};
