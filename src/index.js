import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

//TODO create storeInstance, reducers, and wrap APP
const feelingsReducer = (state = '', action) => {
  if (action.type === 'SET_FEELINGS_RATING') {
    return action.payload;
  }
  return state;
};

const understandingReducer = (state = '', action) => {
  console.log('understanding reducer');
  if (action.type === 'SET_UNDERSTANDING_RATING') {
    console.log(action.payload);
    return action.payload;
  }

  return state;
};

const supportReducer = (state = '', action) => {
  console.log('support reducer');
  if (action.type === 'SET_SUPPORT_RATING') {
    console.log(action.payload);
    return action.payload;
  }

  return state;
};

const commentReducer = (state = '', action) => {
  console.log('comment reducer');
  if (action.type === 'SET_COMMENT_VALUE') {
    console.log(action.payload);
    return action.payload;
  }

  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingsReducer,
    understandingReducer,
    supportReducer,
    commentReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
