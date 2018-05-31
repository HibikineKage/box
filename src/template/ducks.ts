import { Action } from 'redux';

export interface State {}

const initialState: State = {};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;

