import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './scss/index.scss';
import createStore from './store-creator';
import App from './app/index';
import reducer from './ducks';

const store = createStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
