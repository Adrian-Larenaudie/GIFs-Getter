import { IS_LOADING, SET_API_RESULTS } from '../actions/actions';

export const initialState = {
  isLoading: false,
  gifs: undefined,
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

    default:
      return state;
  }
};

export default reducer;
