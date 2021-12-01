import { apiControllerStrings } from '../constants/strings';
import * as reducer from '../features/vod/reducers/vodCategories.reducer';
import { VODCategory } from '../constants/types';

export const getMenu = async () => {
  return apiCall(apiControllerStrings.mainMenu);
};

export const getVODMenu = () => {
  let categories: VODCategory[] = [];
  apiCall(apiControllerStrings.vodMenu)
    .then(result => {
      if (result) {
        result.json().then(json => {
          categories = json.categories;
          reducer.setVODCategories(categories);
        });
      }
    })
    .catch(() => {
      reducer.setVODCategories(null);
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
