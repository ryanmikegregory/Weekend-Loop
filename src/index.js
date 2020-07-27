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

const feedbackReducer = (state = {}, action) => {
  if (action.type === 'SET_FEELINGS_RATING') {
    return {
      ...state,
      feelings: action.payload,
    };
  } else if (action.type === 'SET_UNDERSTANDING_RATING') {
    return {
      ...state,
      understanding: action.payload,
    };
  } else if (action.type === 'SET_SUPPORT_RATING') {
    return {
      ...state,
      support: action.payload,
    };
  }
  else if (action.type === 'SET_COMMENT_VALUE') {
    return {
      ...state,
      comments: action.payload,
    };
  }
  return state;
};



const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
    
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
