// This file defines all the actions that there are in this application
// The names assigned to these actions make it possible to strongly identify their purpose

export const IS_LOADING = 'IS_LOADING';
export const SET_API_RESULTS = 'SET_API_RESULTS';
export const GET_API_RESULTS = 'GET_API_RESULTS';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export const changeIsLoadingStatus = (bool) => ({
  type: IS_LOADING,
  isLoading: bool,
});

export const setApiResults = (data) => ({
  type: SET_API_RESULTS,
  gifsData: data,
});

export const getApiResults = () => ({
  type: GET_API_RESULTS,
});

export const setInputValue = (value, id) => ({
  type: SET_INPUT_VALUE,
  value: value,
  id: id,
});
