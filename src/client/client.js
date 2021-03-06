import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import Routes from './Routes';
import rootReducer from './reducers/rootReducer';

const axiosInstance = axios.create({
  baseURL: '/api', // proxy URL
});
const store = createStore(
  rootReducer,
  window.INITIAL_DATA,
  applyMiddleware(thunk.withExtraArgument(axiosInstance)));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
