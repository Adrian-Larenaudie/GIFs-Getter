import { IS_LOADING, SET_API_RESULTS, SET_INPUT_VALUE } from '../actions/actions';

// This is a reducer, its purpose is to set a initial application state
// and change its state when actions are played

export const initialState = {
  isLoading: false,
  gifsData: [],
  keyWord: 'fatigué',
  resultsNumber: 1,
  resultsLanguage: 'fr',
};

// A switch to know wich action is played and what to do in this action case.
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
        gifsData: action.gifsData,
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
