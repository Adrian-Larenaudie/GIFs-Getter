export const IS_LOADING = 'IS_LOADING';
export const SET_API_RESULTS = 'SET_API_RESULTS';
export const GET_API_RESULTS = 'GET_API_RESULTS';

export const changeIsLoadingStatus = (bool) => ({
  type: IS_LOADING,
  isLoading: bool,
});

export const setApiResults = (data) => ({
  type: SET_API_RESULTS,
  gifs: data,
});

export const getApiResults = () => ({
  type: GET_API_RESULTS,
});
