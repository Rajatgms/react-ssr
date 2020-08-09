import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../client/reducers/rootReducer';
import axios from 'axios';

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com', // API server URL
    headers: {
      cookie: req.get('cookie') || '' // Forward client cookie to API server
    }
  });
  const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance)));
  return store;
};
