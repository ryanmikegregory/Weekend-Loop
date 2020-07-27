import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';

//TODO create storeInstance, wire up reducers, and wrap APP

//CREATE REDUX

const feelingsReducer = (state = [], action) => {
  if (action.type === 'SET_FEELINGS_RATING') {
    return action.payload;
  }
  return state;
};

const understandingReducer = (state = [], action) => {
  if (action.type === 'SET_UNDERSTANDING_RATING') {
    return action.payload;
  }
  return state;
};

const supportReducer = (state = {}, action) => {
  if (action.type === 'SET_SUPPORT_RATING') {
    return action.payload;
  }
  return state;
};

const commentReducer = (state = {}, action) => {
  if (action.type === 'SET_COMMENT_VALUE') {
    return action.payload;
  }

  return state;
};

// const reviewReducer = (state = [], action) => {
//   if (action.type === 'SET_FEELINGS_ARRAY') {
//     return action.payload;
//   }
//   return state;
// };

const storeInstance = createStore(
  combineReducers({
    feelingsReducer,
    understandingReducer,
    supportReducer,
    commentReducer,
    // reviewReducer,
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
