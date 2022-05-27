import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import resultsMiddleware from '../middlewares/resultsMiddleware';

// The store holds the whole state tree of the application.
// The only way to change the state inside it is to dispatch an action on it.
const middlewares = applyMiddleware(
  resultsMiddleware,
);

const enhancer = composeWithDevTools(middlewares);

const store = createStore(reducer, enhancer);

export default store;
