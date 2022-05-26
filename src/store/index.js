import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'src/reducers';
import resultsMiddleware from '../middlewares/resultsMiddleware';

const middlewares = applyMiddleware(
  resultsMiddleware,
);

const enhancer = composeWithDevTools(middlewares);

const store = createStore(reducer, enhancer);

export default store;
