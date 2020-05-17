import React from 'react';
import ReactDOM from 'react-dom';
import ThunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';
import rootReducers from './reducers/index';

const store = createStore(
  rootReducers,
  applyMiddleware(ThunkMiddleware)
);

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
