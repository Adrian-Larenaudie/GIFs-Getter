/* eslint-disable prefer-destructuring */
// using Axios to make fetch data easier
import axios from 'axios';
import { GET_API_RESULTS, setApiResults, changeIsLoadingStatus } from '../actions/actions';

// This middleware getting data from API
const resultsMiddleware = (store) => (next) => (action) => {
  // Storage of state values related to data retrieved when the form is submitted by the user
  const keyWord = store.getState().keyWord.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const resultsNumber = store.getState().resultsNumber;
  const resultsLanguage = store.getState().resultsLanguage;
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=A5uUi66zdUt1i6DORIY3onGpZjrf3ZDx&q=
  ${keyWord}&limit=${resultsNumber}&offset=0&rating=g&lang=${resultsLanguage}`;
  // In case of action type is equal to GET_API_REESULTS fetch API's datas using form data
  switch (action.type) {
    case GET_API_RESULTS:
      axios.get(URL)
        .then((response) => {
          store.dispatch(setApiResults(response.data));
          store.dispatch(changeIsLoadingStatus(!store.getState().isLoading));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    default:
  }
  next(action);
};

export default resultsMiddleware;
