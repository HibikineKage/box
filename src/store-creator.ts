import reducer from './ducks';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'

const storeCreator = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default storeCreator;
