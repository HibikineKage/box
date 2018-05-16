import reducer from './ducks';
import { createStore } from 'redux';

const storeCreator = () => {
  const store = createStore(reducer);
  return store;
};

export default storeCreator;
