import { Action } from 'redux';

enum KeyState {}
interface KeyStatus {
  state: KeyState;
}
interface State {
  keyStatuses: Map<string, KeyStatus>;
}
const initialState: State = { keyStatuses: new Map() };
export const reducer = (state: State = initialState, action: Action) => state;
export default reducer;
