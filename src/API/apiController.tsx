import { apiController } from '../constants/strings';

export const getMenu = async () => {
  return apiCall(apiController.mainMenu);
};

export const getVODMenu = async () => {
  return apiCall(apiController.vodMenu);
};

const apiCall = async (endPoint: string) => {
  const url = apiController.url + endPoint;
  try {
    return await fetch(url, {
      method: 'get',
      headers: new Headers({
        [apiController.headerKey]: apiController.headerValue,
      }),
    });
  } catch (err) {
    console.error(err);
  }
};
