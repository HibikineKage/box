import * as React from 'react';
import { render } from 'react-dom';
import './scss/index.scss';
import { Provider } from 'react-redux';
import createStore from './store-creator';
import App from './app/index';

const store = createStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
