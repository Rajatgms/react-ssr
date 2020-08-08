import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../client/reducers/rootReducer';

export default () => {
  const store = createStore(rootReducer, {}, applyMiddleware(thunk));
  return store;
};
