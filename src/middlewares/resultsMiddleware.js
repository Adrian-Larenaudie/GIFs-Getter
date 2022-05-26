import axios from 'axios';
import { GET_API_RESULTS, setApiResults, changeIsLoadingStatus } from '../actions/actions';

const resultsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_API_RESULTS:
      axios.get('https://api.giphy.com/v1/gifs/search?api_key=A5uUi66zdUt1i6DORIY3onGpZjrf3ZDx&q=terminator&limit=30&offset=0&rating=g&lang=fr')
        .then((response) => {
          console.log(response.data);
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
