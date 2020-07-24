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
  console.log('feelings reducer');

  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingsReducer,
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
