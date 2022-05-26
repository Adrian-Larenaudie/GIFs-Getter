import { IS_LOADING, SET_API_RESULTS, SET_INPUT_VALUE } from '../actions/actions';

export const initialState = {
  isLoading: false,
  gifs: undefined,
  keyWord: '',
  resultsNumber: 0,
  resultsLanguage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case SET_API_RESULTS:
      return {
        ...state,
        gifs: action.gifs,
      };
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.id]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
